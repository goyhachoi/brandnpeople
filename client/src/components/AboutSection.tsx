/*
 * AboutSection - 대표 소개 섹션
 * 디자인: 좌측 이미지 + 우측 스토리 텍스트, 크림 배경
 */
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663033930571/FgzbUwXuhKtooaDGs8i9Fj/ceo-profile-c-v2_e7032c53.png";

const career = [
  "前 대기업 마케팅 팀장 (15년 경력)",
  "퍼스널 브랜딩 전문 강사 & 컨설턴트",
  "저서 『공감으로 팔리는 브랜드』 출간",
  "삼성, LG, 현대 등 200+ 기업 출강",
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#F9F6F0] py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 이미지 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* 배경 장식 */}
            <div className="absolute -top-6 -left-6 w-48 h-48 rounded-full bg-[#E87A5D]/10 pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#8A9A86]/15 pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:max-w-none shadow-xl">
              <img
                src={HERO_IMG}
                alt="공감마케터 최은희 대표"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 인용구 플로팅 카드 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -right-4 top-1/3 bg-white rounded-xl p-4 shadow-xl max-w-[200px]"
            >
              <p
                className="text-[#2C2416] text-sm font-medium leading-snug"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                "브랜딩은 기술이 아니라<br />
                <span className="text-[#E87A5D]">공감</span>입니다."
              </p>
              <p className="text-[#A89E93] text-xs mt-2">— 최은희 대표</p>
            </motion.div>
          </motion.div>

          {/* 텍스트 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#8A9A86] text-sm font-semibold tracking-widest uppercase mb-4">About</p>
            <h2 className="section-title mb-6">
              공감마케터<br />
              <em className="not-italic text-[#E87A5D]">최은희</em> 대표를<br />
              소개합니다
            </h2>

            <div className="space-y-4 mb-8">
              <p className="section-subtitle">
                15년간 대기업 마케팅 현장에서 일하며 깨달았습니다. 가장 강력한 마케팅은 화려한 광고가 아니라, <strong className="text-[#2C2416] font-semibold">사람의 마음에 공감하는 것</strong>이라는 사실을.
              </p>
              <p className="section-subtitle">
                현장을 떠나 퍼스널 브랜딩 전문가로 활동하면서 수많은 분들을 만났습니다. 실력은 충분한데 세상에 제대로 알려지지 못한 분들. 그분들의 이야기를 듣고, 정리하고, 세상에 들려주는 일 — 그것이 브랜드앤피플이 하는 일입니다.
              </p>
            </div>

            {/* 경력 리스트 */}
            <ul className="space-y-3 mb-8">
              {career.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-3 text-[#2C2416] text-sm"
                >
                  <span className="w-5 h-5 rounded-full bg-[#E87A5D]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E87A5D]" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>

            <a href="#contact" className="btn-coral inline-flex">
              진단컨설팅 신청하기
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
