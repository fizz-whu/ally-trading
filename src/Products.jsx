import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{fontFamily: '"Work Sans", "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-3">
          <div className="flex items-center gap-4 text-[#111418]">
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
            <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">Global Commodities Trading Co.</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#111418] text-sm font-medium leading-normal" href="#">About Us</a>
              <Link to="/products" className="text-[#111418] text-sm font-medium leading-normal">Products</Link>
              <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Services</a>
              <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Sustainability</a>
              <a className="text-[#111418] text-sm font-medium leading-normal" href="#">News</a>
              <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Careers</a>
              <Link to="/contact" className="text-[#111418] text-sm font-medium leading-normal">Contact</Link>
            </div>
            <Link to="/contact">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Contact Us</span>
              </button>
            </Link>
          </div>
        </header>

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap gap-2 p-4">
              <Link to="/" className="text-[#617489] text-base font-medium leading-normal">Home</Link>
              <span className="text-[#617489] text-base font-medium leading-normal">/</span>
              <Link to="/products" className="text-[#617489] text-base font-medium leading-normal">Products</Link>
              <span className="text-[#617489] text-base font-medium leading-normal">/</span>
              <span className="text-[#111418] text-base font-medium leading-normal">Sugar</span>
            </div>

            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Sugar</p>
                <p className="text-[#617489] text-sm font-normal leading-normal">High-quality sugar sourced from leading producers worldwide.</p>
              </div>
            </div>

            <div className="flex w-full grow bg-white @container p-4">
              <div className="w-full gap-1 overflow-hidden bg-white @[480px]:gap-2 aspect-[3/2] rounded-xl grid grid-cols-[2fr_1fr_1fr]">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none row-span-2"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDl4_PQrGd2B_ngMpSYvYlVkHv4CiRXJhO_2VsVWtpn2ONUbRDuWdIfQjGY5pl4bEU6wlEU70XummYOvUemQ_dRrftt436X1rDw0k2FYt9W-HS6vmKAsGxjk-Lbcm8NAQqN_Kob2W1zqYio_nIzuEtyY7orgE8Gb0tddFwqXYCM-F-1EZSaMYcHYaljswC0cIvsWt1OI3pfBW7BemwtUl67Am-vwH6_FRqHqyzC8SFVHals7_oqTC7U7KnlSXhlOuyHk-Fu4dh2rto")'
                  }}
                />
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCU-fiWIe_q4QnHPlK4LrDZLfExIiuL12_2QtJbYOraoB6dxiwDb2hu20tYuZu_DGoaPn9Wn_3Y7H3ulrZNos74XFgBJRkLKNDC2zAxL_RDiTN1Y4aEb1DDllaofA7XavNXmzuUHH4M1xc0KZwVN090hn00a9lc-cGP2B9ThCyrEpVtneshYHZcqA3dFwEeRfWFuGTZgLRG8ankQdtWOz6rRT6a40NwUXbCcHCc5I1JAHS1g3_pSP9LnRL0Sv29ZqvvPnrrgSQIHwQ")'
                  }}
                />
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwOLjj6gB3YARAXmwLj3cFMdQjK_4Te0wmysVhXQYtsqmSDe7MWwFkucG9QSrJL2i9KcPiNuOIjqu3oJr1dQD7erTZRkaegd7BBXg8migxZ4VoYkRWGqOkSVxmKpP18B7D2NA8NfTTqxw7lo27mtHzjCzBjpfTUA8kpM_w74sjsyXwOKJGJq-Oxvbxt2adMQq4pVBwYW2jH5ZLMNjpv4Lt-M6lHyrM_m8Eg7unVkl0KqfuADv0af_-PB16GO3gHZzhXRKibmu0mUM")'
                  }}
                />
              </div>
            </div>

            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Product Specifications</h2>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
                <p className="text-[#617489] text-sm font-normal leading-normal">Type</p>
                <p className="text-[#111418] text-sm font-normal leading-normal">Refined, Unrefined</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
                <p className="text-[#617489] text-sm font-normal leading-normal">Origin</p>
                <p className="text-[#111418] text-sm font-normal leading-normal">Brazil, Thailand, India</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
                <p className="text-[#617489] text-sm font-normal leading-normal">ICUMSA</p>
                <p className="text-[#111418] text-sm font-normal leading-normal">45 ICUMSA</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
                <p className="text-[#617489] text-sm font-normal leading-normal">Packaging</p>
                <p className="text-[#111418] text-sm font-normal leading-normal">25kg, 50kg bags, bulk</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
                <p className="text-[#617489] text-sm font-normal leading-normal">Potential Uses</p>
                <p className="text-[#111418] text-sm font-normal leading-normal">Food, Beverage, Industrial</p>
              </div>
            </div>

            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">About Our Sugar</h2>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Our sugar is sourced from top producers, ensuring consistent quality and purity. We offer various types to meet diverse needs, from food and beverage production to
              industrial applications. Our commitment to sustainability and ethical sourcing ensures a reliable supply chain.
            </p>

            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Inquiries</h2>
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