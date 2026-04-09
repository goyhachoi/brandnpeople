/*
 * Footer - 브랜드앤피플 하단 영역
 * 디자인: 딥 브라운 배경, 최종 CTA + 회사 정보
 */
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Youtube, BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2C2416]">
      {/* 최종 CTA 배너 */}
      <div className="border-b border-white/10 py-16 md:py-20">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#D4B896] text-sm font-semibold tracking-widest uppercase mb-4">Ready to Start?</p>
            <h2
              className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              준비되셨나요?<br />
              이제 당신의 이야기를<br />
              <span className="text-[#E87A5D]">세상에 들려줄 차례</span>입니다.
            </h2>
            <p className="text-white/60 text-base mb-8 max-w-lg mx-auto">
              브랜드앤피플이 당신의 전문성을 세상이 알아볼 수 있는 언어로 번역해 드립니다.
            </p>
            <a href="#contact" className="btn-coral text-base px-8 py-4 inline-flex">
              진단컨설팅 신청하기
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* 하단 정보 */}
      <div className="py-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* 브랜드 */}
            <div>
              <div className="mb-4">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663033930571/FgzbUwXuhKtooaDGs8i9Fj/brandnpeople-logo-v2_958bc9b5.webp"
                  alt="브랜드앤피플 로고"
                  className="h-9 w-auto object-contain brightness-0 invert opacity-80"
                />
              </div>
              <p className="text-white/50 text-xs leading-relaxed">
                당신의 전문성을,<br />
                사람들의 마음을 움직이는<br />
                공감 브랜드로 번역합니다.
              </p>
            </div>

            {/* 링크 */}
            <div>
              <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-4">Quick Links</p>
              <ul className="space-y-2">
                {["소개", "서비스", "성공사례", "블로그", "진단컨설팅"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/50 hover:text-white text-xs transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 연락처 */}
            <div>
              <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-4">Contact</p>
              <div className="space-y-2 text-white/50 text-xs">
                <p>대표: 최은희</p>
                <p>이메일: goyha.choi@gmail.com</p>
                <p>사업자등록번호: 759-56-00661</p>
              </div>
              {/* SNS */}
              <div className="flex gap-3 mt-5">
                {[
                  { icon: Instagram, label: "인스타그램" },
                  { icon: Youtube, label: "유튜브" },
                  { icon: BookOpen, label: "블로그" },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-all duration-200"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 카피라이트 */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-white/30 text-xs">
              © 2026 브랜드앤피플 (Brand & People). All rights reserved.
            </p>
            <div className="flex gap-4">
              {["이용약관", "개인정보처리방침"].map((item) => (
                <a key={item} href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors duration-200">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
