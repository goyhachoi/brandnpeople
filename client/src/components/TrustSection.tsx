/*
 * TrustSection - 신뢰 구축 섹션 (숫자 + 출강 기업)
 * 디자인: 풀 와이드 크림 다크 배경, 숫자 카운터 카드
 */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { num: 1360, suffix: "명", label: "누적 수강생 및 컨설팅", desc: "1인 기업가부터 대기업 임원까지" },
  { num: 22, suffix: "년+", label: "마케팅 & 브랜딩 경력", desc: "현장 실무 기반의 살아있는 노하우" },
  { num: 98, suffix: "%", label: "수강생 만족도", desc: "실제 변화를 경험한 수강생들의 평가" },
  { num: 200, suffix: "+", label: "기업/기관 출강", desc: "삼성, LG, 현대 등 주요 기업 출강" },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(stat.num, 1800, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center px-6 py-8"
    >
      <div
        className="text-4xl md:text-5xl font-bold text-[#E87A5D] mb-2"
        style={{ fontFamily: "'Noto Serif KR', serif" }}
      >
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-[#2C2416] font-semibold text-base mb-1">{stat.label}</div>
      <div className="text-[#A89E93] text-sm">{stat.desc}</div>
    </motion.div>
  );
}

export default function TrustSection() {
  return (
    <section className="bg-[#EDE8DF] py-16 md:py-20">
      <div className="container">
        {/* 섹션 타이틀 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#8A9A86] text-sm font-semibold tracking-widest uppercase mb-3">Why Brand & People</p>
          <h2 className="section-title">숫자로 증명하는 신뢰</h2>
        </motion.div>

        {/* 통계 그리드 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#D4B896]">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* 출강 기업 로고 영역 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 pt-10 border-t border-[#D4B896]"
        >
          <p className="text-center text-[#A89E93] text-sm mb-6 tracking-wide">주요 출강 기업 및 기관</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["현대자동차", "SK", "교원그룹", "포스코", "청년사관학교", "성신여대"].map((company) => (
              <span
                key={company}
                className="text-[#B0A898] font-semibold text-sm md:text-base tracking-tight"
                style={{ fontFamily: "'Pretendard Variable', sans-serif" }}
              >
                {company}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
