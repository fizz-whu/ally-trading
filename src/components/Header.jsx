import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function Header({ companyName = "Ally International Trading Inc." }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
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
          <h2 className="text-[#111418] text-sm md:text-lg font-bold leading-tight tracking-[-0.015em]">{t('header.companyName')}</h2>
        </Link>
        <div className="flex flex-1 justify-end gap-2 md:gap-8">
          <div className="hidden md:flex items-center gap-9">
            <Link to="/products" className="text-[#111418] text-sm font-medium leading-normal">{t('header.products')}</Link>
            <Link to="/contact" className="text-[#111418] text-sm font-medium leading-normal">{t('header.contact')}</Link>
            <LanguageSwitcher />
          </div>
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
            <Link to="/products" className="text-[#111418] text-sm font-medium leading-normal py-2" onClick={() => setMobileMenuOpen(false)}>{t('header.products')}</Link>
            <Link to="/contact" className="text-[#111418] text-sm font-medium leading-normal py-2" onClick={() => setMobileMenuOpen(false)}>{t('header.contact')}</Link>
            <div className="flex justify-center py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;