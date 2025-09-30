import React, { useState } from "react";
import {
  ChevronDown,
  Menu,
  Search,
  ShoppingCart,
  ShoppingCartIcon,
} from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white">
      <header className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5 py-5 flex items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="text-right">
              <img
                className="w-[60px] sm:w-auto"
                src="/images/Group 5.svg"
                alt=""
              />
            </div>
          </div>
          {/* Search Bar */}
          <div className="flex-1 max-w-5xl">
            <div className="relative">
              <input
                type="text"
                placeholder=" ما الذي تبحث عنه ؟"
                className="w-full md:h-auto h-[32px]  font-[Scheherazade_New] px-4 py-3 pr-10 border border-gray-300 rounded-sm text-right text-sm"
                dir="rtl"
              />
              {/* <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" /> */}
            </div>
          </div>

          {/* Cart Icon */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ShoppingCartIcon />
            <span className="absolute -top-0 -right-0 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-medium">
              1
            </span>
          </button>
        </div>
      </header>
      {/* Navigation Bar */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop Navigation */}
          <div
            className="hidden lg:flex items-center justify-between py-3"
            dir="rtl"
          >
            <div className="flex items-center gap-6">
              <button className="flex  font-[Scheherazade_New] items-center gap-2 text-sm hover:text-green-600 transition-colors">
                <Menu className="w-6 h-6" />
                <ChevronDown className="w-4 h-4" />
                جميع الأقسام
              </button>
              <a
                href="#"
                className="text-sm font-[Scheherazade_New] border-gray-300 pr-4 border-r hover:text-green-600 transition-colors"
              >
                المكياج
              </a>
              <a
                href="#"
                className="text-sm font-[Scheherazade_New] border-r fw-300 border-gray-300 pr-4 hover:text-green-600 transition-colors"
              >
                العناية
              </a>
              <a
                href="#"
                className="text-sm font-[Scheherazade_New] border-r border-gray-300 pr-4 hover:text-green-600 transition-colors"
              >
                العطور
              </a>
              <a
                href="#"
                className="text-sm font-[Scheherazade_New] border-r border-gray-300 pr-4 hover:text-green-600 transition-colors"
              >
                تخفيضات
              </a>
              <a
                href="#"
                className="text-[14px] font-[Scheherazade_New] border-r border-gray-300 pr-4 hover:text-green-600 transition-colors"
              >
                الماركات
              </a>
            </div>

            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 px-3 py-1  font-[Scheherazade_New] rounded-full text-sm  transition-colors">
                <img
                  className="w-[16px] h-[16px]"
                  src="/images/icon.svg"
                  alt=""
                />
                <span>العربية - ر س</span>
              </button>
              <a
                href="#"
                className="text-sm border-gray-300 pr-4 border-r font-[Scheherazade_New]  border-rtext-gray-600 hover:text-green-600 transition-colors"
              >
                سياسة الإستبدال أو الإسترجاع
              </a>
              <a
                href="#"
                className="text-sm border-gray-300 pr-4 border-r font-[Scheherazade_New] text-gray-600 hover:text-green-600 transition-colors"
              >
                تواصل معنا
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className="lg:hidden flex items-center justify-between py-3"
            dir="rtl"
          >
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-1 md:gap-6">
              <div className="flex items-center gap-2 px-1 md:px-3 py-1  font-[Scheherazade_New] rounded-full text-sm  transition-colors">
                <img
                  className="w-[16px] h-[16px]"
                  src="/images/icon.svg"
                  alt=""
                />
                <span>العربية - ر س</span>
              </div>
              <a
                href="#"
                className="text-sm border-gray-300 pr-1 md:pr-4 border-r font-[Scheherazade_New]  border-rtext-gray-600 hover:text-green-600 transition-colors"
              >
                سياسة الإستبدال أو الإسترجاع
              </a>
              <a
                href="#"
                className="text-sm border-gray-300 md:pr-4 pr-1 border-r font-[Scheherazade_New] text-gray-600 hover:text-green-600 transition-colors"
              >
                تواصل معنا
              </a>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 space-y-2" dir="rtl">
              <button className="w-full text-right px-4 py-2 text-sm hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-end gap-2">
                <ChevronDown className="w-4 h-4" />
                <span>جميع الأقسام</span>
              </button>
              <a
                href="#"
                className="block text-right px-4 py-2 text-sm hover:bg-gray-100 rounded-lg transition-colors"
              >
                الهدايا
              </a>
              <a
                href="#"
                className="block text-right px-4 py-2 text-sm hover:bg-gray-100 rounded-lg transition-colors"
              >
                العطور
              </a>
              <a
                href="#"
                className="block text-right px-4 py-2 text-sm hover:bg-gray-100 rounded-lg transition-colors"
              >
                تخفيضات
              </a>
              <a
                href="#"
                className="block text-right px-4 py-2 text-sm hover:bg-gray-100 rounded-lg transition-colors"
              >
                الشراكات
              </a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
