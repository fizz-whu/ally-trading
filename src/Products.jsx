import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from './LanguageContext';
import Header from './components/Header';

function Products() {
  const { t } = useTranslation();
  
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{fontFamily: '"Work Sans", "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />

        <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap gap-2 p-4">
              <Link to="/" className="text-[#617489] text-base font-medium leading-normal">{t('products.breadcrumb.home')}</Link>
              <span className="text-[#617489] text-base font-medium leading-normal">/</span>
              <span className="text-[#111418] text-base font-medium leading-normal">{t('products.breadcrumb.products')}</span>
            </div>

            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#111418] tracking-light text-2xl md:text-[32px] font-bold leading-tight">{t('products.title')}</p>
                <p className="text-[#617489] text-sm font-normal leading-normal">{t('products.subtitle')}</p>
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
                  <h3 className="text-[#111418] text-xl font-bold leading-tight">{t('products.sugar.name')}</h3>
                  <p className="text-[#617489] text-sm font-normal leading-normal">
                    {t('products.sugar.detailDescription')}
                  </p>
                  <div className="flex flex-col gap-1 mt-2">
                    <div className="flex justify-between">
                      <span className="text-[#617489] text-xs">{t('products.origin')}:</span>
                      <span className="text-[#111418] text-xs">{t('products.sugar.origin')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#617489] text-xs">{t('products.grade')}:</span>
                      <span className="text-[#111418] text-xs">{t('products.sugar.grade')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#617489] text-xs">{t('products.packaging')}:</span>
                      <span className="text-[#111418] text-xs">{t('products.sugar.packaging')}</span>
                    </div>
                  </div>
                  <Link to="/products/sugar" className="mt-4">
                    <button className="w-full flex items-center justify-center rounded-lg h-10 px-4 bg-[#1275e7] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                      <span>{t('products.viewDetails')}</span>
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
                  <h3 className="text-[#111418] text-xl font-bold leading-tight">{t('products.chickenFeet.fullName')}</h3>
                  <p className="text-[#617489] text-sm font-normal leading-normal">
                    {t('products.chickenFeet.detailDescription')}
                  </p>
                  <div className="flex flex-col gap-1 mt-2">
                    <div className="flex justify-between">
                      <span className="text-[#617489] text-xs">{t('products.origin')}:</span>
                      <span className="text-[#111418] text-xs">{t('products.chickenFeet.origin')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#617489] text-xs">{t('products.grade')}:</span>
                      <span className="text-[#111418] text-xs">{t('products.chickenFeet.grade')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#617489] text-xs">{t('products.packaging')}:</span>
                      <span className="text-[#111418] text-xs">{t('products.chickenFeet.packaging')}</span>
                    </div>
                  </div>
                  <Link to="/products/chicken-feet" className="mt-4">
                    <button className="w-full flex items-center justify-center rounded-lg h-10 px-4 bg-[#1275e7] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                      <span>{t('products.viewDetails')}</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">{t('products.whyChoose')}</h2>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
              {t('products.whyChooseDesc')}
            </p>

            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">{t('products.generalInquiries')}</h2>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <textarea
                  placeholder={t('products.inquiryPlaceholder')}
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dbe0e6] bg-white focus:border-[#dbe0e6] min-h-36 placeholder:text-[#617489] p-[15px] text-base font-normal leading-normal"
                />
              </label>
            </div>
            <div className="flex px-4 py-3 justify-end">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#1275e7] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">{t('products.submitInquiry')}</span>
              </button>
            </div>
          </div>
        </div>

        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a className="text-[#617489] text-base font-normal leading-normal min-w-40" href="#">{t('home.footer.privacyPolicy')}</a>
                <a className="text-[#617489] text-base font-normal leading-normal min-w-40" href="#">{t('home.footer.termsOfService')}</a>
                <a className="text-[#617489] text-base font-normal leading-normal min-w-40" href="#">{t('header.contact')}</a>
              </div>
              <p className="text-[#617489] text-base font-normal leading-normal">{t('home.footer.copyright')}</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Products;