import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{fontFamily: '"Work Sans", "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-4 md:px-10 py-3">
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
            <h2 className="text-[#111418] text-sm md:text-lg font-bold leading-tight tracking-[-0.015em]">Ally International Trading Inc.</h2>
          </div>
          <div className="flex flex-1 justify-end gap-2 md:gap-8">
            <div className="hidden md:flex items-center gap-9">
              <a className="text-[#111418] text-sm font-medium leading-normal" href="#">About</a>
              <Link to="/products" className="text-[#111418] text-sm font-medium leading-normal">Products</Link>
              <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Services</a>
              <Link to="/contact" className="text-[#111418] text-sm font-medium leading-normal">Contact</Link>
            </div>
            <button className="hidden md:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Login</span>
            </button>
            <button 
              className="md:hidden p-2" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#f0f2f4] px-4 py-3">
            <div className="flex flex-col gap-3">
              <a className="text-[#111418] text-sm font-medium leading-normal py-2" href="#">About</a>
              <Link to="/products" className="text-[#111418] text-sm font-medium leading-normal py-2" onClick={() => setMobileMenuOpen(false)}>Products</Link>
              <a className="text-[#111418] text-sm font-medium leading-normal py-2" href="#">Services</a>
              <Link to="/contact" className="text-[#111418] text-sm font-medium leading-normal py-2" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <button className="flex w-full justify-center items-center rounded-lg h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] mt-2">
                <span className="truncate">Login</span>
              </button>
            </div>
          </div>
        )}

        <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAIDL4ISRgUiJJyANXqHfGQi2xhjtenQC4a9VyMBbaO8Op6E2Y4RswXfAJGUdx5Sr7gFVA90lIMgCBXFq9ZDP8w6y2S1mgo-UMQY_dmAwdkWV729sz6nJyh2AZEf-7KW7PUG5jHFGZv2JwHwP98sBQQ6yxM8kp88uTHjJcB4XVNKxVuo4YEo9ZYztGCmH30H0VDe1-mu4iI7hsQP1z8Dab6n6rMg9km_NOtn6skniOoax6xzaJvADHqIJLbbQsMiQcOyfvl2_flB7s")'
                  }}
                >
                  <div className="flex flex-col gap-2 text-left max-w-full">
                    <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
                      Your Global Partner in Commodity Trading
                    </h1>
                    <h2 className="text-white text-xs md:text-sm lg:text-base font-normal leading-normal">
                      Ally International Trading Inc. is a leading international trading company specializing in a wide range of commodities. With a global network and deep market
                      insights, we connect buyers and sellers across the world, ensuring efficient and reliable trade solutions.
                    </h2>
                  </div>
                  <Link to="/products">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1873dc] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                      <span className="truncate">Explore Our Products</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Products</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtBQK2jwvImYusK2g5KtB6c043K4iqNXyW06AFJGnfq6hlXpObLFxevu1yGhxN3I3b41A80g2qKQ9Wi4P_d5q0LYuliUzp2mExkpBMZZNvn0XQiuAG1hcoeTLucwlw5w8ipVs-n4A9DDADLosz6c-ARBfF5uPfbL6zUdfpd5sNYiS66sRTrGbVCrLyrvY4xionngBCUG4kXwNb9fQK2C8KGwSxEx_HApYCMYYIqmwYCUoLxarTcUa-oDX_EZoItS6PBiX2YoSkfVg")'
                  }}
                />
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">Agricultural Products</p>
                  <p className="text-[#637488] text-sm font-normal leading-normal">Grains, oilseeds, and other agricultural commodities</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBI1pk4DW0ZNq2hZINIG2WE3dc3fsqNjqBO5CpPKMEhROZD5NG0UL59yKjqPryARiIvofS8YHbvoXYj1xPPxk58VGwomSeg5jews7DeNrT_oEaGnZZbXL-DUNHSb0HtT_OtprCP3ufRrJZBiOmuYQztSJU640uJNM4z29Z_x24cxjpC2HolkgkqUNzsXLQJEd7IyOvRJcFQz1vJva0s2weBMykwNcU4pHoJS40kNEz69t4YouDh0F5_kaXvzPtFExYuFx3ypyX7q_I")'
                  }}
                />
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">Energy Products</p>
                  <p className="text-[#637488] text-sm font-normal leading-normal">Crude oil, natural gas, and refined petroleum products</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC25AbVh_F9T5PxBIlGlln3ILE9lJQbOwU0H3P154XmgscXUXuZ_vFepLrfD3RNkqbDeBUfk5cq4LkYnUdbp9H2iYuXVe8ZFkem4xPBvL-4HF9r5qUFY4s9eykXEKlxGAkq2DneQsuKOqy1AbR_13Hw4KrupLmzpBvcLWA_MZVhFQdT14_RUzQ54FyCI0a5wNnauwWSg11aJSpAJ3IlLsXRnuShAYdLVc7KKKC4vdrxMD-UM5lzCoUAiQVk_Q_XYtVLkLjxxt8ZJb4")'
                  }}
                />
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">Metals and Minerals</p>
                  <p className="text-[#637488] text-sm font-normal leading-normal">Base metals, precious metals, and industrial minerals</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDixUnWtrHep1Az0m4gFpoZs8sf6AsKSJRh_l2wWt1oWhIS-k3j9qJ36BW9c6NcZtThEnTxJZYH1YwaoBlQfhjvlgllp2cp-4IlOjy_k8GlwsfMFVvwUsOzGWXGyIkbEB1nlniJXP4bnv9VxziAXXLbQEXpTUJb436A_huhFRIE4SMPVTzug96A4NERoCoKiRKaU1Vmm1aKoARRVvMjp_A_Ivk8jzgCeOgoBs6LS-rDWwmtF_Bg17-j_574Q-zVQOBYtDadSTEj6J8")'
                  }}
                />
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">Chemicals</p>
                  <p className="text-[#637488] text-sm font-normal leading-normal">Industrial chemicals, specialty chemicals, and petrochemicals</p>
                </div>
              </div>
            </div>

            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Why Choose Us?</h2>
            <div className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  Our Commitment
                </h1>
                <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px]">
                  At Ally International Trading Inc., we are dedicated to providing our clients with the highest level of service and expertise. Our team of experienced
                  professionals works tirelessly to ensure that every transaction is executed smoothly and efficiently, delivering value and building long-term partnerships.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
                  <div className="text-[#111418]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.62,87.62,0,0,1-6.4,32.94l-44.7-27.49a15.92,15.92,0,0,0-6.24-2.23l-22.82-3.08a16.11,16.11,0,0,0-16,7.86h-8.72l-3.8-7.86a15.91,15.91,0,0,0-11-8.67l-8-1.73L96.14,104h16.71a16.06,16.06,0,0,0,7.73-2l12.25-6.76a16.62,16.62,0,0,0,3-2.14l26.91-24.34A15.93,15.93,0,0,0,166,49.1l-.36-.65A88.11,88.11,0,0,1,216,128ZM143.31,41.34,152,56.9,125.09,81.24,112.85,88H96.14a16,16,0,0,0-13.88,8l-8.73,15.23L63.38,84.19,74.32,58.32a87.87,87.87,0,0,1,69-17ZM40,128a87.53,87.53,0,0,1,8.54-37.8l11.34,30.27a16,16,0,0,0,11.62,10l21.43,4.61L96.74,143a16.09,16.09,0,0,0,14.4,9h1.48l-7.23,16.23a16,16,0,0,0,2.86,17.37l.14.14L128,205.94l-1.94,10A88.11,88.11,0,0,1,40,128Zm102.58,86.78,1.13-5.81a16.09,16.09,0,0,0-4-13.9,1.85,1.85,0,0,1-.14-.14L120,174.74,133.7,144l22.82,3.08,45.72,28.12A88.18,88.18,0,0,1,142.58,214.78Z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight">Global Reach</h2>
                    <p className="text-[#637488] text-sm font-normal leading-normal">Extensive network of partners and suppliers across the globe</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
                  <div className="text-[#111418]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight">Market Expertise</h2>
                    <p className="text-[#637488] text-sm font-normal leading-normal">Deep understanding of commodity markets and trends</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
                  <div className="text-[#111418]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M247.42,117l-14-35A15.93,15.93,0,0,0,218.58,72H184V64a8,8,0,0,0-8-8H24A16,16,0,0,0,8,72V184a16,16,0,0,0,16,16H41a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.94,7.94,0,0,0,247.42,117ZM184,88h34.58l9.6,24H184ZM24,72H168v64H24ZM72,208a16,16,0,1,1,16-16A16,16,0,0,1,72,208Zm81-24H103a32,32,0,0,0-62,0H24V152H168v12.31A32.11,32.11,0,0,0,153,184Zm31,24a16,16,0,1,1,16-16A16,16,0,0,1,184,208Zm48-24H215a32.06,32.06,0,0,0-31-24V128h48Z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight">Reliable Solutions</h2>
                    <p className="text-[#637488] text-sm font-normal leading-normal">Efficient and dependable trading and logistics services</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
                  <div className="text-[#111418]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07ZM153.75,189.5c-22.75,13.78-49.68,14-76.71.77l88.63-88.62a8,8,0,0,0-11.32-11.32L65.73,179c-13.19-27-13-54,.77-76.71,22.09-36.47,74.6-56.44,141.31-54.06C210.2,114.89,190.22,167.41,153.75,189.5Z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#111418] text-base font-bold leading-tight">Sustainable Practices</h2>
                    <p className="text-[#637488] text-sm font-normal leading-normal">Commitment to ethical and environmentally responsible trading</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="@container">
              <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                    Ready to Trade?
                  </h1>
                  <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px]">
                    Get in touch with our team to discuss your commodity trading needs and how we can help you achieve your goals.
                  </p>
                </div>
                <div className="flex flex-1 justify-center">
                  <div className="flex justify-center">
                    <Link to="/contact">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1873dc] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
                        <span className="truncate">Contact Us</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a className="text-[#637488] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
                <a className="text-[#637488] text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#">
                  <div className="text-[#637488]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"/>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div className="text-[#637488]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"/>
                    </svg>
                  </div>
                </a>
              </div>
              <p className="text-[#637488] text-base font-normal leading-normal">© 2024 Ally International Trading Inc. All rights reserved.</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;