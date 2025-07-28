import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{fontFamily: '"Work Sans", "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f1f2f4] px-4 md:px-10 py-3">
          <div className="flex items-center gap-4 text-[#121416]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-[#121416] text-sm md:text-lg font-bold leading-tight tracking-[-0.015em]">Ally International Trading Inc.</h2>
          </div>
          <div className="flex flex-1 justify-end gap-2 md:gap-8">
            <div className="hidden md:flex items-center gap-9">
              <a className="text-[#121416] text-sm font-medium leading-normal" href="#">About</a>
              <a className="text-[#121416] text-sm font-medium leading-normal" href="#">Services</a>
              <Link to="/products" className="text-[#121416] text-sm font-medium leading-normal">Products</Link>
              <a className="text-[#121416] text-sm font-medium leading-normal" href="#">Sustainability</a>
              <a className="text-[#121416] text-sm font-medium leading-normal" href="#">News</a>
              <a className="text-[#121416] text-sm font-medium leading-normal" href="#">Careers</a>
            </div>
            <Link to="/contact">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f1f2f4] text-[#121416] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Contact Us</span>
              </button>
            </Link>
          </div>
        </header>

        <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#121416] tracking-light text-2xl md:text-[32px] font-bold leading-tight">Contact Us</p>
                <p className="text-[#6a7581] text-sm font-normal leading-normal">We're here to help. Please reach out to us with any questions or inquiries.</p>
              </div>
            </div>

            <div className="flex max-w-full md:max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#121416] text-base font-medium leading-normal pb-2">Name</p>
                <input
                  placeholder="Your Name"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121416] focus:outline-0 focus:ring-0 border border-[#dde0e3] bg-white focus:border-[#dde0e3] h-14 placeholder:text-[#6a7581] p-[15px] text-base font-normal leading-normal"
                />
              </label>
            </div>

            <div className="flex max-w-full md:max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#121416] text-base font-medium leading-normal pb-2">Email</p>
                <input
                  placeholder="Your Email"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121416] focus:outline-0 focus:ring-0 border border-[#dde0e3] bg-white focus:border-[#dde0e3] h-14 placeholder:text-[#6a7581] p-[15px] text-base font-normal leading-normal"
                />
              </label>
            </div>

            <div className="flex max-w-full md:max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#121416] text-base font-medium leading-normal pb-2">Subject</p>
                <input
                  placeholder="Subject"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121416] focus:outline-0 focus:ring-0 border border-[#dde0e3] bg-white focus:border-[#dde0e3] h-14 placeholder:text-[#6a7581] p-[15px] text-base font-normal leading-normal"
                />
              </label>
            </div>

            <div className="flex max-w-full md:max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#121416] text-base font-medium leading-normal pb-2">Message</p>
                <textarea
                  placeholder="Your Message"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121416] focus:outline-0 focus:ring-0 border border-[#dde0e3] bg-white focus:border-[#dde0e3] min-h-36 placeholder:text-[#6a7581] p-[15px] text-base font-normal leading-normal"
                />
              </label>
            </div>

            <div className="flex px-4 py-3 justify-start">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#c5d7eb] text-[#121416] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Submit</span>
              </button>
            </div>

            <h2 className="text-[#121416] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Locations</h2>
            <div className="flex px-4 py-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl object-cover"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqoT480GO368RUxZs4UAdC-kfay77jFtIz8g9Wm70-ome5zNrU4PMeRuE_diM1vynASsB2vLMxfxdXTdFSJglW4sOfzgLVW521Q4prWI789CLCA-BB7v_IZ2vMkcMeD4IL6bK1crjWXKIBhy8Y1VWzC6tI-QsSeKsYK1miCzR2RNoaERjs1FJpLBb5LU-RiarquvAG2GSfu8QksBZ3hs6GtbvsWg2743u0JAc2q0Fcbu1eepJtM2Y5NZ3pKDlx_b2mMUxD_dhfbqM")'
                }}
              />
            </div>

            <div className="p-4 grid grid-cols-1 md:grid-cols-[20%_1fr] gap-x-6 gap-y-4">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
                <p className="text-[#6a7581] text-sm font-normal leading-normal">Address</p>
                <p className="text-[#121416] text-sm font-normal leading-normal">Global Trade Center, 123 Commerce Ave, Tradeville, Global</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
                <p className="text-[#6a7581] text-sm font-normal leading-normal">Phone</p>
                <p className="text-[#121416] text-sm font-normal leading-normal">+1 (555) 123-4567</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
                <p className="text-[#6a7581] text-sm font-normal leading-normal">Email</p>
                <p className="text-[#121416] text-sm font-normal leading-normal">info@allytrading.com</p>
              </div>
            </div>
          </div>
        </div>

        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a className="text-[#6a7581] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
                <a className="text-[#6a7581] text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
              </div>
              <p className="text-[#6a7581] text-base font-normal leading-normal">© 2023 Ally International Trading Inc. All rights reserved.</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Contact;