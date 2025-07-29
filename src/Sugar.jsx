import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from './LanguageContext';
import Header from './components/Header';

function Sugar() {
  const { t } = useTranslation();
  
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{fontFamily: '"Work Sans", "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap gap-2 p-4">
              <Link to="/products" className="text-[#617489] text-base font-medium leading-normal">{t('products.breadcrumb.products')}</Link>
              <span className="text-[#617489] text-base font-medium leading-normal">/</span>
              <span className="text-[#111418] text-base font-medium leading-normal">{t('products.sugar.name')}</span>
            </div>
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">{t('products.sugar.name')}</p>
                <p className="text-[#617489] text-sm font-normal leading-normal">{t('products.sugar.detailDescription')}</p>
              </div>
            </div>
            <div className="flex w-full grow bg-white @container p-4">
              <div className="w-full gap-1 overflow-hidden bg-white @[480px]:gap-2 aspect-[3/2] rounded-xl grid grid-cols-[2fr_1fr_1fr]">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none row-span-2"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDl4_PQrGd2B_ngMpSYvYlVkHv4CiRXJhO_2VsVWtpn2ONUbRDuWdIfQjGY5pl4bEU6wlEU70XummYOvUemQ_dRrftt436X1rDw0k2FYt9W-HS6vmKAsGxjk-Lbcm8NAQqN_Kob2W1zqYio_nIzuEtyY7orgE8Gb0tddFwqXYCM-F-1EZSaMYcHYaljswC0cIvsWt1OI3pfBW7BemwtUl67Am-vwH6_FRqHqyzC8SFVHals7_oqTC7U7KnlSXhlOuyHk-Fu4dh2rto")'}}
                />
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCU-fiWIe_q4QnHPlK4LrDZLfExIiuL12_2QtJbYOraoB6dxiwDb2hu20tYuZu_DGoaPn9Wn_3Y7H3ulrZNos74XFgBJRkLKNDC2zAxL_RDiTN1Y4aEb1DDllaofA7XavNXmzuUHH4M1xc0KZwVN090hn00a9lc-cGP2B9ThCyrEpVtneshYHZcqA3dFwEeRfWFuGTZgLRG8ankQdtWOz6rRT6a40NwUXbCcHCc5I1JAHS1g3_pSP9LnRL0Sv29ZqvvPnrrgSQIHwQ")'}}
                />
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwOLjj6gB3YARAXmwLj3cFMdQjK_4Te0wmysVhXQYtsqmSDe7MWwFkucG9QSrJL2i9KcPiNuOIjqu3oJr1dQD7erTZRkaegd7BBXg8migxZ4VoYkRWGqOkSVxmKpP18B7D2NA8NfTTqxw7lo27mtHzjCzBjpfTUA8kpM_w74sjsyXwOKJGJq-Oxvbxt2adMQq4pVBwYW2jH5ZLMNjpv4Lt-M6lHyrM_m8Eg7unVkl0KqfuADv0af_-PB16GO3gHZzhXRKibmu0mUM")'}}
                />
              </div>
            </div>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">{t('products.sugar.specifications')}</h2>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
                <p className="text-[#617489] text-sm font-normal leading-normal">Type</p>
                <p className="text-[#111418] text-sm font-normal leading-normal">{t('products.sugar.type')}</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
                <p className="text-[#617489] text-sm font-normal leading-normal">{t('products.origin')}</p>
                <p className="text-[#111418] text-sm font-normal leading-normal">{t('products.sugar.origin')}</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
                <p className="text-[#617489] text-sm font-normal leading-normal">ICUMSA</p>
                <p className="text-[#111418] text-sm font-normal leading-normal">{t('products.sugar.grade')}</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
                <p className="text-[#617489] text-sm font-normal leading-normal">{t('products.packaging')}</p>
                <p className="text-[#111418] text-sm font-normal leading-normal">{t('products.sugar.packaging')}</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
                <p className="text-[#617489] text-sm font-normal leading-normal">Potential Uses</p>
                <p className="text-[#111418] text-sm font-normal leading-normal">{t('products.sugar.uses')}</p>
              </div>
            </div>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">{t('products.sugar.about')}</h2>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
              {t('products.sugar.fullDescription')}
            </p>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">{t('products.sugar.inquiries')}</h2>
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

export default Sugar;