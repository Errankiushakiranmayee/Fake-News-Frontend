import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";

function DigitalLiteracy() {
  const { language } = useLanguage();

  const t = translations[language] || translations.en;

  return (
    <>
      <Navbar />

      <div className="container mt-5 mb-5">

        {/* ================= PAGE TITLE ================= */}

        <h1 className="text-center text-primary mb-4">
          💻 {t.digitalLiteracyPageTitle}
        </h1>

        <p className="lead text-center">
          {t.digitalLiteracyIntro}
        </p>

        <hr />


        {/* ================= WHAT IS DIGITAL LITERACY ================= */}

        <div className="card shadow p-4 mt-4">

          <h3>
            💻 {t.whatIsDigitalLiteracy}
          </h3>

          <p className="mt-3">
            {t.digitalLiteracyText}
          </p>

        </div>


        {/* ================= IMPORTANCE ================= */}

        <div className="card shadow p-4 mt-4">

          <h3>
            🌟 {t.importanceDigitalLiteracy}
          </h3>

          <ul className="mt-3">

            <li>{t.identifyFakeNewsImportance}</li>

            <li>{t.protectPersonalInformation}</li>

            <li>{t.improveOnlineLearning}</li>

            <li>{t.preventCyberFraud}</li>

            <li>{t.responsibleSocialMedia}</li>

            <li>{t.buildDigitalConfidence}</li>

          </ul>

        </div>


        {/* ================= SAFE INTERNET ================= */}

        <div className="card shadow p-4 mt-4">

          <h3>
            🛡️ {t.safeInternetPractices}
          </h3>

          <ol className="mt-3">

            <li>{t.strongUniquePasswords}</li>

            <li>{t.enableTwoFactor}</li>

            <li>{t.neverShareOTP}</li>

            <li>{t.avoidUnknownLinks}</li>

            <li>{t.keepSoftwareUpdated}</li>

            <li>{t.trustedSources}</li>

            <li>{t.thinkBeforePosting}</li>

          </ol>

        </div>


        {/* ================= STRONG PASSWORD ================= */}

        <div className="card shadow p-4 mt-4">

          <h3>
            🔑 {t.strongPasswordTips}
          </h3>

          <ul className="mt-3">

            <li>{t.passwordCharacters}</li>

            <li>{t.passwordUpperLower}</li>

            <li>{t.passwordNumbersSymbols}</li>

            <li>{t.passwordAvoidPersonal}</li>

            <li>{t.passwordDifferent}</li>

          </ul>

        </div>


        {/* ================= PHISHING ================= */}

        <div className="card shadow p-4 mt-4">

          <h3>
            🎣 {t.phishingScams}
          </h3>

          <p className="mt-3">
            {t.phishingText}
          </p>

          <ul>

            <li>{t.phishingTip1}</li>

            <li>{t.phishingTip2}</li>

            <li>{t.phishingTip3}</li>

            <li>{t.phishingTip4}</li>

          </ul>

        </div>


        {/* ================= SOCIAL MEDIA ================= */}

        <div className="card shadow p-4 mt-4">

          <h3>
            📱 {t.responsibleSocialMediaTitle}
          </h3>

          <ul className="mt-3">

            <li>{t.respectOthersOnline}</li>

            <li>{t.doNotSpreadRumors}</li>

            <li>{t.verifyBeforeSharing}</li>

            <li>{t.protectPrivacy}</li>

            <li>{t.reportHarmfulContent}</li>

            <li>{t.thinkBeforeCommenting}</li>

          </ul>

        </div>


        {/* ================= DIGITAL CITIZENSHIP ================= */}

        <div className="card shadow p-4 mt-4">

          <h3>
            🌍 {t.digitalCitizenship}
          </h3>

          <ul className="mt-3">

            <li>{t.useTechnologyResponsibly}</li>

            <li>{t.respectCopyright}</li>

            <li>{t.communicatePolitely}</li>

            <li>{t.helpOthersStaySafe}</li>

            <li>{t.promotePositiveBehavior}</li>

          </ul>

        </div>


        {/* ================= SAFETY CHECKLIST ================= */}

        <div className="card shadow p-4 mt-4">

          <h3>
            ✅ {t.digitalSafetyChecklist}
          </h3>

          <div className="table-responsive">

            <table className="table table-bordered table-hover mt-3">

              <thead className="table-primary">

                <tr>

                  <th>
                    {t.practice}
                  </th>

                  <th>
                    {t.status}
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr>

                  <td>
                    {t.useStrongPasswords}
                  </td>

                  <td>✔</td>

                </tr>

                <tr>

                  <td>
                    {t.enable2FA}
                  </td>

                  <td>✔</td>

                </tr>

                <tr>

                  <td>
                    {t.verifyNewsBeforeSharing}
                  </td>

                  <td>✔</td>

                </tr>

                <tr>

                  <td>
                    {t.protectInformation}
                  </td>

                  <td>✔</td>

                </tr>

                <tr>

                  <td>
                    {t.avoidUnknownLinksText}
                  </td>

                  <td>✔</td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>


        {/* ================= REMEMBER ================= */}

        <div className="alert alert-info mt-4">

          <h4>
            💡 {t.remember}
          </h4>

          <p className="mb-0 fs-5">

            <strong>
              {t.digitalLiteracyReminder}
            </strong>

          </p>

        </div>

      </div>

      <Footer />

    </>
  );
}

export default DigitalLiteracy;