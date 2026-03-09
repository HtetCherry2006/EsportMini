

/* Example reusable card (like the one used in player view) */
const TournamentCard = ({ title, game }) => {
  return (
    <div className="bg-slate-900 rounded-xl p-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-400">{game}</p>
    </div>
  );
};

const AdminDashboard = () => {
  const [organizers, setOrganizers] = useState([
    {
      id: 1,
      name: "KBZ Esports Team",
      email: "admin@kbzarena.com",
    },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  /* Example tournaments */
  const tournaments = [
    { id: 1, title: "MLBB Championship", game: "Mobile Legends" },
    { id: 2, title: "PUBG Squad Battle", game: "PUBG Mobile" },
  ];

  /* Validate Email */
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  /* Add Organizer */
  const handleAddOrganizer = () => {
    if (!name.trim()) {
      alert("Organizer name is required");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    const newOrganizer = {
      id: Date.now(),
      name,
      email,
    };

    setOrganizers([...organizers, newOrganizer]);

    setName("");
    setEmail("");
  };

  /* Delete Organizer */
  const handleDelete = (id) => {
    setOrganizers(organizers.filter((org) => org.id !== id));
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <h1 className="text-2xl font-bold">
        ADMIN <br /> DASHBOARD
      </h1>

      {/* KPI STATS */}
      <div className="grid grid-cols-2 gap-3">

        <div className="bg-slate-900 p-4 rounded-xl text-center">
          <p className="text-xl font-bold">12</p>
          <p className="text-xs text-gray-400">Tournaments</p>
        </div>

        <div className="bg-slate-900 p-4 rounded-xl text-center">
          <p className="text-xl font-bold">48</p>
          <p className="text-xs text-gray-400">Teams</p>
        </div>

        <div className="bg-slate-900 p-4 rounded-xl text-center">
          <p className="text-xl font-bold">220</p>
          <p className="text-xs text-gray-400">Players</p>
        </div>

        <div className="bg-slate-900 p-4 rounded-xl text-center">
          <p className="text-xl font-bold">{organizers.length}</p>
          <p className="text-xs text-gray-400">Organizers</p>
        </div>

      </div>

      {/* ADD ORGANIZER */}
      <div className="bg-slate-900 p-4 rounded-xl space-y-3">

        <h2 className="font-semibold">Add Organizer</h2>

        <input
          className="w-full p-3 rounded-lg bg-slate-800"
          placeholder="Organizer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full p-3 rounded-lg bg-slate-800"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleAddOrganizer}
          className="w-full py-3 bg-orange-500 rounded-lg"
        >
          Add Organizer
        </button>

      </div>

      {/* ORGANIZER LIST */}
      <div className="space-y-3">

        <h2 className="font-semibold">Organizers</h2>

        {organizers.length === 0 ? (
          <div className="text-center text-gray-400 p-6 bg-slate-900 rounded-xl">
            No organizers found
          </div>
        ) : (
          organizers.map((org) => (
            <div
              key={org.id}
              className="flex justify-between items-center bg-slate-900 p-4 rounded-xl"
            >
              <div>
                <p className="font-medium">{org.name}</p>
                <p className="text-sm text-gray-400">{org.email}</p>
              </div>

              <button
                onClick={() => handleDelete(org.id)}
                className="text-red-400 text-sm"
              >
                Delete
              </button>
            </div>
          ))
        )}

      </div>

      {/* TOURNAMENT MANAGEMENT */}
      <div className="space-y-3">

        <h2 className="font-semibold">Manage Tournaments</h2>

        {tournaments.map((t) => (
          <TournamentCard
            key={t.id}
            title={t.title}
            game={t.game}
          />
        ))}

      </div>

    </div>
  );
};

export default AdminDashboard;