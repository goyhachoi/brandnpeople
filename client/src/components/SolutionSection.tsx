/*
 * SolutionSection - 브랜드앤피플 4단계 솔루션
 * 디자인: 타임라인 스텝 UI + 우측 워크숍 이미지
 */
import { motion } from "framer-motion";

const WORKSHOP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663033930571/FgzbUwXuhKtooaDGs8i9Fj/workshop-scene-LSYyn9AqxFrDALzWzAezaQ.webp";

const steps = [
  {
    num: "01",
    title: "진단 (Discover)",
    subtitle: "본질과 강점 발굴",
    desc: "심층 인터뷰와 브랜드 진단 워크시트를 통해 당신만의 고유한 강점과 가치를 발굴합니다. 스스로도 몰랐던 '나다움'을 찾아드립니다.",
    color: "#E87A5D",
  },
  {
    num: "02",
    title: "정리 (Define)",
    subtitle: "메시지와 컨셉 도출",
    desc: "발굴된 강점을 타겟 고객의 언어로 번역합니다. 나만의 차별화된 브랜드 메시지와 포지셔닝 컨셉을 정의합니다.",
    color: "#D4A574",
  },
  {
    num: "03",
    title: "설계 (Design)",
    subtitle: "콘텐츠 & 퍼널 기획",
    desc: "타겟 고객과 공감으로 연결되는 콘텐츠 전략과 세일즈 퍼널을 설계합니다. 어떤 채널에서 어떤 메시지를 전달할지 구체적으로 기획합니다.",
    color: "#8A9A86",
  },
  {
    num: "04",
    title: "실행 (Deliver)",
    subtitle: "지속 가능한 실행 플랜",
    desc: "이론으로 끝나지 않습니다. 실제로 실행 가능한 단계별 플랜과 지속적인 피드백으로 브랜드가 살아 움직이도록 돕습니다.",
    color: "#6B7A67",
  },
];

export default function SolutionSection() {
  return (
    <section className="bg-[#2C2416] py-20 md:py-28 overflow-hidden">
      <div className="container">
        {/* 타이틀 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-[#8A9A86] text-sm font-semibold tracking-widest uppercase mb-4">Our Process</p>
          <h2
            className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            브랜드앤피플은<br />
            당신의 이야기를<br />
            <span className="text-[#E87A5D]">이렇게 브랜드로</span> 만듭니다.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* 스텝 목록 */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex gap-6 group"
              >
                {/* 타임라인 라인 */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-sm shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: step.color, fontFamily: "'Noto Serif KR', serif" }}
                  >
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-white/10 my-2 min-h-[2rem]" />
                  )}
                </div>

                {/* 내용 */}
                <div className="pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <h3
                      className="text-white font-bold text-lg"
                      style={{ fontFamily: "'Noto Serif KR', serif" }}
                    >
                      {step.title}
                    </h3>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ backgroundColor: step.color + "30", color: step.color }}
                    >
                      {step.subtitle}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 이미지 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:sticky lg:top-24"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={WORKSHOP_IMG}
                alt="브랜드앤피플 워크숍 현장"
                className="w-full h-80 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2416]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/80 text-sm mb-1">브랜드앤피플 그룹 워크숍</p>
                <p
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "'Noto Serif KR', serif" }}
                >
                  "함께 성장하는 브랜딩의 현장"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
