import React from "react";
import { motion } from "motion/react";
import { Cpu, Menu, X, GraduationCap, Home, BookOpen, Milestone } from "lucide-react";

interface HeaderProps {
  currentView: string;
  setView: (view: string) => void;
}

export default function Header({ currentView, setView }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const menuItems = [
    { id: "home", label: "Trang chủ", icon: Home },
    { id: "projects", label: "Dự án", icon: BookOpen },
    { id: "conclusion", label: "Kết luận", icon: Milestone },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0d0d0e]/90 backdrop-blur-md border-b border-white/5 text-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand */}
          <div 
            onClick={() => { setView("home"); setMobileMenuOpen(false); }} 
            className="flex items-center gap-3.5 cursor-pointer group"
            id="brand-logo"
          >
            <div className="p-2.5 bg-white/[0.02] rounded-sm border border-white/10 group-hover:border-[#d4af37]/40 group-hover:bg-[#d4af37]/5 transition-all duration-300">
              <Cpu className="h-5 w-5 text-[#d4af37] group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div>
              <span className="font-serif text-lg tracking-widest text-white uppercase block leading-none mb-1.5">
                V. B. Minh
              </span>
              <span className="block text-[9px] text-[#d4af37] tracking-[0.25em] font-mono uppercase font-semibold">
                Digital Portfolio
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2" id="desktop-nav">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-btn-${item.id}`}
                  onClick={() => setView(item.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-sm font-mono text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
                    isActive 
                      ? "text-[#d4af37]" 
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 ${isActive ? "text-[#d4af37]" : "text-white/30"}`} />
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#d4af37]/5 border border-[#d4af37]/15 rounded-sm -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
            <div className="w-[1px] h-5 bg-white/5 mx-4" />
            <div className="flex items-center gap-2 text-[10px] font-mono text-white/40 bg-white/[0.02] py-1.5 px-3 rounded-sm border border-white/5 max-w-[160px] truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse inline-block" />
              <span>VNU1001_E252020</span>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-sm transition-all"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-t border-white/5 bg-[#0d0d0e] px-4 py-5 space-y-2 shadow-2xl"
          id="mobile-menu-panel"
        >
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setView(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-sm font-mono text-xs uppercase tracking-wider transition-all ${
                  isActive
                    ? "bg-[#d4af37]/5 text-[#d4af37] border border-[#d4af37]/20"
                    : "text-white/55 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
          <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40 px-2 uppercase tracking-widest">
            <span>Mã sinh viên:</span>
            <span className="text-[#d4af37]">25024011</span>
          </div>
        </motion.div>
      )}
    </header>
  );
}
