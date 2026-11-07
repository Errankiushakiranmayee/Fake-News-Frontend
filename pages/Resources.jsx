
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

function Resources() {
  const { language } = useLanguage();

  const te = language === "te";

  return (
    <>
      <Navbar />

      <div className="container mt-5 mb-5">

        {/* ================= PAGE TITLE ================= */}
        <div className="text-center mb-5">

          <h1 className="text-primary fw-bold">
            📚 {te ? "అభ్యాస వనరులు" : "Learning Resources"}
          </h1>

          <p className="lead mt-3">
            {te
              ? "డిజిటల్ ప్రపంచంలో సురక్షితంగా, బాధ్యతాయుతంగా మరియు సమాచారంతో ఉండటానికి ఉపయోగకరమైన జ్ఞానం మరియు చిట్కాలను నేర్చుకోండి."
              : "Useful knowledge and practical tips for staying safe, responsible, and informed in the digital world."}
          </p>

        </div>

        <hr />

        {/* ================= DIGITAL SAFETY ================= */}
        <div className="card shadow p-4 mt-4">

          <h3 className="text-primary">
            🛡️ {te ? "డిజిటల్ భద్రత" : "Digital Safety"}
          </h3>

          <p className="mt-3">
            {te
              ? "మీ ఖాతాలు, పరికరాలు, వ్యక్తిగత సమాచారం మరియు ఆన్‌లైన్ గుర్తింపును రక్షించడం డిజిటల్ భద్రత."
              : "Digital safety means protecting your accounts, devices, personal information, and online identity."}
          </p>

          <ul>
            <li>
              {te
                ? "బలమైన మరియు ప్రత్యేకమైన పాస్‌వర్డ్‌లను ఉపయోగించండి."
                : "Use strong and unique passwords."}
            </li>

            <li>
              {te
                ? "సాధ్యమైన చోట రెండు దశల ధృవీకరణను ప్రారంభించండి."
                : "Enable two-factor authentication whenever possible."}
            </li>

            <li>
              {te
                ? "మీ ఆపరేటింగ్ సిస్టమ్ మరియు యాప్‌లను ఎప్పటికప్పుడు అప్‌డేట్ చేయండి."
                : "Keep your operating system and applications updated."}
            </li>

            <li>
              {te
                ? "పాస్‌వర్డ్‌లు, PINలు లేదా OTPలను ఎవరితోనూ పంచుకోవద్దు."
                : "Never share passwords, PINs, or OTPs."}
            </li>

            <li>
              {te
                ? "తెలియని వనరుల నుండి ఫైళ్లను డౌన్‌లోడ్ చేయవద్దు."
                : "Avoid downloading files from unknown sources."}
            </li>
          </ul>

        </div>

        {/* ================= DIGITAL LITERACY ================= */}
        <div className="card shadow p-4 mt-4">

          <h3 className="text-success">
            💻 {te ? "డిజిటల్ అక్షరాస్యత" : "Digital Literacy"}
          </h3>

          <p className="mt-3">
            {te
              ? "డిజిటల్ అక్షరాస్యత సాంకేతికతను సురక్షితంగా, సమర్థవంతంగా మరియు బాధ్యతాయుతంగా ఉపయోగించడంలో సహాయపడుతుంది."
              : "Digital literacy helps people understand and use digital technology safely, effectively, and responsibly."}
          </p>

          <ul>
            <li>
              {te
                ? "నమ్మదగిన సమాచారాన్ని ఎలా గుర్తించాలో నేర్చుకోండి."
                : "Learn how to identify trustworthy information."}
            </li>

            <li>
              {te
                ? "మీ వ్యక్తిగత మరియు ప్రైవేట్ సమాచారాన్ని రక్షించండి."
                : "Protect your personal and private information."}
            </li>

            <li>
              {te
                ? "గోప్యత మరియు భద్రతా సెట్టింగ్‌లను అర్థం చేసుకోండి."
                : "Understand privacy and security settings."}
            </li>

            <li>
              {te
                ? "అనుమానాస్పద వెబ్‌సైట్‌లు మరియు సందేశాలను గుర్తించండి."
                : "Recognize suspicious websites and messages."}
            </li>

            <li>
              {te
                ? "ఆన్‌లైన్‌లో కంటెంట్‌ను పంచుకునే ముందు ఆలోచించండి."
                : "Think carefully before sharing content online."}
            </li>
          </ul>

        </div>

        {/* ================= INFORMATION LITERACY ================= */}
        <div className="card shadow p-4 mt-4">

          <h3 className="text-info">
            🔎 {te ? "సమాచార అక్షరాస్యత" : "Information Literacy"}
          </h3>

          <p className="mt-3">
            {te
              ? "ఆన్‌లైన్ సమాచారాన్ని నమ్మే ముందు లేదా పంచుకునే ముందు అది నమ్మదగినదో కాదో నిర్ణయించుకోవడానికి సమాచార అక్షరాస్యత సహాయపడుతుంది."
              : "Information literacy helps you decide whether online information is reliable before you believe or share it."}
          </p>

          <ol>
            <li>
              {te
                ? "అసలు సమాచార మూలాన్ని తనిఖీ చేయండి."
                : "Check the original source."}
            </li>

            <li>
              {te
                ? "రచయిత లేదా సంస్థ పేరు కోసం చూడండి."
                : "Look for the author or organization."}
            </li>

            <li>
              {te
                ? "సమాచారం ప్రచురించబడిన తేదీని తనిఖీ చేయండి."
                : "Check the publication date."}
            </li>

            <li>
              {te
                ? "ఇతర నమ్మదగిన వనరులతో సమాచారాన్ని పోల్చండి."
                : "Compare the information with other reliable sources."}
            </li>

            <li>
              {te
                ? "వాదనకు మద్దతు ఇచ్చే ఆధారాల కోసం చూడండి."
                : "Look for evidence supporting the claim."}
            </li>

            <li>
              {te
                ? "ఏదైనా ట్రెండ్ అవుతోందని మాత్రమే దాన్ని వెంటనే పంచుకోవద్దు."
                : "Do not share information just because it is trending."}
            </li>
          </ol>

        </div>

        {/* ================= PHISHING ================= */}
        <div className="card shadow p-4 mt-4">

          <h3 className="text-warning">
            🎣 {te ? "ఫిషింగ్ అవగాహన" : "Phishing Awareness"}
          </h3>

          <p className="mt-3">
            {te
              ? "సున్నితమైన సమాచారాన్ని పొందడానికి మోసగాళ్లు ప్రజలను తప్పుదారి పట్టించే ప్రయత్నాన్ని ఫిషింగ్ అంటారు."
              : "Phishing is a common online threat where attackers try to trick people into revealing sensitive information."}
          </p>

          <ul>
            <li>
              {te
                ? "పంపిన వ్యక్తి వివరాలను జాగ్రత్తగా తనిఖీ చేయండి."
                : "Check the sender's email address or phone number."}
            </li>

            <li>
              {te
                ? "అనుమానాస్పద లింక్‌లపై క్లిక్ చేయవద్దు."
                : "Do not click suspicious links."}
            </li>

            <li>
              {te
                ? "OTPలు లేదా పాస్‌వర్డ్‌లను ఎప్పుడూ పంచుకోవద్దు."
                : "Never share OTPs or passwords."}
            </li>

            <li>
              {te
                ? "భయపెట్టే లేదా అత్యవసరంగా స్పందించమని చెప్పే సందేశాల పట్ల జాగ్రత్తగా ఉండండి."
                : "Be careful with messages creating fear or urgency."}
            </li>

            <li>
              {te
                ? "ముఖ్యమైన అభ్యర్థనలను అధికారిక మార్గాల ద్వారా ధృవీకరించండి."
                : "Verify important requests through official channels."}
            </li>
          </ul>

        </div>

        {/* ================= SOCIAL MEDIA ================= */}
        <div className="card shadow p-4 mt-4">

          <h3 className="text-primary">
            📱 {te ? "బాధ్యతాయుతమైన సోషల్ మీడియా" : "Responsible Social Media"}
          </h3>

          <p className="mt-3">
            {te
              ? "బాధ్యతాయుతమైన సోషల్ మీడియా వినియోగం మరింత సురక్షితమైన మరియు గౌరవప్రదమైన ఆన్‌లైన్ సమాజాన్ని నిర్మించడంలో సహాయపడుతుంది."
              : "Responsible social-media use helps create a safer and more respectful online community."}
          </p>

          <ul>
            <li>
              {te ? "పోస్ట్ చేసే ముందు ఆలోచించండి." : "Think before posting or sharing."}
            </li>

            <li>
              {te ? "ఇతరుల గోప్యతను గౌరవించండి." : "Respect other people's privacy."}
            </li>

            <li>
              {te
                ? "పుకార్లు లేదా ధృవీకరించని సమాచారాన్ని వ్యాప్తి చేయవద్దు."
                : "Do not spread rumors or unverified information."}
            </li>

            <li>
              {te
                ? "హానికరమైన లేదా అనుమానాస్పద కంటెంట్‌ను రిపోర్ట్ చేయండి."
                : "Report harmful or suspicious content."}
            </li>

            <li>
              {te
                ? "మీ గోప్యతా సెట్టింగ్‌లను క్రమం తప్పకుండా తనిఖీ చేయండి."
                : "Review your privacy settings regularly."}
            </li>
          </ul>

        </div>

        {/* ================= ONLINE SCAMS ================= */}
        <div className="card shadow p-4 mt-4">

          <h3 className="text-danger">
            💳 {te ? "ఆన్‌లైన్ మోసాల నుండి భద్రత" : "Online Scam Safety"}
          </h3>

          <p className="mt-3">
            {te
              ? "ఆన్‌లైన్ మోసాలు నకిలీ ఆఫర్లు, బహుమతులు, ఉద్యోగ అవకాశాలు లేదా చెల్లింపు అభ్యర్థనల రూపంలో కనిపించవచ్చు."
              : "Online scams may appear as fake offers, prizes, job opportunities, impersonation messages, or payment requests."}
          </p>

          <ul>
            <li>
              {te
                ? "తెలియని వ్యక్తులకు డబ్బు పంపవద్దు."
                : "Do not send money to unknown people."}
            </li>

            <li>
              {te
                ? "బ్యాంకింగ్ వివరాలను ఎవరితోనూ పంచుకోవద్దు."
                : "Never share banking credentials."}
            </li>

            <li>
              {te
                ? "నమ్మశక్యం కాని బహుమతులు లేదా ఆఫర్లను నమ్మవద్దు."
                : "Do not trust unbelievable prizes or offers."}
            </li>

            <li>
              {te
                ? "డబ్బు పంపే ముందు చెల్లింపు అభ్యర్థనలను ధృవీకరించండి."
                : "Verify payment requests before transferring money."}
            </li>

            <li>
              {te
                ? "ముఖ్యమైన సేవల కోసం అధికారిక వెబ్‌సైట్‌లు మరియు యాప్‌లను ఉపయోగించండి."
                : "Use official websites and applications for important services."}
            </li>
          </ul>

        </div>

        {/* ================= PASSWORD SAFETY ================= */}
        <div className="card shadow p-4 mt-4">

          <h3>
            🔐 {te ? "పాస్‌వర్డ్ భద్రత" : "Password Safety"}
          </h3>

          <p className="mt-3">
            {te
              ? "మీ ఆన్‌లైన్ ఖాతాలను రక్షించడానికి బలమైన పాస్‌వర్డ్ ఒక సులభమైన మరియు ముఖ్యమైన మార్గం."
              : "A strong password is one of the simplest ways to protect your online accounts."}
          </p>

          <ul>
            <li>
              {te
                ? "ముఖ్యమైన ఖాతాలకు వేర్వేరు పాస్‌వర్డ్‌లను ఉపయోగించండి."
                : "Use different passwords for important accounts."}
            </li>

            <li>
              {te
                ? "అక్షరాలు, సంఖ్యలు మరియు ప్రత్యేక చిహ్నాలను కలిపి ఉపయోగించండి."
                : "Use a combination of letters, numbers, and symbols."}
            </li>

            <li>
              {te
                ? "సులభంగా ఊహించగల వ్యక్తిగత సమాచారాన్ని ఉపయోగించవద్దు."
                : "Avoid using easily guessed personal information."}
            </li>

            <li>
              {te
                ? "మీ పాస్‌వర్డ్‌ను ఇతరులతో పంచుకోవద్దు."
                : "Never share your password with others."}
            </li>

            <li>
              {te
                ? "నమ్మదగిన పాస్‌వర్డ్ మేనేజర్‌ను ఉపయోగించడాన్ని పరిగణించండి."
                : "Consider using a trusted password manager."}
            </li>
          </ul>

        </div>

        {/* ================= QUICK CHECKLIST ================= */}
        <div className="card shadow p-4 mt-4">

          <h3>
            ✅ {te ? "త్వరిత డిజిటల్ భద్రతా చెక్‌లిస్ట్" : "Quick Digital Safety Checklist"}
          </h3>

          <div className="table-responsive">

            <table className="table table-bordered table-hover mt-3">

              <thead className="table-primary">

                <tr>
                  <th>
                    {te ? "భద్రతా పద్ధతి" : "Safety Practice"}
                  </th>

                  <th>
                    {te ? "ఏం చేయాలి" : "What You Should Do"}
                  </th>
                </tr>

              </thead>

              <tbody>

                <tr>
                  <td>🔐 {te ? "పాస్‌వర్డ్‌లు" : "Passwords"}</td>
                  <td>
                    {te
                      ? "బలమైన మరియు ప్రత్యేకమైన పాస్‌వర్డ్‌లను ఉపయోగించండి."
                      : "Use strong and unique passwords."}
                  </td>
                </tr>

                <tr>
                  <td>🔑 {te ? "రెండు దశల ధృవీకరణ" : "Two-Factor Authentication"}</td>
                  <td>
                    {te
                      ? "అదనపు భద్రతా పొరను ప్రారంభించండి."
                      : "Enable an additional security layer."}
                  </td>
                </tr>

                <tr>
                  <td>🔗 {te ? "తెలియని లింక్‌లు" : "Unknown Links"}</td>
                  <td>
                    {te
                      ? "తనిఖీ చేయకుండా క్లిక్ చేయవద్దు."
                      : "Do not click before checking them."}
                  </td>
                </tr>

                <tr>
                  <td>🛡️ {te ? "వ్యక్తిగత సమాచారం" : "Personal Information"}</td>
                  <td>
                    {te
                      ? "సున్నితమైన సమాచారాన్ని గోప్యంగా ఉంచండి."
                      : "Keep sensitive information private."}
                  </td>
                </tr>

                <tr>
                  <td>🔎 {te ? "ఆన్‌లైన్ సమాచారం" : "Online Information"}</td>
                  <td>
                    {te
                      ? "పంచుకునే ముందు సమాచారాన్ని ధృవీకరించండి."
                      : "Verify information before sharing."}
                  </td>
                </tr>

                <tr>
                  <td>📱 {te ? "సోషల్ మీడియా" : "Social Media"}</td>
                  <td>
                    {te
                      ? "పోస్ట్ చేయడానికి లేదా ఫార్వర్డ్ చేయడానికి ముందు ఆలోచించండి."
                      : "Think before posting or forwarding."}
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

        {/* ================= GOLDEN RULE ================= */}
        <div className="alert alert-success text-center mt-4 mb-5">

          <h4>
            💡 {te ? "డిజిటల్ భద్రతా ముఖ్య నియమం" : "Digital Safety Golden Rule"}
          </h4>

          <p className="fs-4 mb-2">
            <strong>
              {te
                ? "ఆగండి • ఆలోచించండి • ధృవీకరించండి • ఆ తర్వాత పంచుకోండి"
                : "Stop • Think • Verify • Then Share"}
            </strong>
          </p>

          <p className="mb-0">
            {te
              ? "కొన్ని సెకన్ల పాటు సమాచారాన్ని ధృవీకరించడం ద్వారా తప్పుడు సమాచారం, మోసాలు మరియు ఆన్‌లైన్ ప్రమాదాలను నివారించవచ్చు."
              : "A few seconds of verification can help prevent misinformation, scams, and online harm."}
          </p>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Resources;

