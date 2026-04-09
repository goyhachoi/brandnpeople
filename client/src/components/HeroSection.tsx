/*
 * HeroSection - 브랜드앤피플 메인 히어로
 * 레이아웃: 좌측 텍스트 (비대칭) + 우측 대표 이미지
 * 애니메이션: framer-motion stagger fadeInUp
 */
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663033930571/FgzbUwXuhKtooaDGs8i9Fj/ceo-profile-coral-v2_071a74a7.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15 },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#F9F6F0] overflow-hidden flex items-center">
      {/* 배경 장식 원 */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-[#EDE8DF] opacity-60 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#D4B896] opacity-20 -translate-x-1/2 translate-y-1/3 pointer-events-none" />

      <div className="container relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* 텍스트 영역 */}
          <div className="order-2 lg:order-1">
            {/* 배지 */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-[#E87A5D]/10 text-[#E87A5D] rounded-full px-4 py-1.5 text-sm font-semibold mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E87A5D] inline-block" />
              퍼스널 브랜딩 전문가
            </motion.div>

            {/* 메인 헤드라인 */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="section-title mb-6"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              당신의 전문성을,<br />
              사람들의 마음을<br />
              <em className="not-italic text-[#E87A5D]">움직이는 브랜드</em>로<br />
              번역합니다.
            </motion.h1>

            {/* 서브 카피 */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="section-subtitle mb-8 max-w-lg"
            >
              브랜드앤피플과 함께 진짜 '나'다운 퍼스널 브랜딩을 시작하세요.
              일방적인 홍보가 아닌, 고객이 먼저 찾아오는 <strong className="text-[#2C2416] font-semibold">공감의 연결고리</strong>를 만듭니다.
            </motion.p>

            {/* CTA 버튼 그룹 */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-3"
            >
              <a href="#contact" className="btn-coral">
                진단컨설팅 신청하기
                <ArrowRight size={16} />
              </a>
              <a href="#services" className="btn-outline-coral">
                프로그램 살펴보기
              </a>
            </motion.div>

            {/* 신뢰 지표 미니 */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center gap-6 mt-10 pt-8 border-t border-[#EDE8DF]"
            >
              {[
                { num: "1,360명", label: "누적 수강생 및 컨설팅" },
                { num: "22년+", label: "마케팅 & 브랜딩 경력" },
                { num: "98%", label: "수강생 만족도" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-xl font-bold text-[#E87A5D]"
                    style={{ fontFamily: "'Noto Serif KR', serif" }}
                  >
                    {stat.num}
                  </div>
                  <div className="text-xs text-[#A89E93] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* 이미지 영역 */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* 이미지 배경 장식 */}
              <div className="absolute inset-0 bg-[#E87A5D] rounded-[2rem] translate-x-3 translate-y-3 opacity-20" />
              <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-2xl">
                <img
                  src={HERO_IMG}
                  alt="공감마케터 최은희 대표"
                  className="w-full h-full object-cover"
                />
                {/* 이미지 위 플로팅 카드 */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <p className="text-xs text-[#8A9A86] font-medium mb-1">공감마케터</p>
                  <p className="text-[#2C2416] font-bold text-base" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                    최은희 대표
                  </p>
                  <p className="text-xs text-[#6B6459] mt-1">브랜드앤피플 창립자 · 퍼스널 브랜딩 전문가</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 스크롤 유도 */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#A89E93]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
