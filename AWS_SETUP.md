# AWS S3 + CloudFront Setup Guide

## Prerequisites
- AWS Account
- AWS CLI installed and configured
- GitHub repository with the workflow file

## Step 1: Create S3 Bucket

```bash
# Replace YOUR_BUCKET_NAME with your desired bucket name
aws s3 mb s3://YOUR_BUCKET_NAME --region us-east-1

# Enable static website hosting
aws s3 website s3://YOUR_BUCKET_NAME --index-document index.html --error-document index.html

# Update bucket policy for public read access
aws s3api put-bucket-policy --bucket YOUR_BUCKET_NAME --policy '{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
    }
  ]
}'

# Disable block public access
aws s3api put-public-access-block --bucket YOUR_BUCKET_NAME --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"
```

## Step 2: Create CloudFront Distribution

```bash
# Create a CloudFront distribution (using AWS CLI)
aws cloudfront create-distribution --origin-domain-name YOUR_BUCKET_NAME.s3-website-us-east-1.amazonaws.com --default-root-object index.html
```

Or use the AWS Console:

1. Go to CloudFront in AWS Console
2. Click "Create Distribution"
3. **Origin Settings:**
   - Origin Domain: Select your S3 bucket (or use: `YOUR_BUCKET_NAME.s3-website-us-east-1.amazonaws.com`)
   - Origin Path: leave blank
   - Name: auto-generated
4. **Default Cache Behavior:**
   - Viewer Protocol Policy: Redirect HTTP to HTTPS
   - Allowed HTTP Methods: GET, HEAD, OPTIONS
   - Cache Policy: CachingOptimized
5. **Distribution Settings:**
   - Price Class: Use all edge locations (or select based on your needs)
   - Alternate Domain Names (CNAMEs): (optional, for custom domain)
   - Default Root Object: `index.html`
6. **Custom Error Response (for React Router):**
   - Go to "Error Pages" tab after creation
   - Create custom error response:
     - HTTP Error Code: 403
     - Customize Error Response: Yes
     - Response Page Path: `/index.html`
     - HTTP Response Code: 200
   - Repeat for 404 error

## Step 3: Configure GitHub Secrets

Add these secrets to your GitHub repository (Settings > Secrets and variables > Actions):

- `AWS_ACCESS_KEY_ID`: Your AWS access key
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret key
- `S3_BUCKET_NAME`: Your S3 bucket name (e.g., `my-ally-trading-site`)
- `CLOUDFRONT_DISTRIBUTION_ID`: Your CloudFront distribution ID (e.g., `E1234ABCD5678`)

To create AWS credentials for GitHub Actions:
1. Go to IAM in AWS Console
2. Create a new user with programmatic access
3. Attach policies: `AmazonS3FullAccess` and `CloudFrontFullAccess`
4. Save the Access Key ID and Secret Access Key

## Step 4: Deploy

Push to the main branch, and GitHub Actions will automatically:
1. Build your React app
2. Upload to S3
3. Invalidate CloudFront cache

## Getting Your Site URL and IP Address

### CloudFront Domain Name (Distribution URL)
After creating the distribution, you'll get a domain like:
```
https://d111111abcdef8.cloudfront.net
```

To find it:
```bash
aws cloudfront list-distributions --query "DistributionList.Items[*].[Id,DomainName]" --output table
```

Or in AWS Console: CloudFront > Distributions > Domain Name column

### IP Addresses
CloudFront uses multiple IP addresses globally. To get the IP ranges:

```bash
# Get current CloudFront IP ranges
curl https://ip-ranges.amazonaws.com/ip-ranges.json | jq -r '.prefixes[] | select(.service=="CLOUDFRONT") | .ip_prefix'
```

**Important Notes:**
- CloudFront IPs change dynamically - don't hardcode them
- Use the CloudFront domain name instead of IP addresses
- For custom domains, configure Route 53 or your DNS provider to point to the CloudFront domain

### Testing Your Deployment
```bash
# Test S3 endpoint (if public)
curl http://YOUR_BUCKET_NAME.s3-website-us-east-1.amazonaws.com

# Test CloudFront distribution
curl https://YOUR_CLOUDFRONT_DOMAIN.cloudfront.net

# Get distribution details
aws cloudfront get-distribution --id YOUR_DISTRIBUTION_ID
```

## Custom Domain (Optional)

To use your own domain:
1. Request SSL certificate in AWS Certificate Manager (us-east-1 region)
2. Add domain to CloudFront distribution's "Alternate Domain Names"
3. Update DNS (Route 53 or external):
   - Type: CNAME or A (with Alias)
   - Value: Your CloudFront domain name
