
import { useParams, useNavigate } from "react-router-dom";
import { tournaments } from "../data/esportsData"; 



const TeamDetail = () => {
  const { id, teamId } = useParams();
  const navigate = useNavigate();

  // Find the tournament and team safely
  const tournament = tournaments.find((t) => t.id === id);
  const team = tournament?.teams?.find((t) => t.id === teamId);

  // If data is missing (e.g., direct deep link to a bad ID)
  if (!tournament || !team) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <p className="text-muted-foreground mb-4">Team or Tournament not found.</p>
        <button 
          onClick={() => navigate("/")} 
          className="px-4 py-2 bg-primary text-white rounded-lg active:scale-95"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const leader = team.players.find((p) => p.isLeader);

  return (
    <div className="min-h-screen bg-background pb-12">
      {/* 1. Header with Memory-Router friendly BackButton */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur-md border-b px-4 py-4">
        <BackButton 
          onClick={() => navigate(-1)} // Goes back to the previous screen in the stack
          label={tournament.title} 
        />
      </header>

      <div className="px-4 py-4 space-y-6">
        {/* Team Card */}
        <div className="bg-white rounded-2xl p-6 border shadow-sm text-center">
          <div className="text-5xl mb-2">{team.logo}</div>
          <h2 className="text-xl font-bold">{team.name}</h2>
          <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
            [{team.tag}] • {tournament.game}
          </p>

          {leader && (
            <div className="mt-4 inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5">
              <span className="text-[10px] font-bold text-primary uppercase">Leader</span>
              <span className="text-xs font-semibold">{leader.ign}</span>
            </div>
          )}
        </div>

        {/* Squad List */}
        <section>
          <div className="flex items-center justify-between mb-3 px-1">
            <h3 className="text-sm font-bold">Squad Roster</h3>
            <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-600">
              {team.players.length} Players
            </span>
          </div>
          
          <div className="space-y-2">
            {team.players.map((player) => (
              <PlayerRow key={player.id} player={player} />
            ))}
          </div>
        </section>

        {/* Tournament Participation Card */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Tournament Participation</h4>
          <p className="font-semibold text-sm">{tournament.title}</p>
          <p className="text-[10px] text-slate-500 mt-1">{tournament.date}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;