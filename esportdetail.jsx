
import { useParams, useNavigate } from "react-router-dom";
import { tournaments } from "../data/esportsData";
import { BackButton } from "../components/esports/BackButton";
import { cn } from "../utils";

const TournamentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const tournament = tournaments.find((t) => t.id === id);

  if (!tournament) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-center">
        <p className="text-muted-foreground">Tournament data not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b px-4 py-4">
        <BackButton onClick={() => navigate(-1)} label="Tournaments" />
      </header>

      <div className="px-4 py-4 space-y-6">
        {/* Tournament Info */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <span className={cn(
            "text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full",
            tournament.game === "MLBB" ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"
          )}>
            {tournament.game}
          </span>
          <h2 className="text-2xl font-bold mt-3 leading-tight">{tournament.title}</h2>
          <p className="text-sm text-slate-500 mt-2">{tournament.description}</p>
        </div>

        {/* Local Team List (No external component needed) */}
        <section>
          <h3 className="font-bold text-slate-800 mb-4 px-1">Participating Teams</h3>
          <div className="space-y-3">
            {tournament.teams.map((team) => (
              <button
                key={team.id}
                onClick={() => navigate(`/tournament/${id}/team/${team.id}`)}
                className="w-full flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm active:scale-[0.98] transition-transform"
              >
                <div className="text-3xl">{team.logo}</div>
                <div className="flex-1 text-left">
                  <h4 className="font-bold text-slate-900">{team.name}</h4>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">{team.tag}</p>
                </div>
                <div className="text-[10px] font-bold text-primary">View</div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TournamentDetail;