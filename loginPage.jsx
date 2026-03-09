
import { Crown, User, Hash, Users, Gamepad2,  ChevronDown, ArrowLeft } from "lucide-react";

const games = [
  { value: "ml", label: "Mobile Legends" },
  { value: "pubg", label: "PUBG Mobile" },
  { value: "other", label: "Other" },
];

const LoginPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    studentId: "",
    teamName: "",
    game: "",
    gameId: "",
    phone: "",
  });

  const [gameDropdownOpen, setGameDropdownOpen] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const selectedGame = games.find((g) => g.value === form.game);

  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1 text-muted-foreground px-4 pt-4 text-sm hover:text-foreground"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      {/* Header */}
      <div className="pt-4 pb-6 px-6 text-center">
        <div className="w-16 h-16 rounded-2xl bg-primary mx-auto flex items-center justify-center mb-4">
          <Crown className="w-8 h-8 text-primary-foreground" />
        </div>

        <h1 className="text-2xl font-display font-bold tracking-wider text-foreground">
          KBZ ARENA
        </h1>

        <p className="text-muted-foreground text-sm mt-1">
          Register to compete
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex-1 px-5 pb-8 space-y-4">

        {/* Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-display tracking-wider text-muted-foreground uppercase">
            Full Name
          </label>

          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />

            <input
              type="text"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Enter your name"
              className="w-full bg-card border border-border rounded-lg pl-10 pr-4 py-3 text-sm"
            />
          </div>
        </div>

        {/* Student ID */}
        <div className="space-y-1.5">
          <label className="text-xs font-display tracking-wider text-muted-foreground uppercase">
            Student ID
          </label>

          <div className="relative">
            <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />

            <input
              type="text"
              value={form.studentId}
              onChange={(e) => handleChange("studentId", e.target.value)}
              placeholder="STU-2026-001"
              className="w-full bg-card border border-border rounded-lg pl-10 pr-4 py-3 text-sm"
            />
          </div>
        </div>

        {/* Team Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-display tracking-wider text-muted-foreground uppercase">
            Team Name
          </label>

          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />

            <input
              type="text"
              value={form.teamName}
              onChange={(e) => handleChange("teamName", e.target.value)}
              placeholder="Your team name"
              className="w-full bg-card border border-border rounded-lg pl-10 pr-4 py-3 text-sm"
            />
          </div>
        </div>

        {/* Game Dropdown */}
        <div className="space-y-1.5">
          <label className="text-xs font-display tracking-wider text-muted-foreground uppercase">
            Select Game
          </label>

          <div className="relative">
            <Gamepad2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />

            <button
              type="button"
              onClick={() => setGameDropdownOpen(!gameDropdownOpen)}
              className="w-full bg-card border border-border rounded-lg pl-10 pr-10 py-3 text-sm text-left"
            >
              {selectedGame ? selectedGame.label : "Choose a game"}
            </button>

            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />

            {gameDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-lg z-20">
                {games.map((game) => (
                  <button
                    key={game.value}
                    type="button"
                    onClick={() => {
                      handleChange("game", game.value);
                      setGameDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-secondary"
                  >
                    {game.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Game ID */}
        <input
          type="text"
          value={form.gameId}
          onChange={(e) => handleChange("gameId", e.target.value)}
          placeholder="Your in-game ID"
          className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm"
        />

        {/* Phone */}
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          placeholder="09-xxx-xxx-xxx"
          className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm"
        />

        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg"
        >
          Register & Enter
        </button>

      </form>
    </div>
  );
};

export default LoginPage;