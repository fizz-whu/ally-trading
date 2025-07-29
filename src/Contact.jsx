import React from 'react';
import { useTranslation } from './LanguageContext';
import Header from './components/Header';

function Contact() {
  const { t } = useTranslation();
  
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{fontFamily: '"Work Sans", "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />

        <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#121416] tracking-light text-2xl md:text-[32px] font-bold leading-tight">{t('contact.title')}</p>
                <p className="text-[#6a7581] text-sm font-normal leading-normal">{t('contact.subtitle')}</p>
              </div>
            </div>

            <div className="flex max-w-full md:max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#121416] text-base font-medium leading-normal pb-2">{t('contact.form.name')}</p>
                <input
                  placeholder={t('contact.form.namePlaceholder')}
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121416] focus:outline-0 focus:ring-0 border border-[#dde0e3] bg-white focus:border-[#dde0e3] h-14 placeholder:text-[#6a7581] p-[15px] text-base font-normal leading-normal"
                />
              </label>
            </div>

            <div className="flex max-w-full md:max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#121416] text-base font-medium leading-normal pb-2">{t('contact.form.email')}</p>
                <input
                  placeholder={t('contact.form.emailPlaceholder')}
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121416] focus:outline-0 focus:ring-0 border border-[#dde0e3] bg-white focus:border-[#dde0e3] h-14 placeholder:text-[#6a7581] p-[15px] text-base font-normal leading-normal"
                />
              </label>
            </div>

            <div className="flex max-w-full md:max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#121416] text-base font-medium leading-normal pb-2">{t('contact.form.subject')}</p>
                <input
                  placeholder={t('contact.form.subjectPlaceholder')}
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121416] focus:outline-0 focus:ring-0 border border-[#dde0e3] bg-white focus:border-[#dde0e3] h-14 placeholder:text-[#6a7581] p-[15px] text-base font-normal leading-normal"
                />
              </label>
            </div>

            <div className="flex max-w-full md:max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#121416] text-base font-medium leading-normal pb-2">{t('contact.form.message')}</p>
                <textarea
                  placeholder={t('contact.form.messagePlaceholder')}
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121416] focus:outline-0 focus:ring-0 border border-[#dde0e3] bg-white focus:border-[#dde0e3] min-h-36 placeholder:text-[#6a7581] p-[15px] text-base font-normal leading-normal"
                />
              </label>
            </div>

            <div className="flex px-4 py-3 justify-start">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#c5d7eb] text-[#121416] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">{t('contact.form.submit')}</span>
              </button>
            </div>

            <h2 className="text-[#121416] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">{t('contact.locations')}</h2>
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
                <p className="text-[#6a7581] text-sm font-normal leading-normal">{t('contact.address')}</p>
                <p className="text-[#121416] text-sm font-normal leading-normal">{t('contact.addressValue')}</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
                <p className="text-[#6a7581] text-sm font-normal leading-normal">{t('contact.phone')}</p>
                <p className="text-[#121416] text-sm font-normal leading-normal">{t('contact.phoneValue')}</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
                <p className="text-[#6a7581] text-sm font-normal leading-normal">{t('contact.form.email')}</p>
                <p className="text-[#121416] text-sm font-normal leading-normal">{t('contact.emailValue')}</p>
              </div>
            </div>
          </div>
        </div>

        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a className="text-[#6a7581] text-base font-normal leading-normal min-w-40" href="#">{t('home.footer.privacyPolicy')}</a>
                <a className="text-[#6a7581] text-base font-normal leading-normal min-w-40" href="#">{t('home.footer.termsOfService')}</a>
              </div>
              <p className="text-[#6a7581] text-base font-normal leading-normal">{t('home.footer.copyright')}</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Contact;