import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{fontFamily: '"Work Sans", "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-4 md:px-10 py-3">
          <Link to="/" className="flex items-center gap-4 text-[#111418] hover:opacity-80 transition-opacity">
            <div className="size-8 md:size-10">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-[#111418] text-sm md:text-lg font-bold leading-tight tracking-[-0.015em]">Global Commodities Trading Co.</h2>
          </Link>
          <div className="flex flex-1 justify-end gap-2 md:gap-8">
            <div className="flex items-center gap-9">
              <Link to="/products" className="text-[#111418] text-sm font-medium leading-normal">Products</Link>
              <Link to="/contact" className="text-[#111418] text-sm font-medium leading-normal">Contact</Link>
            </div>
            <Link to="/contact">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Contact Us</span>
              </button>
            </Link>
          </div>
        </header>

        <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap gap-2 p-4">
              <Link to="/" className="text-[#617489] text-base font-medium leading-normal">Home</Link>
              <span className="text-[#617489] text-base font-medium leading-normal">/</span>
              <span className="text-[#111418] text-base font-medium leading-normal">Products</span>
            </div>

            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#111418] tracking-light text-2xl md:text-[32px] font-bold leading-tight">Our Products</p>
                <p className="text-[#617489] text-sm font-normal leading-normal">Explore our range of high-quality commodities sourced from trusted suppliers worldwide.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
              {/* Sugar Product */}
              <div className="flex flex-col gap-4 p-6 border border-[#dbe0e6] rounded-xl bg-white">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-square rounded-xl"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDl4_PQrGd2B_ngMpSYvYlVkHv4CiRXJhO_2VsVWtpn2ONUbRDuWdIfQjGY5pl4bEU6wlEU70XummYOvUemQ_dRrftt436X1rDw0k2FYt9W-HS6vmKAsGxjk-Lbcm8NAQqN_Kob2W1zqYio_nIzuEtyY7orgE8Gb0tddFwqXYCM-F-1EZSaMYcHYaljswC0cIvsWt1OI3pfBW7BemwtUl67Am-vwH6_FRqHqyzC8SFVHals7_oqTC7U7KnlSXhlOuyHk-Fu4dh2rto")'
                  }}
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111418] text-xl font-bold leading-tight">Sugar</h3>
                  <p className="text-[#617489] text-sm font-normal leading-normal">
                    High-quality sugar sourced from leading producers worldwide. Available in refined and unrefined varieties.
                  </p>
                  <div className="flex flex-col gap-1 mt-2">
                    <div className="flex justify-between">
                      <span className="text-[#617489] text-xs">Origin:</span>
                      <span className="text-[#111418] text-xs">Brazil, Thailand, India</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#617489] text-xs">Grade:</span>
                      <span className="text-[#111418] text-xs">45 ICUMSA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#617489] text-xs">Packaging:</span>
                      <span className="text-[#111418] text-xs">25kg, 50kg bags, bulk</span>
                    </div>
                  </div>
                  <Link to="/products/sugar" className="mt-4">
                    <button className="w-full flex items-center justify-center rounded-lg h-10 px-4 bg-[#1275e7] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                      <span>View Details</span>
                    </button>
                  </Link>
                </div>
              </div>

              {/* Chicken Feet Product */}
              <div className="flex flex-col gap-4 p-6 border border-[#dbe0e6] rounded-xl bg-white">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-square rounded-xl"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBI0Aj82byikZzvQuG3mKqd0KIyzCtTtH7DBJShK2CIIWW-vejRnI5pvXU7lU_2UXGLQeaBK2ZpbsLZLVws2NDMuwxDIBTpxjdHu0u_2Vi9mFOa6S1iAaMmgpq9zYLkPm8jZkGk3Q-byxvaqkgsDYDOLwnh__1p8HXeujDZb1JyAntetd0CbFVS3pkBz9znTwAnTR-UdfADbhowy7r-L9zmLhMjN8xzYTP6J3g-Z9IGAOpgmTGONq2xCGf1fJg4UPaQDwxWJN-1q5E")'
                  }}
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#111418] text-xl font-bold leading-tight">Frozen Chicken Feet</h3>
                  <p className="text-[#617489] text-sm font-normal leading-normal">
                    Premium quality frozen chicken feet, sourced from trusted suppliers. Ideal for various culinary applications.
                  </p>
                  <div className="flex flex-col gap-1 mt-2">
                    <div className="flex justify-between">
                      <span className="text-[#617489] text-xs">Origin:</span>
                      <span className="text-[#111418] text-xs">Brazil</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#617489] text-xs">Grade:</span>
                      <span className="text-[#111418] text-xs">Grade A</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#617489] text-xs">Packaging:</span>
                      <span className="text-[#111418] text-xs">10 kg cartons</span>
                    </div>
                  </div>
                  <Link to="/products/chicken-feet" className="mt-4">
                    <button className="w-full flex items-center justify-center rounded-lg h-10 px-4 bg-[#1275e7] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                      <span>View Details</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Why Choose Our Products?</h2>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
              We are committed to providing high-quality commodities sourced from trusted suppliers worldwide. Our products meet international standards 
              and are backed by our commitment to sustainability and ethical sourcing practices.
            </p>

            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">General Inquiries</h2>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <textarea
                  placeholder="Enter your inquiry here"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dbe0e6] bg-white focus:border-[#dbe0e6] min-h-36 placeholder:text-[#617489] p-[15px] text-base font-normal leading-normal"
                />
              </label>
            </div>
            <div className="flex px-4 py-3 justify-end">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#1275e7] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Submit Inquiry</span>
              </button>
            </div>
          </div>
        </div>

        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a className="text-[#617489] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
                <a className="text-[#617489] text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
                <a className="text-[#617489] text-base font-normal leading-normal min-w-40" href="#">Contact Us</a>
              </div>
              <p className="text-[#617489] text-base font-normal leading-normal">© 2023 Global Commodities Trading Co. All rights reserved.</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Products;