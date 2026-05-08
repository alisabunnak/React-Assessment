import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import OwnerPage from "./Pages/OwnerPage";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar — อยู่ทุกหน้า */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/owner">Owner</Link>
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
