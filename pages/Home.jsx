import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";

function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="container mt-5">
        <div className="row align-items-center">

          <div className="col-md-6">

            <h1 className="display-4 fw-bold">
              {t.heroTitle}
            </h1>

            <p className="lead mt-4">
              {t.heroDescription}
            </p>

            <div className="mt-4">

              <a
                href="#features"
                className="btn btn-primary btn-lg me-3"
              >
                {t.startLearning}
              </a>

              <a
                href="/quiz"
                className="btn btn-outline-primary btn-lg"
              >
                {t.takeQuiz}
              </a>

            </div>

          </div>

          <div className="col-md-6 text-center">

            <i
              className="bi bi-shield-check"
              style={{
                fontSize: "220px",
                color: "#0d6efd"
              }}
            ></i>

            <h4 className="mt-3 text-primary">
              {t.staySafe}
            </h4>

          </div>

        </div>
      </div>


      {/* Features Section */}
      <div
        className="container mt-5"
        id="features"
      >

        <h2 className="text-center mb-5">
          {t.ourFeatures}
        </h2>

        <div className="row">

          {/* Fake News */}
          <div className="col-md-3 mb-4">

            <div className="card shadow text-center p-4 h-100">

              <i
                className="bi bi-newspaper text-primary"
                style={{ fontSize: "60px" }}
              ></i>

              <h4 className="mt-3">
                {t.feature1Title}
              </h4>

              <p>
                {t.feature1Desc}
              </p>

            </div>

          </div>


          {/* Digital Literacy */}
          <div className="col-md-3 mb-4">

            <div className="card shadow text-center p-4 h-100">

              <i
                className="bi bi-laptop text-success"
                style={{ fontSize: "60px" }}
              ></i>

              <h4 className="mt-3">
                {t.feature2Title}
              </h4>

              <p>
                {t.feature2Desc}
              </p>

            </div>

          </div>


          {/* Verification */}
          <div className="col-md-3 mb-4">

            <div className="card shadow text-center p-4 h-100">

              <i
                className="bi bi-search text-danger"
                style={{ fontSize: "60px" }}
              ></i>

              <h4 className="mt-3">
                {t.feature3Title}
              </h4>

              <p>
                {t.feature3Desc}
              </p>

            </div>

          </div>


          {/* Quiz */}
          <div className="col-md-3 mb-4">

            <div className="card shadow text-center p-4 h-100">

              <i
                className="bi bi-patch-question text-warning"
                style={{ fontSize: "60px" }}
              ></i>

              <h4 className="mt-3">
                {t.feature4Title}
              </h4>

              <p>
                {t.feature4Desc}
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* Why This Project Matters */}
      <div className="container mt-5">

        <h2 className="text-center mb-5">
          {t.whyTitle}
        </h2>

        <div className="row">

          {/* Card 1 */}
          <div className="col-md-3 mb-4">

            <div className="card text-center shadow p-3 h-100">

              <h1>🌍</h1>

              <h5>
                {t.why1Title}
              </h5>

              <p>
                {t.why1Desc}
              </p>

            </div>

          </div>


          {/* Card 2 */}
          <div className="col-md-3 mb-4">

            <div className="card text-center shadow p-3 h-100">

              <h1>📱</h1>

              <h5>
                {t.why2Title}
              </h5>

              <p>
                {t.why2Desc}
              </p>

            </div>

          </div>


          {/* Card 3 */}
          <div className="col-md-3 mb-4">

            <div className="card text-center shadow p-3 h-100">

              <h1>✅</h1>

              <h5>
                {t.why3Title}
              </h5>

              <p>
                {t.why3Desc}
              </p>

            </div>

          </div>


          {/* Card 4 */}
          <div className="col-md-3 mb-4">

            <div className="card text-center shadow p-3 h-100">

              <h1>🤝</h1>

              <h5>
                {t.why4Title}
              </h5>

              <p>
                {t.why4Desc}
              </p>

            </div>

          </div>

        </div>

      </div>


      <Footer />

    </>
  );
}

export default Home;