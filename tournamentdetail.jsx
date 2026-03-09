

import { useNavigate } from "react-router-dom";
import { tournaments } from "../data/E-sportdata";
import { cn } from "../lib/utils";

const TournamentList = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b px-6 py-5">
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Esports Hub</h1>
        <p className="text-[11px] font-bold text-primary uppercase tracking-widest mt-0.5">
          Live Tournaments
        </p>
      </header>

      <main className="px-4 py-6 space-y-4">
        {tournaments.length === 0 ? (
          <div className="text-center py-20 text-slate-400">No tournaments available.</div>
        ) : (
          tournaments.map((t) => (
            <button
              key={t.id}
              onClick={() => navigate(`/tournament/${t.id}`)}
              className="w-full flex items-center gap-4 p-4 bg-white rounded-3xl shadow-sm border border-slate-100 active:scale-[0.98] transition-all"
            >
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center text-2xl",
                t.game === "MLBB" ? "bg-amber-50" : "bg-emerald-50"
              )}>
                {t.game === "MLBB" ? "🔥" : "🎯"}
              </div>
              <div className="flex-1 text-left">
                <h2 className="font-bold text-slate-900 leading-tight">{t.title}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">{t.game}</span>
                  <span className="text-[10px] text-slate-300">•</span>
                  <span className="text-[10px] text-slate-400">{t.date.split(" - ")[0]}</span>
                </div>
              </div>
            </button>
          ))
        )}
      </main>
    </div>
  );
};

export default TournamentList;