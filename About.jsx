import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";

function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <Navbar />

      <div className="container mt-5 mb-5">

        {/* Page Heading */}
        <h1 className="text-center text-primary mb-4">
          {t.aboutPageTitle}
        </h1>

        <p className="lead text-center">
          {t.aboutPageIntro}
        </p>

        <hr />

        {/* About Project */}
        <div className="card shadow p-4 mt-4">

          <h3>🌐 {t.aboutProjectTitle}</h3>

          <p>
            {t.aboutProjectText}
          </p>

        </div>


        {/* Our Mission */}
        <div className="card shadow p-4 mt-4">

          <h3>🎯 {t.missionTitle}</h3>

          <p>
            {t.missionText}
          </p>

        </div>


        {/* What We Provide */}
        <div className="card shadow p-4 mt-4">

          <h3>📚 {t.whatWeProvideTitle}</h3>

          <ul>

            <li>{t.provide1}</li>

            <li>{t.provide2}</li>

            <li>{t.provide3}</li>

            <li>{t.provide4}</li>

            <li>{t.provide5}</li>

          </ul>

        </div>


        {/* Who Can Use */}
        <div className="card shadow p-4 mt-4">

          <h3>👥 {t.whoCanUseTitle}</h3>

          <p>
            {t.whoCanUseText}
          </p>

          <div className="row mt-3">

            {/* Students */}
            <div className="col-md-4 mb-3">

              <div className="card bg-light p-3 h-100 text-center">

                <h4>👨‍🎓</h4>

                <strong>
                  {t.students}
                </strong>

                <p className="mb-0 mt-2">
                  {t.studentsText}
                </p>

              </div>

            </div>


            {/* Families */}
            <div className="col-md-4 mb-3">

              <div className="card bg-light p-3 h-100 text-center">

                <h4>👨‍👩‍👧‍👦</h4>

                <strong>
                  {t.families}
                </strong>

                <p className="mb-0 mt-2">
                  {t.familiesText}
                </p>

              </div>

            </div>


            {/* Community */}
            <div className="col-md-4 mb-3">

              <div className="card bg-light p-3 h-100 text-center">

                <h4>🌾</h4>

                <strong>
                  {t.community}
                </strong>

                <p className="mb-0 mt-2">
                  {t.communityText}
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* Why It Matters */}
        <div className="card shadow p-4 mt-4">

          <h3>💡 {t.whyProjectTitle}</h3>

          <p>
            {t.whyProjectText}
          </p>

        </div>


        {/* Golden Rule */}
        <div className="alert alert-success mt-4">

          <h4>
            ✅ {t.goldenRuleTitle}
          </h4>

          <p className="mb-0">

            <strong>
              {t.goldenRuleText}
            </strong>

          </p>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default About;