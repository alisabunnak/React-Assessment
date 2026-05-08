import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import OwnerPage from "./Pages/OwnerPage";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar — อยู่ทุกหน้า */}
      <nav className="flex justify-end gap-8 px-8 py-4 bg-white border-b border-gray-200">
        <Link to="/" className="font-semibold hover:text-blue-500">Home</Link>
        <Link to="/owner" className="font-semibold hover:text-blue-500">Owner</Link>
      </nav>

      {/* ส่วนที่เปลี่ยนตาม URL */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/owner" element={<OwnerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
