/*
 * ProblemSection - 문제 공감 섹션
 * 디자인: 체크박스 카드 3개 + 하단 공감 카피
 */
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const problems = [
  {
    icon: "💭",
    title: "강점이 한 문장으로 안 나와요",
    desc: "내 경력과 실력은 분명한데, 막상 '저는 이런 사람입니다'라고 말하려면 말문이 막힙니다.",
  },
  {
    icon: "📱",
    title: "SNS를 해도 문의가 없어요",
    desc: "콘텐츠를 꾸준히 올리는데 팔로워만 늘고, 실제 상담 문의나 매출로는 이어지지 않습니다.",
  },
  {
    icon: "🔍",
    title: "경쟁자와 차별점이 안 보여요",
    desc: "비슷한 서비스를 제공하는 사람들 사이에서 '왜 나여야 하는가'를 설명하기 어렵습니다.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-[#F9F6F0] py-20 md:py-28">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#8A9A86] text-sm font-semibold tracking-widest uppercase mb-4"
          >
            혹시 이런 고민 있으신가요?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            실력은 확실한데,<br />
            왜 나를 알아주는 사람은 <em className="not-italic text-[#E87A5D]">적을까요?</em>
          </motion.h2>
        </div>

        {/* 문제 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="card-warm p-7"
            >
              <div className="text-3xl mb-4">{problem.icon}</div>
              <h3
                className="text-[#2C2416] font-bold text-lg mb-3"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                {problem.title}
              </h3>
              <p className="text-[#6B6459] text-sm leading-relaxed">{problem.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 공감 메시지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center bg-[#E87A5D]/8 rounded-2xl p-8 border border-[#E87A5D]/20"
        >
          <CheckCircle2 className="text-[#E87A5D] mx-auto mb-4" size={32} />
          <p
            className="text-[#2C2416] text-lg md:text-xl font-medium leading-relaxed"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            당신의 실력이 부족한 게 아닙니다.<br />
            단지 <strong className="text-[#E87A5D]">'브랜드 언어'</strong>로 정리되지 않았을 뿐입니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
