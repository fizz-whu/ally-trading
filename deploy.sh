#!/bin/bash

echo "Starting deployment of Ally Trading app..."

# Navigate to project directory
cd /home/ubuntu/ally-trading

# Install dependencies
echo "Installing dependencies..."
npm install

# Install serve globally if not already installed
echo "Installing serve globally..."
sudo npm install -g serve

# Build the React app
echo "Building React app..."
npm run build

# Create logs directory
mkdir -p logs

# Stop existing PM2 process if running
pm2 delete ally-trading 2>/dev/null || true

# Start with PM2
echo "Starting app with PM2..."
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Setup PM2 startup script
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu

echo "✅ Ally Trading app deployed successfully!"
echo "📊 App running on port 3000"
echo "🔍 Check status: pm2 status"
echo "📝 View logs: pm2 logs ally-trading"