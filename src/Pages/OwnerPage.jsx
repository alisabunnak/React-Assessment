import { useState, useEffect } from "react";

function OwnerPage() {
  const [section, setSection] = useState("user");
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ name: "", lastName: "", position: "" });

  useEffect(() => {
    fetch("https://67eca027aa794fb3222e43e2.mockapi.io/members")
      .then((res) => res.json())
      .then((data) => {
        setMembers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error: {error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Hero */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-black mb-8">
          Generation Thailand<br />Home - Admin Section
        </h1>
        <div className="flex justify-center gap-8">
          <button
            onClick={() => setSection("user")}
            className={`px-10 py-4 rounded-xl font-semibold shadow ${
              section === "user" ? "bg-blue-500 text-white" : "bg-white text-black"
            }`}
          >
            User Home Section
          </button>
          <button
            onClick={() => setSection("admin")}
            className={`px-10 py-4 rounded-xl font-semibold shadow ${
              section === "admin" ? "bg-blue-500 text-white" : "bg-white text-black"
            }`}
          >
            Admin Home Section
          </button>
        </div>
      </div>

      {/* Admin: Create Form */}
      {section === "admin" && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3">Create User Here</h2>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-200"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-200"
            />
            <input
              type="text"
              placeholder="Position"
              value={form.position}
              onChange={(e) => setForm({ ...form, position: e.target.value })}
              className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-200"
            />
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600">
              Save
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      <p className="text-gray-400 text-sm mb-1">Table 1</p>
      <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-white border-b border-gray-200">
            <th className="px-6 py-3 text-left font-semibold">Name</th>
            <th className="px-6 py-3 text-left font-semibold">Last Name</th>
            <th className="px-6 py-3 text-left font-semibold">Position</th>
            {section === "admin" && (
              <th className="px-6 py-3 text-center font-semibold">Action</th>
            )}
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="px-6 py-3">{member.name}</td>
              <td className="px-6 py-3">{member.lastName}</td>
              <td className="px-6 py-3">{member.position}</td>
              {section === "admin" && (
                <td className="px-6 py-3 text-center">
                  <button className="text-red-500 font-semibold hover:text-red-700">
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OwnerPage;
