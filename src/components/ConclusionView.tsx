import React from "react";
import { motion } from "motion/react";
import { 
  Milestone, 
  Terminal, 
  ChevronRight, 
  ShieldCheck, 
  Laptop, 
  Activity, 
  Flame,
  Award,
  Sparkles
} from "lucide-react";

export default function ConclusionView() {
  const roadmapPoints = [
    {
      title: "Cấp độ 1: Kiểm soát Hạ tầng Dữ liệu cá nhân",
      description: "Hệ thống hóa toàn bộ tài liệu học thuật kỹ thuật chuyên ngành từ không gian đĩa cục bộ tới các hạ tầng điện toán đám mây. Đồng nhất các tiền tố định dạng và phân chia phân tầng dữ liệu.",
      status: "Hoàn thiện 100%",
      icon: Laptop
    },
    {
      title: "Cấp độ 2: Nâng cao Tư duy Thu thập & Phân tích Độc lập",
      description: "Thoát ly thói quen tìm kiếm thông thường để tiếp cận cơ sở dữ liệu học thuật uy tín số một như IEEE, Scopus. Áp dụng chuẩn CRAAP sàng lọc nguồn tin tạp chí để bảo vệ luận cứ môn học.",
      status: "Hoàn thiện 100%",
      icon: ChevronRight
    },
    {
      title: "Cấp độ 3: Hợp tác số & Đồng sáng tạo AI Có trách nhiệm",
      description: "Thành thạo lập trình câu lệnh C.L.E.A.R điều hướng mô hình ngôn ngữ lớn LLM. Phối hợp nhịp nhàng giữa chất liệu do biên tập viên AI tạo sinh và khâu kiểm duyệt hậu kỳ thủ công của con người.",
      status: "Hành động liên tục",
      icon: Sparkles
    }
  ];

  return (
    <div className="space-y-12 pb-16" id="conclusion-view-container">
      {/* Banner Area */}
      <section className="relative overflow-hidden rounded-sm bg-[#141416] border border-white/5 p-8 sm:p-14 lg:p-20 text-white" id="conclusion-banner">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.02] border border-white/10 text-[#d4af37] text-[10px] font-mono rounded-sm uppercase tracking-[0.25em] font-semibold">
            <Milestone className="h-3.5 w-3.5 text-[#d4af37]" />
            Reflection & Growth
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-white tracking-wide">
            Từ Không gian số đến Tư duy Kỹ sư
          </h1>
          <p className="text-[#d4af37] text-xs sm:text-sm font-mono tracking-widest uppercase font-semibold">
            Nhìn lại hành trình đúc kết học tập - Vũ Bảo Minh
          </p>
        </div>
      </section>

      {/* Main Reflections layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="conclusion-grid">
        {/* Left Side: Longform narrative Reflection (8 columns) */}
        <motion.div 
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-8 bg-[#141416] border border-white/5 rounded-sm p-6 sm:p-8 text-white space-y-6"
          id="reflection-narrative"
        >
          <div className="flex items-center gap-3">
            <Flame className="h-5 w-5 text-[#d4af37] animate-pulse" />
            <h2 className="text-2xl font-serif text-white tracking-wide">Nhìn lại hành trình</h2>
          </div>

          <p className="text-white/70 text-sm leading-relaxed font-light">
            Học phần <span className="text-[#d4af37] font-medium font-mono">"Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo (VNU1001)"</span> không chỉ là một môn học kỹ năng máy tính đơn thuần, mà là bệ phóng định hình lại toàn bộ phương pháp nghiên cứu và làm việc khoa học của tôi tại Đại học Công nghệ (VNU-UET).
          </p>

          <p className="text-white/70 text-sm leading-relaxed font-light">
            Trước khi bắt đầu, việc tiếp xúc với dữ liệu và công cụ số của tôi diễn ra một cách tự phát, rời rạc và thiếu cấu trúc. Tuy nhiên, qua 06 Case Studies thực hành từ quản lý tệp tin, tìm kiếm bài báo chuyên ngành đến việc tối ưu hóa kịch bản Prompt cho AI, tôi đã nhận ra sức mạnh to lớn của <span className="text-white font-normal">Tư duy hệ thống hóa</span>.
          </p>

          <p className="text-white/70 text-sm leading-relaxed font-light">
            Là một sinh viên ngành Công nghệ Vật liệu, tôi thấu hiểu rằng tương lai của ngành công nghiệp chế tạo và khoa học vật liệu luôn gắn liền với nghiên cứu hiện đại và ứng dụng trí tuệ nhân tạo. Việc làm chủ dòng thác thông tin và biết cách đồng hành lành mạnh, trách nhiệm cùng trí thông minh nhân tạo (AI) chính là trang bị tối thượng để tôi tự tin bước ra thị trường lao động toàn cầu đầy biến động.
          </p>

          {/* Slogan block */}
          <div className="border-l-2 border-[#d4af37] bg-[#0d0d0e]/40 p-5 rounded-sm border border-white/5">
            <span className="block text-[9px] font-mono uppercase tracking-[0.2em] text-[#d4af37] mb-1.5 font-bold">Tầm nhìn cá nhân</span>
            <p className="text-xs sm:text-sm font-serif italic text-white/95 leading-relaxed">
              "Hãy biến Trí điện toán AI thành bệ phóng gia tốc tri thức cá nhân từ số 0 lên số 1, nhưng hãy luôn tinh lọc bằng tư duy phản biện kiên định của khối óc kỹ sư để dẫn lối hành trình từ 1 lên 10."
            </p>
          </div>
        </motion.div>

        {/* Right Side: Milestones Roadmap (4 columns) */}
        <motion.div 
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-4 space-y-6"
          id="reflection-roadmap-panel"
        >
          {/* Timeline of growth */}
          <div className="bg-[#141416] border border-white/5 rounded-sm p-6 text-white space-y-6">
            <h3 className="text-lg font-serif tracking-normal border-b border-white/5 pb-3 flex items-center gap-2">
              <Award className="h-5 w-5 text-[#d4af37]" />
              Chỉ số Trưởng thành Số
            </h3>

            <div className="space-y-6 relative border-l border-white/5 pl-4 ml-2" id="roadmap-chain">
              {roadmapPoints.map((pt, index) => {
                return (
                  <div key={index} className="relative space-y-2">
                    {/* Circle marker */}
                    <span className="absolute -left-[23.5px] top-1 flex h-3 w-3 items-center justify-center rounded-full bg-[#0d0d0e] border border-[#d4af37]">
                      <span className="h-1 w-1 rounded-full bg-[#d4af37]" />
                    </span>
                    <span className="inline-block text-[9px] font-mono font-bold text-[#d4af37] uppercase tracking-[0.1em] bg-[#d4af37]/5 px-2 py-0.5 rounded-sm border border-[#d4af37]/15 max-w-fit">
                      {pt.status}
                    </span>
                    <h4 className="text-xs sm:text-sm font-semibold text-white">
                      {pt.title}
                    </h4>
                    <p className="text-[11px] text-white/50 leading-relaxed font-light">
                      {pt.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Academic Integrity pledge */}
          <div className="bg-gradient-to-br from-[#141416] to-[#d4af37]/3 border border-white/5 rounded-sm p-6 text-white space-y-4">
            <div className="flex items-center gap-2 text-[#d4af37]">
              <ShieldCheck className="h-4.5 w-4.5" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.15em]">Mức cam kết Liêm chính</span>
            </div>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              Vũ Bảo Minh cam kết tuân thủ chính trực và khai báo minh bạch vai trò của các trợ lý thuật toán trong mọi sáng tác khoa học tại ĐHQGHN.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
