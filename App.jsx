import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import FakeNews from "./pages/FakeNews";
import DigitalLiteracy from "./pages/DigitalLiteracy";
import VerifyNews from "./pages/VerifyNews";
import VerificationGuide from "./pages/VerificationGuide";
import SpotFake from "./pages/SpotFake";
import Quiz from "./pages/Quiz";
import Resources from "./pages/Resources";
import Awareness from "./pages/Awareness";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Fake News */}
        <Route path="/fake-news" element={<FakeNews />} />

        {/* Digital Literacy */}
        <Route
          path="/digital-literacy"
          element={<DigitalLiteracy />}
        />

        {/* Verify News */}
        <Route
          path="/verify-news"
          element={<VerifyNews />}
        />

        {/* Verification Guide */}
        <Route
          path="/verification-guide"
          element={<VerificationGuide />}
        />

        {/* Spot Fake */}
        <Route
          path="/spot-fake"
          element={<SpotFake />}
        />

        {/* Quiz */}
        <Route
          path="/quiz"
          element={<Quiz />}
        />

        {/* Resources */}
        <Route
          path="/resources"
          element={<Resources />}
        />

        {/* Awareness */}
        <Route
          path="/awareness"
          element={<Awareness />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Register */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* Admin */}
        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;