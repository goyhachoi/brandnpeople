/*
 * StoriesSection - 수강생 성공 사례 및 후기
 * 디자인: 슬라이더 캐러셀 + 인용구 카드
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const CONSULTATION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663033930571/FgzbUwXuhKtooaDGs8i9Fj/consultation-scene-aGhLDvqfvyxjPzTXk3zfpg.webp";

const testimonials = [
  {
    name: "김지연",
    role: "프리랜서 강사 → 퍼스널 브랜딩 전문가",
    avatar: "김",
    color: "#E87A5D",
    quote: "막연했던 제 경력이 최은희 대표님을 만나 하나의 선명한 브랜드가 되었습니다. 이제는 고객이 먼저 제 철학에 공감하며 찾아옵니다. 컨설팅 이후 강의 문의가 3배 이상 늘었어요.",
    result: "강의 문의 3배 증가",
  },
  {
    name: "박성민",
    role: "IT 컨설턴트 → 1인 브랜드 구축",
    avatar: "박",
    color: "#8A9A86",
    quote: "15년 경력이 있었지만 '저는 무엇을 잘 하는 사람인가'를 한 문장으로 말하지 못했습니다. 브랜드앤피플 워크숍 이후 명확한 포지셔닝을 갖게 되었고, SNS 팔로워보다 실제 계약이 먼저 늘었습니다.",
    result: "계약 단가 40% 상승",
  },
  {
    name: "이수진",
    role: "HR 담당자 → 팀 브랜딩 리더",
    avatar: "이",
    color: "#D4A574",
    quote: "기업 출강 프로그램을 통해 우리 팀 전체가 각자의 강점을 언어화하는 법을 배웠습니다. 팀워크가 좋아졌고, 대외 발표에서 자신감이 눈에 띄게 달라졌습니다.",
    result: "팀 발표 역량 대폭 향상",
  },
  {
    name: "최현우",
    role: "의사 → 의료 전문 강사 브랜드",
    avatar: "최",
    color: "#6B7A67",
    quote: "전문직이라는 틀 안에서 나만의 색깔을 어떻게 드러낼지 몰랐는데, 대표님이 제 이야기를 듣고 '이게 당신의 브랜드입니다'라고 정리해 주셨을 때 정말 울컥했습니다.",
    result: "의료 강의 채널 런칭 성공",
  },
];

export default function StoriesSection() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const t = testimonials[current];

  return (
    <section id="stories" className="bg-[#EDE8DF] py-20 md:py-28 overflow-hidden">
      <div className="container">
        {/* 타이틀 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[#8A9A86] text-sm font-semibold tracking-widest uppercase mb-4">Success Stories</p>
          <h2 className="section-title">
            공감을 통해<br />
            <em className="not-italic text-[#E87A5D]">브랜드가 된 사람들</em>의 이야기
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* 이미지 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src={CONSULTATION_IMG}
                alt="1:1 컨설팅 현장"
                className="w-full h-full object-cover"
              />
            </div>
            {/* 플로팅 배지 */}
            <div className="absolute -bottom-4 -right-4 bg-[#E87A5D] text-white rounded-2xl p-5 shadow-xl">
              <div className="text-2xl font-bold" style={{ fontFamily: "'Noto Serif KR', serif" }}>1,000+</div>
              <div className="text-xs opacity-90 mt-0.5">브랜드 탄생 스토리</div>
            </div>
          </motion.div>

          {/* 후기 슬라이더 */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="card-warm p-8"
              >
                <Quote className="text-[#E87A5D] mb-5" size={32} />
                <p
                  className="text-[#2C2416] text-base md:text-lg leading-relaxed mb-6"
                  style={{ fontFamily: "'Noto Serif KR', serif" }}
                >
                  "{t.quote}"
                </p>

                {/* 결과 배지 */}
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-6"
                  style={{ backgroundColor: t.color + "15", color: t.color }}
                >
                  ✓ {t.result}
                </div>

                {/* 수강생 정보 */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#EDE8DF]">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-[#2C2416] font-semibold text-sm">{t.name}</div>
                    <div className="text-[#A89E93] text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* 네비게이션 */}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-[#D4B896] flex items-center justify-center text-[#6B6459] hover:bg-[#E87A5D] hover:text-white hover:border-[#E87A5D] transition-all duration-200"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? "w-6 bg-[#E87A5D]" : "w-1.5 bg-[#D4B896]"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-[#D4B896] flex items-center justify-center text-[#6B6459] hover:bg-[#E87A5D] hover:text-white hover:border-[#E87A5D] transition-all duration-200"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
