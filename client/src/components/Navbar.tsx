/*
 * Navbar - 브랜드앤피플 상단 고정 네비게이션
 * 디자인: 스크롤 시 배경 불투명도 증가, 우측 CTA 버튼 고정
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "소개", href: "#about" },
  { label: "서비스", href: "#services" },
  { label: "성공사례", href: "#stories" },
  { label: "블로그", href: "#insights" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F9F6F0]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* 로고 */}
          <a href="#" className="flex items-center group">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663033930571/FgzbUwXuhKtooaDGs8i9Fj/brandnpeople-logo-v2_958bc9b5.webp"
              alt="브랜드앤피플 로고"
              className="h-10 md:h-11 w-auto max-w-[180px] md:max-w-[200px] object-contain"
            />
          </a>

          {/* 데스크탑 메뉴 */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#6B6459] hover:text-[#E87A5D] font-medium text-sm transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#E87A5D] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA 버튼 */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="btn-coral text-sm py-2.5 px-5">
              자료집 신청
            </a>
          </div>

          {/* 모바일 햄버거 */}
          <button
            className="md:hidden p-2 text-[#2C2416]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 열기"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {mobileOpen && (
        <div className="md:hidden bg-[#F9F6F0]/98 backdrop-blur-md border-t border-[#EDE8DF] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#2C2416] font-medium text-base py-1"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-coral text-sm mt-2 justify-center" onClick={() => setMobileOpen(false)}>
            자료집 신청
          </a>
        </div>
      )}
    </header>
  );
}
