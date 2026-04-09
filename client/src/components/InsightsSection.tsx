/*
 * InsightsSection - 블로그/칼럼 인사이트 섹션
 * 디자인: 3열 카드 그리드, 크림 배경
 */
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const insights = [
  {
    category: "퍼스널 브랜딩",
    title: "실력 있는 사람이 왜 팔리지 않을까? — 브랜드 언어의 부재",
    excerpt: "많은 전문가들이 실력은 충분하지만 그것을 고객의 언어로 번역하지 못해 기회를 놓칩니다. 브랜드 언어가 무엇인지, 어떻게 만들어야 하는지 알아봅니다.",
    readTime: "5분",
    date: "2026.03.15",
    color: "#E87A5D",
  },
  {
    category: "공감마케팅",
    title: "고객이 먼저 찾아오게 만드는 콘텐츠의 3가지 조건",
    excerpt: "일방적인 홍보 콘텐츠가 아닌, 고객이 공감하고 자발적으로 공유하는 콘텐츠를 만드는 방법. 공감마케팅의 핵심 원리를 실제 사례와 함께 설명합니다.",
    readTime: "7분",
    date: "2026.02.28",
    color: "#8A9A86",
  },
  {
    category: "브랜드 전략",
    title: "1인 기업의 포지셔닝 — '나는 누구를 위한 사람인가'",
    excerpt: "경쟁자와 차별화되는 포지셔닝을 만들기 위해 가장 먼저 해야 할 질문은 '나는 무엇을 잘 하는가'가 아닙니다. 진짜 포지셔닝의 출발점을 알아봅니다.",
    readTime: "6분",
    date: "2026.02.10",
    color: "#D4A574",
  },
];

export default function InsightsSection() {
  return (
    <section id="insights" className="bg-[#F9F6F0] py-20 md:py-28">
      <div className="container">
        {/* 타이틀 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <p className="text-[#8A9A86] text-sm font-semibold tracking-widest uppercase mb-3">BLOG</p>
            <h2 className="section-title">
              브랜딩에 대한<br />
              <em className="not-italic text-[#E87A5D]">생각과 인사이트</em>
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-[#E87A5D] font-semibold text-sm hover:gap-3 transition-all duration-200 shrink-0"
          >
            전체 글 보기
            <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="card-warm overflow-hidden group cursor-pointer"
            >
              {/* 카드 상단 컬러 바 */}
              <div
                className="h-1.5 w-full"
                style={{ backgroundColor: post.color }}
              />

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: post.color + "15", color: post.color }}
                  >
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-[#A89E93] text-xs">
                    <Clock size={11} />
                    {post.readTime}
                  </div>
                </div>

                <h3
                  className="text-[#2C2416] font-bold text-base leading-snug mb-3 group-hover:text-[#E87A5D] transition-colors duration-200"
                  style={{ fontFamily: "'Noto Serif KR', serif" }}
                >
                  {post.title}
                </h3>

                <p className="text-[#6B6459] text-sm leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#EDE8DF]">
                  <span className="text-[#A89E93] text-xs">{post.date}</span>
                  <span
                    className="flex items-center gap-1 text-xs font-semibold transition-all duration-200 group-hover:gap-2"
                    style={{ color: post.color }}
                  >
                    읽기
                    <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
