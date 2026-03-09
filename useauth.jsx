
import React, { useState } from "react";
import { MemoryRouter, Routes, Route, useNavigate } from "react-router-dom";

export default function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </MemoryRouter>
  );
}

function SignupPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [teamName, setTeamName] = useState("");
  const [logo, setLogo] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLogo(file);
    const imageURL = URL.createObjectURL(file);
    setPreview(imageURL);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      rollNo,
      teamName,
      logo,
    };

    console.log("Signup Data:", data);

    navigate("/success", {
      state: { name, teamName },
    });
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-900 rounded-2xl p-6 shadow-xl">

        <h1 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          KBZ Arena Signup
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="text-sm text-gray-300">Student Name</label>
            <input
              className="w-full mt-1 p-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Roll Number</label>
            <input
              className="w-full mt-1 p-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter roll number"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Team Name</label>
            <input
              className="w-full mt-1 p-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter team name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Team Logo</label>

            <input
              type="file"
              accept="image/*"
              onChange={handleLogoChange}
              className="w-full mt-2 text-sm"
            />

            {preview && (
              <div className="mt-4 flex justify-center">
                <img
                  src={preview}
                  alt="Team Logo Preview"
                  className="w-24 h-24 rounded-xl object-cover border border-slate-700"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-2xl font-semibold bg-gradient-to-r from-amber-400 to-orange-500 text-black hover:opacity-90 transition"
          >
            Register Team
          </button>

        </form>
      </div>
    </div>
  );
}

function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white p-4">
      <div className="bg-slate-900 p-8 rounded-2xl text-center shadow-xl">

        <h2 className="text-2xl font-bold text-green-400 mb-4">
          Registration Successful
        </h2>

        <p className="text-gray-300">
          Your team has been registered for
        </p>

        <p className="text-xl font-semibold mt-2 text-amber-400">
          KBZ Arena Tournament
        </p>

      </div>
    </div>
  );
}