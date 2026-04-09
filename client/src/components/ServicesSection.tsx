/*
 * ServicesSection - 서비스 소개 섹션
 * 디자인: 3열 카드 그리드, 호버 시 코랄 포인트
 */
import { motion } from "framer-motion";
import { User, Users, Building2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: User,
    badge: "PRIVATE",
    title: "1:1 프라이빗 컨설팅",
    subtitle: "맞춤형 브랜드 구축",
    desc: "최은희 대표와 1:1로 진행하는 심층 퍼스널 브랜딩 컨설팅입니다. 당신의 강점을 발굴하고, 타겟 고객에게 닿는 브랜드 언어를 완성합니다.",
    features: ["브랜드 진단 인터뷰 (2시간)", "브랜드 컨셉 & 메시지 도출", "콘텐츠 전략 설계", "3개월 실행 플랜 제공"],
    color: "#E87A5D",
    bgColor: "#FDF4F1",
    recommended: true,
  },
  {
    icon: Users,
    badge: "GROUP",
    title: "그룹 브랜딩 워크숍",
    subtitle: "함께 완성하는 실전 과정",
    desc: "5~10명의 소규모 그룹으로 진행하는 집중 워크숍입니다. 동료들과 함께 시너지를 내며 나만의 브랜드를 완성하는 실전 과정입니다.",
    features: ["2일 집중 워크숍 과정", "그룹 피드백 & 상호 코칭", "브랜드 프로파일 완성", "온라인 커뮤니티 지원"],
    color: "#8A9A86",
    bgColor: "#F4F7F4",
    recommended: false,
  },
  {
    icon: Building2,
    badge: "CORPORATE",
    title: "기업/기관 출강",
    subtitle: "임직원 퍼스널 브랜딩",
    desc: "조직의 가치를 높이는 임직원 퍼스널 브랜딩 교육입니다. 개인의 성장이 조직의 브랜드 자산이 되는 프로그램을 제공합니다.",
    features: ["맞춤형 커리큘럼 설계", "반일/1일/2일 과정 선택", "사전 조직 진단 포함", "사후 관리 리포트 제공"],
    color: "#D4A574",
    bgColor: "#FDF8F3",
    recommended: false,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#F9F6F0] py-20 md:py-28">
      <div className="container">
        {/* 타이틀 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[#8A9A86] text-sm font-semibold tracking-widest uppercase mb-4">Our Services</p>
          <h2 className="section-title mb-4">
            현재 상황에 맞는<br />
            <em className="not-italic text-[#E87A5D]">최적의 프로그램</em>을 선택하세요.
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            어떤 단계에 있든, 어떤 목표를 갖고 있든 — 브랜드앤피플이 함께합니다.
          </p>
        </motion.div>

        {/* 서비스 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative card-warm overflow-hidden ${service.recommended ? "ring-2 ring-[#E87A5D]" : ""}`}
              >
                {service.recommended && (
                  <div className="absolute top-4 right-4 bg-[#E87A5D] text-white text-xs font-bold px-3 py-1 rounded-full">
                    추천
                  </div>
                )}

                {/* 카드 상단 컬러 배경 */}
                <div
                  className="p-6 pb-4"
                  style={{ backgroundColor: service.bgColor }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: service.color + "20" }}
                  >
                    <Icon size={22} style={{ color: service.color }} />
                  </div>
                  <span
                    className="text-xs font-bold tracking-widest"
                    style={{ color: service.color }}
                  >
                    {service.badge}
                  </span>
                  <h3
                    className="text-[#2C2416] font-bold text-xl mt-1 mb-1"
                    style={{ fontFamily: "'Noto Serif KR', serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[#8A9A86] text-sm font-medium">{service.subtitle}</p>
                </div>

                {/* 카드 본문 */}
                <div className="p-6 pt-4">
                  <p className="text-[#6B6459] text-sm leading-relaxed mb-5">{service.desc}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-sm text-[#2C2416]">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                          style={{ backgroundColor: service.color }}
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                    style={{ color: service.color }}
                  >
                    진단컨설팅 신청
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
