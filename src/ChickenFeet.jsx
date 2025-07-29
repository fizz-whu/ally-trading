import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';

function ChickenFeet() {
  const { t } = useTranslation();
  
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{fontFamily: '"Work Sans", "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap gap-2 p-4">
              <Link to="/products" className="text-[#617389] text-base font-medium leading-normal">{t('products.breadcrumb.products')}</Link>
              <span className="text-[#617389] text-base font-medium leading-normal">/</span>
              <span className="text-[#111418] text-base font-medium leading-normal">{t('products.chickenFeet.fullName')}</span>
            </div>
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">{t('products.chickenFeet.fullName')}</p>
                <p className="text-[#617389] text-sm font-normal leading-normal">
                  {t('products.chickenFeet.detailDescription')}
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
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">{t('products.chickenFeet.specifications')}</h2>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
                <p className="text-[#617389] text-sm font-normal leading-normal">{t('products.grade')}</p>
                <p className="text-[#111418] text-sm font-normal leading-normal">{t('products.chickenFeet.grade')}</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
                <p className="text-[#617389] text-sm font-normal leading-normal">Average Weight</p>
                <p className="text-[#111418] text-sm font-normal leading-normal">{t('products.chickenFeet.weight')}</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
                <p className="text-[#617389] text-sm font-normal leading-normal">{t('products.packaging')}</p>
                <p className="text-[#111418] text-sm font-normal leading-normal">{t('products.chickenFeet.packaging')}</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
                <p className="text-[#617389] text-sm font-normal leading-normal">{t('products.origin')}</p>
                <p className="text-[#111418] text-sm font-normal leading-normal">{t('products.chickenFeet.origin')}</p>
              </div>
            </div>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">{t('products.chickenFeet.suggestedUses')}</h2>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
              {t('products.chickenFeet.usesDescription')}
            </p>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">{t('products.chickenFeet.contactUs')}</h2>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">{t('products.chickenFeet.contactDesc')}</p>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#111418] text-base font-medium leading-normal pb-2">{t('contact.form.name')}</p>
                <input
                  placeholder={t('contact.form.namePlaceholder')}
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#617389] p-4 text-base font-normal leading-normal"
                  defaultValue=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#111418] text-base font-medium leading-normal pb-2">{t('contact.form.email')}</p>
                <input
                  placeholder={t('contact.form.emailPlaceholder')}
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#617389] p-4 text-base font-normal leading-normal"
                  defaultValue=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#111418] text-base font-medium leading-normal pb-2">{t('contact.form.message')}</p>
                <textarea
                  placeholder={t('contact.form.messagePlaceholder')}
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none min-h-36 placeholder:text-[#617389] p-4 text-base font-normal leading-normal"
                />
              </label>
            </div>
            <div className="flex px-4 py-3 justify-start">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#0f6bdb] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">{t('products.chickenFeet.sendInquiry')}</span>
              </button>
            </div>
          </div>
        </div>
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a className="text-[#617389] text-base font-normal leading-normal min-w-40" href="#">{t('home.footer.privacyPolicy')}</a>
                <a className="text-[#617389] text-base font-normal leading-normal min-w-40" href="#">{t('home.footer.termsOfService')}</a>
              </div>
              <p className="text-[#617389] text-base font-normal leading-normal">{t('home.footer.copyright')}</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ChickenFeet;