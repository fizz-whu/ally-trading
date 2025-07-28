import React from 'react';
import { Link } from 'react-router-dom';

function ChickenFeet() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{fontFamily: '"Work Sans", "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-3">
          <Link to="/" className="flex items-center gap-4 text-[#111418] hover:opacity-80 transition-opacity">
            <div className="size-8 md:size-10">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">Global Trade Co.</h2>
          </Link>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <Link to="/products" className="text-[#111418] text-sm font-medium leading-normal">Products</Link>
              <Link to="/contact" className="text-[#111418] text-sm font-medium leading-normal">Contact</Link>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Login</span>
            </button>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap gap-2 p-4">
              <Link to="/products" className="text-[#617389] text-base font-medium leading-normal">Products</Link>
              <span className="text-[#617389] text-base font-medium leading-normal">/</span>
              <span className="text-[#111418] text-base font-medium leading-normal">Frozen Chicken Feet</span>
            </div>
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Frozen Chicken Feet</p>
                <p className="text-[#617389] text-sm font-normal leading-normal">
                  Premium quality frozen chicken feet, sourced from trusted suppliers. Ideal for various culinary applications.
                </p>
              </div>
            </div>
            <div className="flex w-full grow bg-white @container p-4">
              <div className="w-full gap-1 overflow-hidden bg-white @[480px]:gap-2 aspect-[3/2] rounded-xl grid grid-cols-[2fr_1fr_1fr]">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none row-span-2"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBI0Aj82byikZzvQuG3mKqd0KIyzCtTtH7DBJShK2CIIWW-vejRnI5pvXU7lU_2UXGLQeaBK2ZpbsLZLVws2NDMuwxDIBTpxjdHu0u_2Vi9mFOa6S1iAaMmgpq9zYLkPm8jZkGk3Q-byxvaqkgsDYDOLwnh__1p8HXeujDZb1JyAntetd0CbFVS3pkBz9znTwAnTR-UdfADbhowy7r-L9zmLhMjN8xzYTP6J3g-Z9IGAOpgmTGONq2xCGf1fJg4UPaQDwxWJN-1q5E")'}}
                />
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmuSIQCL53AZhU96McGP-CzBTwn2B9KvJ6QuSBVQSvcvvSekxZEsRC9pXjd3RI91YKOSy3zl9_B2HP_B6d9dwt8aBR-_KrE_6xb9C2hp_aPmnj84Eq9-nEY1pKzR0OOmGci21VTCbsZlLjpv3m7w0w6W4iJyM3561LaQBVuOB6iP7145O6lYGnEDq-3icgD2MMf4m5Xi-JnNrn-0uD25XYz0UdHMtZjDOoejEsPb5MqeArVgdiZFHwb5Q9CmZrBFSqO5ISZ1ctuRA")'}}
                />
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBe3r3R6q_LPSUL1dgHNjrRrPDeRDP3FsQht0Yr0gqrTjSHC-wYHRn401hDN-ijcjXRMdU5Bob6C48ad5ycWnTPvLYXQyHh0X_hsoolHyR2EdOfBQlbUMPI4XJWG-_sgVzdtcCSFVZiy_f4hcL3GX2m7JFOxuE4zeYZdzwx7Gl68RHCrL3N7eQ-yeS-5KM_hsC3ID65wTkIQIDdnQMQOJZdNMrX3JAlbbXrTMqi0uv0HqlAQZJz9PdiezoXI3Mol_ChVd97FZPb9uI")'}}
                />
              </div>
            </div>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Product Specifications</h2>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
                <p className="text-[#617389] text-sm font-normal leading-normal">Grade</p>
                <p className="text-[#111418] text-sm font-normal leading-normal">Grade A</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
                <p className="text-[#617389] text-sm font-normal leading-normal">Average Weight</p>
                <p className="text-[#111418] text-sm font-normal leading-normal">50-70 grams per piece</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
                <p className="text-[#617389] text-sm font-normal leading-normal">Packaging</p>
                <p className="text-[#111418] text-sm font-normal leading-normal">10 kg cartons</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
                <p className="text-[#617389] text-sm font-normal leading-normal">Origin</p>
                <p className="text-[#111418] text-sm font-normal leading-normal">Brazil</p>
              </div>
            </div>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Suggested Uses</h2>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Chicken feet are a popular ingredient in various cuisines, known for their unique texture and flavor. They are commonly used in soups, stews, and braised dishes.
              Their gelatinous texture adds richness and depth to broths and sauces.
            </p>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Contact Us</h2>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">For inquiries, pricing, and bulk orders, please contact our sales team.</p>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#111418] text-base font-medium leading-normal pb-2">Name</p>
                <input
                  placeholder="Your Name"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#617389] p-4 text-base font-normal leading-normal"
                  defaultValue=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#111418] text-base font-medium leading-normal pb-2">Email</p>
                <input
                  placeholder="Your Email"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#617389] p-4 text-base font-normal leading-normal"
                  defaultValue=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#111418] text-base font-medium leading-normal pb-2">Message</p>
                <textarea
                  placeholder="Your Message"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none min-h-36 placeholder:text-[#617389] p-4 text-base font-normal leading-normal"
                />
              </label>
            </div>
            <div className="flex px-4 py-3 justify-start">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#0f6bdb] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Send Inquiry</span>
              </button>
            </div>
          </div>
        </div>
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a className="text-[#617389] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
                <a className="text-[#617389] text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
              </div>
              <p className="text-[#617389] text-base font-normal leading-normal">@2024 Global Trade Co. All rights reserved.</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ChickenFeet;