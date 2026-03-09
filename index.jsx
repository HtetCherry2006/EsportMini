import {useState} from "react";
import { useIsMobile } from "../hooks/useIsMobile";
import { useToast } from "../hooks/use-toast";
import { cn } from "../utils";

const Index = () => {
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("home");

  const handleAction = (actionName) => {
    toast({
      title: "Action Triggered",
      description: `You clicked on ${actionName}.`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* --- 1. TOP APP BAR --- */}
      <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-white/80 px-4 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">K</div>
          <span className="font-bold text-lg tracking-tight">MiniPay</span>
        </div>
        <button 
          onClick={() => handleAction("Settings")}
          className="p-2 rounded-full hover:bg-slate-100 active:scale-90 transition-transform"
        >
          <SettingsIcon />
        </button>
      </header>

      {/* --- 2. MAIN SCROLLABLE CONTENT --- */}
      <main className={cn(
        "flex-1 w-full max-w-2xl mx-auto space-y-6 pb-24", // pb-24 leaves room for bottom nav
        isMobile ? "p-4" : "p-8"
      )}>
        
        {/* --- HERO SECTION --- */}
        <section className="text-center py-6 space-y-4">
          <h1 className={cn(
            "font-extrabold tracking-tight transition-all",
            isMobile ? "text-3xl" : "text-5xl"
          )}>
            Welcome back, <span className="text-primary">User</span>
          </h1>
          <p className="text-slate-500 text-sm md:text-base">
            Manage your digital assets and services in one place.
          </p>
        </section>

        {/* --- 3. USER PROFILE CARD --- */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-blue-400 flex items-center justify-center text-white text-xl font-bold shadow-inner">
              JD
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">John Doe</h3>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Premium Member</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-400">Balance</p>
              <p className="font-bold text-primary text-lg">K 250,000</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button 
              onClick={() => handleAction("Transfer")}
              className="flex items-center justify-center gap-2 py-3 bg-primary/5 text-primary rounded-xl font-semibold text-sm active:scale-95 transition-all"
            >
              <SendIcon /> Transfer
            </button>
            <button 
              onClick={() => handleAction("Top Up")}
              className="flex items-center justify-center gap-2 py-3 bg-primary text-white rounded-xl font-semibold text-sm shadow-md active:scale-95 transition-all"
            >
              <PlusIcon /> Top Up
            </button>
          </div>
        </div>

        {/* --- QUICK SERVICES GRID --- */}
        <section className="space-y-4">
          <h2 className="font-bold text-slate-800 ml-1">Quick Services</h2>
          <div className="grid grid-cols-4 gap-4">
            {['Bills', 'Mobile', 'Scan', 'More'].map((item) => (
              <button key={item} className="flex flex-col items-center gap-2 active:scale-90 transition-transform">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-50">
                  <div className="w-6 h-6 bg-slate-200 rounded-md" />
                </div>
                <span className="text-[11px] font-medium text-slate-600">{item}</span>
              </button>
            ))}
          </div>
        </section>

      </main>

      {/* --- 4. BOTTOM NAVIGATION BAR (Mobile Style) --- */}
      <nav className={cn(
        "fixed bottom-0 left-0 right-0 border-t bg-white/95 backdrop-blur-md px-6 flex items-center justify-between pb-6 pt-3 shadow-[0_-4px_12px_rgba(0,0,0,0.03)]",
        !isMobile && "max-w-md mx-auto rounded-t-3xl border-x" // Style adjustment for desktop testing
      )}>
        <NavItem 
          icon={<HomeIcon />} 
          label="Home" 
          active={activeTab === 'home'} 
          onClick={() => setActiveTab('home')} 
        />
        <NavItem 
          icon={<ExploreIcon />} 
          label="Explore" 
          active={activeTab === 'explore'} 
          onClick={() => setActiveTab('explore')} 
        />
        <NavItem 
          icon={<HistoryIcon />} 
          label="History" 
          active={activeTab === 'history'} 
          onClick={() => setActiveTab('history')} 
        />
        <NavItem 
          icon={<UserIcon />} 
          label="Profile" 
          active={activeTab === 'profile'} 
          onClick={() => setActiveTab('profile')} 
        />
      </nav>
    </div>
  );
};

/* --- MINI COMPONENTS & ICONS --- */

const NavItem = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={cn(
      "flex flex-col items-center gap-1 transition-all duration-300",
      active ? "text-primary scale-110" : "text-slate-400"
    )}
  >
    {icon}
    <span className="text-[10px] font-bold">{label}</span>
    {active && <div className="w-1 h-1 bg-primary rounded-full" />}
  </button>
);

// Minimal SVG Icons
const SettingsIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
const HomeIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const ExploreIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>;
const HistoryIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>;
const UserIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const SendIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;
const PlusIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;

export default Index;