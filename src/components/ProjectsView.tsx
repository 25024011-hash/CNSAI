import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { projectsData } from "../data/projectsData";
import { Project } from "../types";
import { 
  FolderGit2, 
  GraduationCap, 
  MessageSquareCode, 
  UsersRound, 
  Sparkles, 
  ShieldAlert,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  ListTodo,
  TrendingUp,
  Database
} from "lucide-react";

// Icon mapping dictionary
const iconMap: { [key: string]: React.ComponentType<any> } = {
  FolderGit2: FolderGit2,
  GraduationCap: GraduationCap,
  MessageSquareCode: MessageSquareCode,
  UsersRound: UsersRound,
  Sparkles: Sparkles,
  ShieldAlert: ShieldAlert,
};

export default function ProjectsView() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [activeTab, setActiveTab] = React.useState<string>("");

  // Auto-set the first tab when a project is selected
  React.useEffect(() => {
    if (selectedProject) {
      setActiveTab(selectedProject.sections[0]?.id || "");
    }
  }, [selectedProject]);

  return (
    <div className="pb-16" id="projects-view-container">
      <AnimatePresence mode="wait">
        {!selectedProject ? (
          /* Grid View of all 6 Projects */
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-10"
            id="projects-grid-container"
          >
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-wide">
                Hệ thống 06 kỹ năng số cốt lõi
              </h2>
              <p className="text-white/60 text-sm leading-relaxed font-light">
                Khám phá các mảnh ghép học thuật được thiết kế chuẩn mực, kiểm soát chéo và đúc kết khoa học của Vũ Bảo Minh qua các bài tập nghiên cứu môn học.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="projects-cards-grid">
              {projectsData.map((project, idx) => {
                const IconComponent = iconMap[project.icon] || FolderGit2;
                return (
                  <motion.div
                    key={project.id}
                    id={`project-card-${project.id}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ y: -4, borderColor: "rgba(212, 175, 55, 0.3)" }}
                    className="flex flex-col justify-between bg-[#141416] border border-white/5 rounded-sm p-6 sm:p-7 text-white group cursor-pointer hover:bg-neutral-900/40 transition-all duration-300 relative overflow-hidden"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="space-y-5">
                      {/* Top ribbon: index and icon */}
                      <div className="flex items-center justify-between">
                        <div className="p-3 bg-white/[0.02] rounded-sm border border-white/10 group-hover:bg-[#d4af37]/5 group-hover:border-[#d4af37]/30 transition-all">
                          <IconComponent className="h-5 w-5 text-[#d4af37]" />
                        </div>
                        <span className="text-xl font-mono font-bold text-white/[0.05] group-hover:text-[#d4af37]/10 transition-all">
                          {project.number}
                        </span>
                      </div>

                      {/* Content block */}
                      <div className="space-y-2">
                        <span className="text-[9px] font-mono tracking-[0.2em] text-[#d4af37] font-semibold uppercase block">
                          {project.caseStudy}
                        </span>
                        <h3 className="text-lg font-serif text-white group-hover:text-[#d4af37]/90 transition-all tracking-wide">
                          {project.title}
                        </h3>
                        <p className="text-white/50 text-xs leading-relaxed line-clamp-3 font-light">
                          {project.shortDescription}
                        </p>
                      </div>
                    </div>

                    <div className="pt-5 flex items-center text-[10px] font-mono tracking-widest text-[#d4af37] mt-5 border-t border-white/5">
                      <span>CHUYÊN TRANG ĐỒ ÁN</span>
                      <ChevronRight className="h-3.5 w-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ) : (
          /* Detail Page View */
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-8"
            id="project-detail-container"
          >
            {/* Navigational back header */}
            <div className="flex items-center justify-between">
              <button
                id="btn-back-to-projects"
                onClick={() => setSelectedProject(null)}
                className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/60 hover:text-white cursor-pointer group bg-[#141416] border border-white/5 py-2.5 px-4 rounded-sm transition"
              >
                <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform text-[#d4af37]" />
                Quay lại danh sách
              </button>
              <div className="text-[10px] font-mono tracking-widest uppercase text-white/40">
                {selectedProject.caseStudy} / 06
              </div>
            </div>

            {/* Title Header Block */}
            <div className="bg-[#141416] border border-white/5 rounded-sm p-6 sm:p-10 text-white relative overflow-hidden" id="project-banner">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/2 rounded-full blur-2xl pointer-events-none" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 relative z-10">
                <div className="p-4 bg-white/[0.02] rounded-sm border border-white/10 max-w-fit text-[#d4af37]">
                  {React.createElement(iconMap[selectedProject.icon] || FolderGit2, { className: "h-8 w-8 text-[#d4af37]" })}
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-[#d4af37] uppercase tracking-[0.25em] font-semibold block">
                    {selectedProject.caseStudy}
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-serif tracking-wide text-white">
                    {selectedProject.title}
                  </h1>
                  <p className="text-white/60 text-sm max-w-3xl leading-relaxed font-light">
                    {selectedProject.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Split Grid Content layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="project-detail-layout">
              {/* Left tab selectors & bullet insights (4 columns) */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-[#141416] border border-white/5 rounded-sm p-4 space-y-1.5" id="detail-tabs">
                  <span className="block text-[9px] font-mono text-white/40 uppercase tracking-[0.2em] px-3 mb-2 font-semibold">
                    Các tiểu mục nghiên cứu
                  </span>
                  {selectedProject.sections.map((sec) => (
                    <button
                      key={sec.id}
                      id={`tab-btn-${sec.id}`}
                      onClick={() => setActiveTab(sec.id)}
                      className={`w-full text-left flex items-center justify-between px-4 py-3 rounded-sm font-light text-xs transition-all cursor-pointer ${
                        activeTab === sec.id
                          ? "bg-[#d4af37]/5 text-[#d4af37] border border-[#d4af37]/20 font-medium"
                          : "text-white/50 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span className="truncate">{sec.title}</span>
                      <ChevronRight className="h-3.5 w-3.5 shrink-0 transition-transform" />
                    </button>
                  ))}
                </div>

                {/* Micro bullet checkmarks card */}
                <div className="bg-[#141416] border border-white/5 rounded-sm p-6 text-white space-y-4">
                  <span className="text-[10px] font-mono text-[#d4af37] tracking-[0.2em] font-semibold uppercase flex items-center gap-1.5">
                    <TrendingUp className="h-3.5 w-3.5" />
                    Định hướng kỹ sư
                  </span>
                  <p className="text-xs text-white/50 leading-relaxed font-light">
                    Mỗi dự án thành phần phản ánh phương hướng phối hợp chuẩn chất lượng cao của sinh viên VNU UET.
                  </p>
                  <div className="space-y-2.5 pt-1" id="quality-checkpoints">
                    <div className="flex items-center gap-2.5 text-xs text-white/70">
                      <CheckCircle2 className="h-4 w-4 text-[#d4af37] shrink-0" />
                      <span className="font-light">Xác thực chéo 100% dữ liệu</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-white/70">
                      <CheckCircle2 className="h-4 w-4 text-[#d4af37] shrink-0" />
                      <span className="font-light">Tư duy phân tích hệ tâm lý số</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-white/70">
                      <CheckCircle2 className="h-4 w-4 text-[#d4af37] shrink-0" />
                      <span className="font-light">Liêm chính tự sự học thuật</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right content display panel & table (8 columns) */}
              <div className="lg:col-span-8 space-y-8" id="detail-display-panel">
                <AnimatePresence mode="wait">
                  {selectedProject.sections.map((sec) => {
                    if (sec.id !== activeTab) return null;
                    return (
                      <motion.div
                        key={sec.id}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="bg-[#141416] border border-white/5 rounded-sm p-6 sm:p-8 text-white space-y-6"
                      >
                        <h2 className="text-xl sm:text-2xl font-serif text-white tracking-wide">
                          {sec.title}
                        </h2>
                        
                        <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line font-light">
                          {sec.content}
                        </p>

                        {/* List items if any exists */}
                        {sec.points && sec.points.length > 0 && (
                          <div className="space-y-3 pt-2" id="section-points-list">
                            {sec.points.map((point, pIdx) => (
                              <div key={pIdx} className="flex items-start gap-4 bg-[#0d0d0e]/40 p-4 rounded-sm border border-white/5">
                                <span className="p-1 min-w-[24px] h-[24px] flex items-center justify-center bg-[#d4af37]/5 text-[#d4af37] text-[10px] font-mono font-bold mt-0.5 border border-[#d4af37]/10">
                                  {pIdx + 1}
                                </span>
                                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                                  {point}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                {/* Subheading: Data proof block (table) */}
                {selectedProject.dataBox && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-[#141416] border border-white/5 rounded-sm p-6 sm:p-8 text-white space-y-6"
                    id="project-datatable"
                  >
                    <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                      <Database className="h-5 w-5 text-[#d4af37]" />
                      <div>
                        <h3 className="text-lg font-serif text-white tracking-wide">
                          {selectedProject.dataBox.title}
                        </h3>
                        <p className="text-[10px] text-white/40 font-mono tracking-wider">
                          Bảng đối chiếu học thuật và kết quả thực nghiệm
                        </p>
                      </div>
                    </div>

                    <div className="overflow-x-auto w-full rounded-sm border border-white/5 bg-[#0d0d0e]/20" id="table-wrapper">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-white/[0.01]/80 border-b border-white/5 text-white/50 font-mono uppercase text-[9px] tracking-[0.15em]">
                            {selectedProject.dataBox.headers.map((head, hIdx) => (
                              <th key={hIdx} className="py-4 px-4 font-normal">
                                {head}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 font-mono text-[11px]">
                          {selectedProject.dataBox.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-white/[0.01] transition-all">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="py-4 px-4 text-white/70 leading-relaxed font-light">
                                  {/* Render highlighted numbers/codes differently */}
                                  {cell.startsWith(".") || cell.startsWith("/") || cell.startsWith("Q") || cell.startsWith("A") || cell.includes("http") ? (
                                    <span className="text-[#d4af37] bg-[#d4af37]/5 border border-[#d4af37]/15 rounded-sm px-2 py-0.5 text-[10px]">
                                      {cell}
                                    </span>
                                  ) : (
                                    cell
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
