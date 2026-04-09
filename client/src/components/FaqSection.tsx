/*
 * FaqSection - 자주 묻는 질문 섹션
 * 디자인: 아코디언 UI, 크림 다크 배경
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "퍼스널 브랜딩이 처음인데 참여할 수 있나요?",
    a: "물론입니다! 오히려 처음 시작하시는 분들에게 더 큰 변화가 일어납니다. 브랜드앤피플의 모든 프로그램은 '나다움'을 발견하는 것부터 시작하기 때문에, 이전 경험이 없어도 충분히 참여하실 수 있습니다.",
  },
  {
    q: "1:1 컨설팅과 그룹 워크숍 중 어떤 것이 저에게 맞을까요?",
    a: "빠른 결과와 완전히 개인화된 접근이 필요하다면 1:1 컨설팅을, 동료들과 함께 성장하며 비용 효율적으로 진행하고 싶다면 그룹 워크숍을 추천드립니다. 상담을 통해 현재 상황에 맞는 프로그램을 안내해 드립니다.",
  },
  {
    q: "컨설팅 후 실제로 어떤 변화가 생기나요?",
    a: "대부분의 수강생들이 ① 나를 한 문장으로 소개할 수 있게 됨, ② SNS 콘텐츠 방향이 명확해짐, ③ 고객 문의 및 계약 증가를 경험합니다. 물론 실행 여부에 따라 결과는 다를 수 있으며, 지속적인 실행을 위한 플랜도 함께 제공합니다.",
  },
  {
    q: "기업 출강 프로그램은 어떻게 진행되나요?",
    a: "사전 조직 진단 → 맞춤 커리큘럼 설계 → 교육 진행 → 사후 리포트 제공의 순서로 진행됩니다. 반일(4시간), 1일(8시간), 2일 집중 과정 중 선택 가능하며, 인원과 목적에 따라 유연하게 조정됩니다.",
  },
  {
    q: "온라인으로도 참여할 수 있나요?",
    a: "네, 1:1 컨설팅과 일부 그룹 워크숍은 온라인(Zoom)으로도 진행됩니다. 오프라인과 동일한 퀄리티를 제공하기 위해 온라인 전용 워크시트와 자료를 별도로 준비합니다.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#EDE8DF] py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[#8A9A86] text-sm font-semibold tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="section-title">
            자주 묻는 질문
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="card-warm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 p-6 text-left"
              >
                <span
                  className="text-[#2C2416] font-semibold text-sm md:text-base leading-snug"
                  style={{ fontFamily: "'Noto Serif KR', serif" }}
                >
                  {faq.q}
                </span>
                <span className="shrink-0 mt-0.5">
                  {openIndex === i ? (
                    <Minus size={18} className="text-[#E87A5D]" />
                  ) : (
                    <Plus size={18} className="text-[#A89E93]" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="h-px bg-[#EDE8DF] mb-4" />
                      <p className="text-[#6B6459] text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
