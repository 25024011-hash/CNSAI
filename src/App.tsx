import React from "react";
import Header from "./components/Header";
import HomeView from "./components/HomeView";
import ProjectsView from "./components/ProjectsView";
import ConclusionView from "./components/ConclusionView";
import { GraduationCap, Github, Mail, Globe } from "lucide-react";

export default function App() {
  const [currentView, setView] = React.useState<string>("home");

  return (
    <div className="min-h-screen bg-[#0d0d0e] text-white/90 flex flex-col justify-between selection:bg-[#d4af37]/25 selection:text-[#d4af37] font-sans" id="app-root">
      {/* Top Navigation */}
      <Header currentView={currentView} setView={setView} />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 flex-grow w-full">
        {currentView === "home" && <HomeView setView={setView} />}
        {currentView === "projects" && <ProjectsView />}
        {currentView === "conclusion" && <ConclusionView />}
      </main>

      {/* Elegant, humble page footer */}
      <footer className="border-t border-white/5 bg-[#0d0d0e] py-12 text-white/40 text-xs text-center" id="app-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-8">
            <div className="text-left space-y-2">
              <span className="font-serif text-sm tracking-widest text-white uppercase block">
                Vũ Bảo Minh (Minh Bob)
              </span>
              <p className="text-[10px] font-mono text-white/45 uppercase tracking-wider">
                Lớp học phần: VNU1001_E252020 | Trường Đại học Công nghệ - ĐHQGHN
              </p>
            </div>
            
            {/* Quick Contact Links */}
            <div className="flex items-center gap-4">
              <a 
                href="mailto:astrialosu@gmail.com" 
                className="p-2.5 bg-[#141416] border border-white/5 hover:border-[#d4af37]/40 rounded-sm hover:text-[#d4af37] transition duration-300"
                title="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider font-mono bg-[#141416] border border-white/5 px-4 py-2 rounded-sm text-white/50">
                <GraduationCap className="h-4 w-4 text-[#d4af37]" />
                <span>UET K70</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] text-white/30 font-mono uppercase tracking-[0.15em] gap-2">
            <span>© 2026 Vũ Bảo Minh. Toàn bộ bản quyền được bảo lưu.</span>
            <span>Thiết kế cho Nhập môn Công nghệ số & Ứng dụng AI</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
