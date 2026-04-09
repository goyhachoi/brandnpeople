/*
 * ContactSection - 자료집 신청 + 진단컨설팅 신청 섹션
 * 디자인: 워터컬러 배경 텍스처 + 이메일/폰 수집 폼
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Download, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const TEXTURE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663033930571/FgzbUwXuhKtooaDGs8i9Fj/abstract-texture-n4fYUNJNCymNzpzDGT6dZ7.webp";

export default function ContactSection() {
  // 자료집 신청 폼
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // 진단컨설팅 신청 폼
  const [consultName, setConsultName] = useState("");
  const [consultEmail, setConsultEmail] = useState("");
  const [consultMsg, setConsultMsg] = useState("");
  const [consultSubmitted, setConsultSubmitted] = useState(false);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadPhone || !leadEmail) return;
    setLeadSubmitted(true);
    toast.success("자료집을 이메일로 보내드렸습니다! 📬");
  };

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultName || !consultEmail) return;
    setConsultSubmitted(true);
    toast.success("진단컨설팅 신청이 완료되었습니다! 1~2 영업일 내 연락드리겠습니다. 🎉");
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      {/* 배경 텍스처 */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${TEXTURE_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-[#F9F6F0]/80" />

      <div className="container relative z-10">
        {/* 자료집 신청 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#E87A5D]/10 text-[#E87A5D] rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
            <Download size={14} />
            무료 자료집
          </div>
          <h2 className="section-title mb-4">
            퍼스널 브랜딩,<br />
            어디서부터 시작해야 할지<br />
            <em className="not-italic text-[#E87A5D]">막막하신가요?</em>
          </h2>
          <p className="section-subtitle mb-8">
            공감마케터 최은희가 직접 만든 <strong className="text-[#2C2416]">퍼스널 브랜딩 자가진단 워크시트</strong>를 무료로 보내드립니다. 5분이면 나만의 브랜드 방향이 보입니다.
          </p>

          {!leadSubmitted ? (
            <form onSubmit={handleLeadSubmit} className="card-warm p-6 md:p-8 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[#2C2416] text-sm font-medium mb-1.5">이름 *</label>
                  <input
                    type="text"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    placeholder="홍길동"
                    className="w-full px-4 py-3 rounded-xl border border-[#EDE8DF] bg-[#F9F6F0] text-[#2C2416] placeholder-[#A89E93] text-sm focus:outline-none focus:ring-2 focus:ring-[#E87A5D]/30 focus:border-[#E87A5D]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#2C2416] text-sm font-medium mb-1.5">핸드폰 번호 *</label>
                  <input
                    type="tel"
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    placeholder="010-0000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-[#EDE8DF] bg-[#F9F6F0] text-[#2C2416] placeholder-[#A89E93] text-sm focus:outline-none focus:ring-2 focus:ring-[#E87A5D]/30 focus:border-[#E87A5D]"
                    required
                  />
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-[#2C2416] text-sm font-medium mb-1.5">이메일 주소 *</label>
                <input
                  type="email"
                  value={leadEmail}
                  onChange={(e) => setLeadEmail(e.target.value)}
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#EDE8DF] bg-[#F9F6F0] text-[#2C2416] placeholder-[#A89E93] text-sm focus:outline-none focus:ring-2 focus:ring-[#E87A5D]/30 focus:border-[#E87A5D]"
                  required
                />
              </div>
              <button type="submit" className="btn-coral w-full justify-center text-base py-3.5">
                <Download size={16} />
                자료집 무료로 받기
              </button>
              <p className="text-center text-[#A89E93] text-xs mt-3">
                개인정보는 자료 발송 목적으로만 사용되며, 수집 후 즉시 안전하게 보호됩니다.
              </p>
            </form>
          ) : (
            <div className="card-warm p-10 text-center">
              <CheckCircle2 className="text-[#8A9A86] mx-auto mb-4" size={48} />
              <h4
                className="text-[#2C2416] text-xl font-bold mb-2"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                신청이 완료되었습니다!
              </h4>
              <p className="text-[#6B6459] text-sm">
                입력하신 이메일로 자료집을 보내드렸습니다. 📬
              </p>
            </div>
          )}
        </motion.div>

        {/* 진단컨설팅 신청 폼 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="card-warm p-8 md:p-10">
            <div className="text-center mb-8">
              <h3
                className="text-[#2C2416] text-2xl font-bold mb-2"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                진단컨설팅 신청하기
              </h3>
              <p className="text-[#6B6459] text-sm">
                1~2 영업일 내 최은희 대표님이 직접 연락드립니다.
              </p>
            </div>

            {!consultSubmitted ? (
              <form onSubmit={handleConsultSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#2C2416] text-sm font-medium mb-1.5">이름 *</label>
                    <input
                      type="text"
                      value={consultName}
                      onChange={(e) => setConsultName(e.target.value)}
                      placeholder="홍길동"
                      className="w-full px-4 py-3 rounded-xl border border-[#EDE8DF] bg-[#F9F6F0] text-[#2C2416] placeholder-[#A89E93] text-sm focus:outline-none focus:ring-2 focus:ring-[#E87A5D]/30 focus:border-[#E87A5D]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#2C2416] text-sm font-medium mb-1.5">이메일 *</label>
                    <input
                      type="email"
                      value={consultEmail}
                      onChange={(e) => setConsultEmail(e.target.value)}
                      placeholder="example@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#EDE8DF] bg-[#F9F6F0] text-[#2C2416] placeholder-[#A89E93] text-sm focus:outline-none focus:ring-2 focus:ring-[#E87A5D]/30 focus:border-[#E87A5D]"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#2C2416] text-sm font-medium mb-1.5">문의 내용</label>
                  <textarea
                    value={consultMsg}
                    onChange={(e) => setConsultMsg(e.target.value)}
                    placeholder="어떤 도움이 필요하신지 간략히 적어주세요. (현재 상황, 원하는 결과 등)"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-[#EDE8DF] bg-[#F9F6F0] text-[#2C2416] placeholder-[#A89E93] text-sm focus:outline-none focus:ring-2 focus:ring-[#E87A5D]/30 focus:border-[#E87A5D] resize-none"
                  />
                </div>
                <button type="submit" className="btn-coral w-full justify-center text-base py-4">
                  진단컨설팅 신청하기
                  <Send size={16} />
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle2 className="text-[#8A9A86] mx-auto mb-4" size={48} />
                <h4
                  className="text-[#2C2416] text-xl font-bold mb-2"
                  style={{ fontFamily: "'Noto Serif KR', serif" }}
                >
                  신청이 완료되었습니다!
                </h4>
                <p className="text-[#6B6459] text-sm">
                  1~2 영업일 내 최은희 대표님이 직접 연락드립니다.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
