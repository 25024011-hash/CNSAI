import React from "react";
import { motion } from "motion/react";
import { 
  User, 
  School, 
  Layers, 
  Fingerprint, 
  Bookmark, 
  Dumbbell, 
  Video, 
  Palette, 
  Compass, 
  Target, 
  ArrowRight,
  Cpu
} from "lucide-react";

interface HomeViewProps {
  setView: (view: string) => void;
}

export default function HomeView({ setView }: HomeViewProps) {
  return (
    <div className="space-y-12 pb-16" id="home-view-container">
      {/* Hero Banner Section */}
      <section className="relative overflow-hidden rounded-sm bg-[#141416] border border-white/5 p-8 sm:p-14 lg:p-20 text-center text-white" id="hero-banner">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
        
        {/* Ambient light effects */}
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#d4af37]/3 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#d4af37]/3 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.02] border border-white/10 text-[#d4af37] text-[10px] font-mono tracking-[0.25em] uppercase mb-1"
          >
            <Cpu className="h-3.5 w-3.5 animate-spin-slow text-[#d4af37]" />
            VNU-UET | Đại học Công nghệ
          </motion.div>
          
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-serif text-white tracking-wide"
            >
              Digital Portfolio
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xs sm:text-sm text-[#d4af37] font-mono tracking-[0.3em] uppercase block leading-relaxed max-w-2xl mx-auto font-semibold"
            >
              Nhập môn Công nghệ số & Ứng dụng Trí tuệ nhân tạo
            </motion.p>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-white/60 max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-light"
          >
            Không gian lưu trữ, đúc kết, và hệ thống hóa kết quả học tập từ 06 kỹ năng số nền tảng của một Kỹ sư Công nghệ Vật liệu tương lai trong thời đại AI.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="pt-4 flex flex-wrap justify-center gap-4"
          >
            <button 
              onClick={() => setView("projects")}
              className="px-8 py-3.5 bg-[#d4af37] text-[#0d0d0e] hover:bg-[#c39e26] font-mono text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-xl flex items-center gap-2 group cursor-pointer"
              id="cta-projects"
            >
              Xem 06 dự án chính
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setView("conclusion")}
              className="px-8 py-3.5 bg-white/[0.02] text-white/80 hover:text-white border border-white/10 hover:border-white/20 font-mono text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer"
              id="cta-conclusion"
            >
              Đọc kết luận
            </button>
          </motion.div>
        </div>
      </section>

      {/* Main Grid: Student info & Learning orientation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="home-main-sections">
        
        {/* Left Column: Student Academic Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-4 bg-[#141416] border border-white/5 rounded-sm p-6 sm:p-8 text-white relative overflow-hidden flex flex-col justify-between"
          id="student-card-container"
        >
          {/* Subtle logo/chip styling */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/2 rounded-full blur-2xl pointer-events-none" />
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-sm bg-white/[0.02] border border-white/10 flex items-center justify-center text-[#d4af37]">
                <User className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif tracking-wide text-white">V. B. Minh</h3>
                <p className="text-[10px] text-white/40 tracking-wider font-mono uppercase">Vũ Bảo Minh</p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-white/5" />

            <div className="space-y-5" id="academic-fields">
              <div className="flex items-start gap-3">
                <School className="h-4.5 w-4.5 text-[#d4af37] mt-0.5 shrink-0 opacity-80" />
                <div>
                  <span className="block text-[9px] text-white/40 uppercase tracking-[0.15em] font-mono font-medium mb-0.5">Trường</span>
                  <span className="text-sm font-light text-white/90">Đại học Công nghệ (VNU-UET)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Layers className="h-4.5 w-4.5 text-[#d4af37] mt-0.5 shrink-0 opacity-80" />
                <div>
                  <span className="block text-[9px] text-white/40 uppercase tracking-[0.15em] font-mono font-medium mb-0.5">Ngành học</span>
                  <span className="text-sm font-light text-white/90">Công nghệ Vật liệu</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Fingerprint className="h-4.5 w-4.5 text-[#d4af37] mt-0.5 shrink-0 opacity-80" />
                <div>
                  <span className="block text-[9px] text-white/40 uppercase tracking-[0.15em] font-mono font-medium mb-0.5">Mã số sinh viên</span>
                  <span className="text-sm font-semibold text-[#d4af37] font-mono">25024011</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Bookmark className="h-4.5 w-4.5 text-[#d4af37] mt-0.5 shrink-0 opacity-80" />
                <div>
                  <span className="block text-[9px] text-white/40 uppercase tracking-[0.15em] font-mono font-medium mb-0.5">Mã lớp học phần</span>
                  <span className="text-sm font-semibold text-[#d4af37] font-mono">VNU1001_E252020</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-white/[0.01] border border-white/5 text-[11px] text-white/50 leading-relaxed font-mono">
            📌 Khóa học quân sự, thí nghiệm phần cứng và chuyển thể không gian số đều được lưu trữ hoàn chỉnh.
          </div>
        </motion.div>

        {/* Right Column: Direction & Content */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-8 space-y-8"
          id="student-narrative-container"
        >
          {/* Section: Learning orientation */}
          <div className="bg-[#141416] border border-white/5 rounded-sm p-6 sm:p-8 text-white space-y-6">
            <div className="flex items-center gap-3">
              <Compass className="h-5 w-5 text-[#d4af37]" />
              <h2 className="text-2xl font-serif text-white tracking-wide">Định hướng học tập & phát triển</h2>
            </div>
            
            <p className="text-white/70 text-sm leading-relaxed font-light">
              Là sinh viên khối ngành kỹ thuật, định hướng của tôi là xây dựng nền tảng vững chắc về kỹ thuật chuyên ngành, kết hợp với việc làm chủ các công cụ số hiện đại. Học phần <span className="text-[#d4af37] font-medium font-mono">"Nhập môn Công nghệ số và Ứng dụng AI"</span> đã cung cấp nền tảng quan trọng giúp tôi hiểu cách AI hỗ trợ tối ưu hóa công việc. Mục tiêu của tôi là không ngừng trau dồi tư duy logic, nâng cao năng lực ngoại ngữ và các kỹ năng phần mềm để đáp ứng yêu cầu thực chiến của một kỹ sư công nghệ trong kỷ nguyên số.
            </p>
            
            <p className="text-white/70 text-sm leading-relaxed font-light">
              Bên cạnh thời gian dành cho chuyên ngành, sở thích cá nhân của tôi là <span className="text-white font-normal">sáng tạo hình ảnh, quay dựng video</span> và rèn luyện tính kỷ luật thông qua việc <span className="text-white font-normal">tập luyện thể hình</span>. Sự giao thoa giữa tư duy kỹ thuật logic và góc nhìn thẩm mỹ cá nhân chính là nền tảng để tôi thiết kế nên giao diện của Portfolio này.
            </p>

            {/* Sub-grid: Hobbies aesthetics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4" id="interests-grid">
              <div className="p-4 rounded-sm bg-white/[0.01] border border-white/5 flex items-center gap-3 group hover:border-[#d4af37]/30 transition-all duration-300">
                <Palette className="h-4.5 w-4.5 text-[#d4af37] shrink-0" />
                <div>
                  <span className="block text-[9px] text-white/40 font-mono tracking-wider">AESTHETICS</span>
                  <span className="text-xs font-semibold text-white/90">Ảnh & Đồ họa</span>
                </div>
              </div>
              <div className="p-4 rounded-sm bg-white/[0.01] border border-white/5 flex items-center gap-3 group hover:border-[#d4af37]/30 transition-all duration-300">
                <Video className="h-4.5 w-4.5 text-[#d4af37] shrink-0" />
                <div>
                  <span className="block text-[9px] text-white/40 font-mono tracking-wider">MEDIA PRODUCTION</span>
                  <span className="text-xs font-semibold text-white/90">Quay dựng Video</span>
                </div>
              </div>
              <div className="p-4 rounded-sm bg-white/[0.01] border border-white/5 flex items-center gap-3 group hover:border-[#d4af37]/30 transition-all duration-300">
                <Dumbbell className="h-4.5 w-4.5 text-[#d4af37] shrink-0" />
                <div>
                  <span className="block text-[9px] text-white/40 font-mono tracking-wider">DISCIPLINE</span>
                  <span className="text-xs font-semibold text-white/90">Thể hình & Gym</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Portfolio Goal */}
          <div className="bg-gradient-to-br from-[#d4af37]/3 to-[#141416] border border-[#d4af37]/10 rounded-sm p-6 sm:p-8 text-white space-y-4">
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-[#d4af37]" />
              <h2 className="text-2xl font-serif text-white tracking-wide">Mục tiêu của Portfolio</h2>
            </div>
            
            <p className="text-white/70 text-sm leading-relaxed font-light">
              Portfolio này được xây dựng nhằm tổng hợp và hệ thống hóa kiến thức từ <span className="text-[#d4af37] font-semibold font-mono">06 kỹ năng số quan trọng</span> đã tích lũy trong học phần. Đây không chỉ là không gian lưu trữ các dự án thành phần một cách khoa học để dễ dàng tra cứu, mà còn là công cụ trực quan chứng minh năng lực tự thích nghi công nghệ, giải quyết các bài toán cơ điện tử thực chiến và sử dụng trí tuệ nhân tạo có trách nhiệm của bản thân.
            </p>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
