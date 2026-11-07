
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";

function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          {t.title}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                {t.home}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {t.about}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/fake-news">
                {t.fakeNews}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/digital-literacy">
                {t.digitalLiteracy}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/verify-news">
                {t.verifyNews}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/spot-fake">
                {t.spotFake}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/quiz">
                {t.quiz}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/awareness">
                {t.awareness}
              </Link>
            </li>

            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <button
                type="button"
                className={`btn btn-sm ${
                  language === "en"
                    ? "btn-light text-primary"
                    : "btn-outline-light"
                }`}
                onClick={() => setLanguage("en")}
              >
                {t.english}
              </button>
            </li>

            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <button
                type="button"
                className={`btn btn-sm ${
                  language === "te"
                    ? "btn-light text-primary"
                    : "btn-outline-light"
                }`}
                onClick={() => setLanguage("te")}
              >
                {t.telugu}
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
