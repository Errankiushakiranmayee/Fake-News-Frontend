import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";

function VerifyNews() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <>
      <Navbar />

      <div className="container mt-5 mb-5">

        {/* PAGE TITLE */}
        <h1 className="text-center text-success mb-4">
          🔍 {t.verifyNewsPageTitle}
        </h1>

        <p className="lead text-center">
          {t.verifyNewsIntro}
        </p>

        <hr />

        {/* INTRODUCTION */}
        <div className="card shadow p-4 mt-4">
          <h3>🔍 {t.howVerifyNews}</h3>

          <p className="mt-3">
            {t.verifyNewsText}
          </p>

          <div className="alert alert-warning mb-0">
            <strong>
              {language === "te" ? "గుర్తుంచుకోండి:" : "Remember:"}
            </strong>{" "}
            {t.rememberWarning}
          </div>
        </div>

        {/* FACT CHECKING WEBSITES */}
        <div className="card shadow p-4 mt-4">
          <h3>🌐 {t.trustedFactChecking}</h3>

          <p className="mt-3">
            {t.factCheckingIntro}
          </p>

          <div className="list-group mt-3">

            <a
              href="https://www.altnews.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="list-group-item list-group-item-action"
            >
              <strong>Alt News</strong>
              <br />
              <small>{t.altNewsDesc}</small>
            </a>

            <a
              href="https://www.boomlive.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="list-group-item list-group-item-action"
            >
              <strong>BOOM</strong>
              <br />
              <small>{t.boomDesc}</small>
            </a>

            <a
              href="https://factly.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="list-group-item list-group-item-action"
            >
              <strong>FACTLY</strong>
              <br />
              <small>{t.factlyDesc}</small>
            </a>

            <a
              href="https://www.pib.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="list-group-item list-group-item-action"
            >
              <strong>PIB Fact Check</strong>
              <br />
              <small>{t.pibDesc}</small>
            </a>

          </div>
        </div>

        {/* OFFICIAL SOURCES */}
        <div className="card shadow p-4 mt-4">
          <h3>🏛️ {t.officialSources}</h3>

          <p>
            {t.officialSourcesText}
          </p>

          <div className="list-group mt-3">

            <a
              href="https://www.india.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="list-group-item list-group-item-action"
            >
              <strong>India.gov.in</strong>
              <br />
              <small>{t.indiaGovDesc}</small>
            </a>

            <a
              href="https://www.mygov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="list-group-item list-group-item-action"
            >
              <strong>MyGov</strong>
              <br />
              <small>{t.myGovDesc}</small>
            </a>

            <a
              href="https://www.uidai.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="list-group-item list-group-item-action"
            >
              <strong>UIDAI</strong>
              <br />
              <small>{t.uidaiDesc}</small>
            </a>

          </div>
        </div>

        {/* SIMPLE VERIFICATION METHOD */}
        <div className="card shadow p-4 mt-4">
          <h3>📱 {t.howVerifyClaim}</h3>

          <ol className="mt-3">

            <li className="mb-3">
              <strong>{t.copyClaim}</strong>
              <br />
              {t.copyClaimExample}
            </li>

            <li className="mb-3">
              <strong>{t.openTrustedWebsite}</strong>
              <br />
              {t.useListedWebsite}
            </li>

            <li className="mb-3">
              <strong>{t.searchClaim}</strong>
              <br />
              {t.searchClaimText}
            </li>

            <li className="mb-3">
              <strong>{t.compareInformation}</strong>
              <br />
              {t.compareInformationText}
            </li>

            <li className="mb-3">
              <strong>{t.checkOriginalSource}</strong>
              <br />
              {t.checkOriginalSourceText}
            </li>

            <li>
              <strong>{t.onlyThenShare}</strong>
              <br />
              {t.onlyThenShareText}
            </li>

          </ol>
        </div>

        {/* WARNING SIGNS */}
        <div className="card shadow p-4 mt-4">
          <h3>🚨 {t.warningSigns}</h3>

          <ul className="mt-3">
            <li>{t.shockingHeadlines}</li>
            <li>{t.freeMoney}</li>
            <li>{t.forwardImmediately}</li>
            <li>{t.suspiciousLinks}</li>
            <li>{t.noAuthor}</li>
            <li>{t.oldNews}</li>
            <li>{t.misleadingMedia}</li>
            <li>{t.spellingMistakes}</li>
          </ul>
        </div>

        {/* GOLDEN RULE */}
        <div className="alert alert-success mt-4">
          <h4>✅ {t.goldenRule}</h4>

          <p className="mb-0">
            <strong>{t.stopCheckVerifyShare}</strong>
          </p>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default VerifyNews;