import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";

function VerificationGuide() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <>
      <Navbar />

      <div className="container mt-5 mb-5">

        {/* ================= PAGE TITLE ================= */}

        <h1 className="text-center text-primary mb-4">
          🛡️ {language === "te"
            ? "డిజిటల్ ధృవీకరణ మార్గదర్శిని"
            : "Digital Verification Guide"}
        </h1>

        <p className="lead text-center">
          {language === "te"
            ? "ఆన్‌లైన్‌లో కనిపించే సమాచారం, సందేశాలు, వెబ్‌సైట్‌లు, లింకులు మరియు చిత్రాలను నమ్మే ముందు వాటిని ఎలా ధృవీకరించాలో తెలుసుకోండి."
            : "Learn how to verify online information, messages, websites, links, images and digital content before trusting or sharing them."}
        </p>

        <hr />

        {/* ================= INTRODUCTION ================= */}

        <div className="card shadow p-4 mt-4">
          <h3>
            🔎{" "}
            {language === "te"
              ? "డిజిటల్ ధృవీకరణ అంటే ఏమిటి?"
              : "What is Digital Verification?"}
          </h3>

          <p className="mt-3">
            {language === "te"
              ? "డిజిటల్ ధృవీకరణ అంటే ఆన్‌లైన్‌లో మనకు కనిపించే సమాచారాన్ని నమ్మే ముందు దాని నిజానిజాలను పరిశీలించడం. ఇది తప్పుడు సమాచారం, మోసాలు మరియు ఆన్‌లైన్ ప్రమాదాల నుండి మనలను రక్షించడంలో సహాయపడుతుంది."
              : "Digital verification means checking whether online information is trustworthy before believing or sharing it. It helps protect us from misinformation, scams and online risks."}
          </p>
        </div>


        {/* ================= VERIFY BEFORE YOU TRUST ================= */}

        <div className="card shadow p-4 mt-4">
          <h3>
            🧠{" "}
            {language === "te"
              ? "నమ్మే ముందు ఆలోచించండి"
              : "Think Before You Trust"}
          </h3>

          <p className="mt-3">
            {language === "te"
              ? "ఏదైనా సమాచారం నిజమని వెంటనే నమ్మకుండా ఈ ప్రశ్నలను మీరే అడగండి:"
              : "Before believing something online, ask yourself these questions:"}
          </p>

          <ul className="mt-3">
            <li>
              {language === "te"
                ? "ఈ సమాచారాన్ని ఎవరు పోస్ట్ చేశారు?"
                : "Who posted or published this information?"}
            </li>

            <li>
              {language === "te"
                ? "దీనికి నమ్మదగిన ఆధారం ఉందా?"
                : "Is there reliable evidence supporting it?"}
            </li>

            <li>
              {language === "te"
                ? "ఇతర నమ్మదగిన వనరులు ఇదే విషయాన్ని చెబుతున్నాయా?"
                : "Do other trustworthy sources report the same information?"}
            </li>

            <li>
              {language === "te"
                ? "ఇది చాలా సంచలనాత్మకంగా లేదా అత్యవసరంగా అనిపిస్తుందా?"
                : "Does it sound unusually shocking, emotional or urgent?"}
            </li>

            <li>
              {language === "te"
                ? "దీన్ని షేర్ చేయడానికి ముందు నేను ధృవీకరించానా?"
                : "Have I verified it before sharing it?"}
            </li>
          </ul>
        </div>


        {/* ================= WEBSITE VERIFICATION ================= */}

        <div className="card shadow p-4 mt-4">
          <h3>
            🌐{" "}
            {language === "te"
              ? "వెబ్‌సైట్‌ను ఎలా ధృవీకరించాలి?"
              : "How to Verify a Website"}
          </h3>

          <ol className="mt-3">

            <li className="mb-3">
              <strong>
                {language === "te"
                  ? "వెబ్‌సైట్ చిరునామాను చూడండి"
                  : "Check the website address"}
              </strong>
              <br />
              {language === "te"
                ? "వెబ్‌సైట్ URLలో తప్పులు, వింత అక్షరాలు లేదా అనుమానాస్పద డొమైన్ ఉందా చూడండి."
                : "Look carefully at the URL for spelling mistakes, unusual characters or suspicious domains."}
            </li>

            <li className="mb-3">
              <strong>
                {language === "te"
                  ? "HTTPS ఉందో చూడండి"
                  : "Check for HTTPS"}
              </strong>
              <br />
              {language === "te"
                ? "HTTPS ఉండటం కనెక్షన్ భద్రతకు సహాయపడుతుంది, కానీ వెబ్‌సైట్ తప్పకుండా నిజమైనదని అర్థం కాదు."
                : "HTTPS helps secure the connection, but it does not automatically mean the website itself is trustworthy."}
            </li>

            <li className="mb-3">
              <strong>
                {language === "te"
                  ? "About లేదా Contact పేజీ చూడండి"
                  : "Check About or Contact information"}
              </strong>
              <br />
              {language === "te"
                ? "వెబ్‌సైట్ వెనుక ఉన్న సంస్థ లేదా వ్యక్తి గురించి సమాచారం ఉందో చూడండి."
                : "Look for information about the organization or person behind the website."}
            </li>

            <li>
              <strong>
                {language === "te"
                  ? "సందేహాస్పదమైన ఆఫర్లను నమ్మకండి"
                  : "Be careful with unbelievable offers"}
              </strong>
              <br />
              {language === "te"
                ? "చాలా తక్కువ ధరలు, ఉచిత బహుమతులు లేదా భారీ బహుమతుల వాగ్దానాలను జాగ్రత్తగా పరిశీలించండి."
                : "Be careful with extremely cheap offers, free gifts or promises of huge rewards."}
            </li>

          </ol>
        </div>


        {/* ================= MESSAGE VERIFICATION ================= */}

        <div className="card shadow p-4 mt-4">
          <h3>
            💬{" "}
            {language === "te"
              ? "WhatsApp మరియు సోషల్ మీడియా సందేశాలను ధృవీకరించడం"
              : "Verify WhatsApp & Social Media Messages"}
          </h3>

          <p className="mt-3">
            {language === "te"
              ? "ఫార్వర్డ్ చేసిన సందేశాన్ని వెంటనే నమ్మకండి లేదా షేర్ చేయకండి."
              : "Do not immediately believe or forward a message simply because someone sent it to you."}
          </p>

          <ul>

            <li>
              {language === "te"
                ? "సందేశం పంపిన వ్యక్తిని అడగండి: ఈ సమాచారానికి ఆధారం ఏమిటి?"
                : "Ask the sender where the information came from."}
            </li>

            <li>
              {language === "te"
                ? "సందేశంలో ఉన్న లింక్‌ను తెరవడానికి ముందు పరిశీలించండి."
                : "Check links carefully before opening them."}
            </li>

            <li>
              {language === "te"
                ? "OTP, PIN, పాస్‌వర్డ్ లేదా బ్యాంకింగ్ వివరాలను ఎప్పుడూ షేర్ చేయకండి."
                : "Never share OTPs, PINs, passwords or banking details."}
            </li>

            <li>
              {language === "te"
                ? "అత్యవసరంగా డబ్బు పంపమని అడిగితే మరొక మార్గంలో వ్యక్తిని సంప్రదించండి."
                : "If someone urgently asks for money, contact them through another trusted method."}
            </li>

          </ul>
        </div>


        {/* ================= IMAGE VERIFICATION ================= */}

        <div className="card shadow p-4 mt-4">
          <h3>
            🖼️{" "}
            {language === "te"
              ? "చిత్రాలను ధృవీకరించడం"
              : "How to Verify Images"}
          </h3>

          <p className="mt-3">
            {language === "te"
              ? "చిత్రం కనిపించింది కాబట్టి అది నిజమైనదని భావించకండి. పాత చిత్రాలను కొత్త సంఘటనలతో కలిపి షేర్ చేయవచ్చు."
              : "Do not assume an image is genuine just because it looks convincing. Old images can be reused with completely different claims."}
          </p>

          <ul>

            <li>
              {language === "te"
                ? "చిత్రానికి సంబంధించిన అసలు మూలాన్ని కనుగొనడానికి ప్రయత్నించండి."
                : "Try to identify the original source of the image."}
            </li>

            <li>
              {language === "te"
                ? "చిత్రం ఎప్పుడు తీసుకున్నారో పరిశీలించండి."
                : "Check when and where the image was originally taken."}
            </li>

            <li>
              {language === "te"
                ? "చిత్రంలో అసాధారణమైన ఎడిటింగ్ లేదా మార్పులు ఉన్నాయా చూడండి."
                : "Look for unusual editing, cropping or visual inconsistencies."}
            </li>

            <li>
              {language === "te"
                ? "చిత్రాన్ని సందర్భం లేకుండా షేర్ చేయకండి."
                : "Do not share an image without understanding its context."}
            </li>

          </ul>
        </div>


        {/* ================= AI CONTENT ================= */}

        <div className="card shadow p-4 mt-4">
          <h3>
            🤖{" "}
            {language === "te"
              ? "AI ద్వారా సృష్టించబడిన కంటెంట్ పట్ల జాగ్రత్త"
              : "Be Careful With AI-Generated Content"}
          </h3>

          <p className="mt-3">
            {language === "te"
              ? "ఇప్పుడు AI ద్వారా నకిలీ చిత్రాలు, వీడియోలు, ఆడియోలు మరియు టెక్స్ట్‌లను సృష్టించడం సాధ్యమవుతుంది. అందువల్ల డిజిటల్ కంటెంట్‌ను విమర్శనాత్మకంగా పరిశీలించడం చాలా ముఖ్యం."
              : "AI can now create realistic images, videos, audio and text. Therefore, it is important to critically evaluate digital content instead of trusting appearances alone."}
          </p>

          <ul>

            <li>
              {language === "te"
                ? "అసాధారణమైన ముఖ కదలికలు లేదా శబ్దాలను గమనించండి."
                : "Look for unusual facial movements or audio."}
            </li>

            <li>
              {language === "te"
                ? "కంటెంట్‌కు నమ్మదగిన మూలం ఉందా చూడండి."
                : "Check whether the content has a trustworthy source."}
            </li>

            <li>
              {language === "te"
                ? "ఒక్క వీడియో లేదా చిత్రాన్ని మాత్రమే ఆధారంగా చేసుకుని నిర్ణయం తీసుకోకండి."
                : "Do not make important decisions based on a single image or video."}
            </li>

          </ul>
        </div>


        {/* ================= ONLINE SCAM CHECK ================= */}

        <div className="card shadow p-4 mt-4">
          <h3>
            🚨{" "}
            {language === "te"
              ? "ఆన్‌లైన్ స్కామ్‌ను గుర్తించండి"
              : "Spot an Online Scam"}
          </h3>

          <div className="table-responsive">

            <table className="table table-bordered table-hover mt-3">

              <thead className="table-danger">

                <tr>
                  <th>
                    {language === "te"
                      ? "స్కామ్ సంకేతం"
                      : "Warning Sign"}
                  </th>

                  <th>
                    {language === "te"
                      ? "ఏం చేయాలి?"
                      : "What Should You Do?"}
                  </th>
                </tr>

              </thead>

              <tbody>

                <tr>
                  <td>
                    {language === "te"
                      ? "అత్యవసరంగా డబ్బు పంపమని అడగడం"
                      : "Urgent request for money"}
                  </td>

                  <td>
                    {language === "te"
                      ? "ఆగి, వ్యక్తిని మరో మార్గంలో ధృవీకరించండి."
                      : "Stop and verify the person through another trusted method."}
                  </td>
                </tr>

                <tr>
                  <td>
                    {language === "te"
                      ? "OTP అడగడం"
                      : "Request for OTP"}
                  </td>

                  <td>
                    {language === "te"
                      ? "OTPని ఎవరికీ ఇవ్వకండి."
                      : "Never share your OTP."}
                  </td>
                </tr>

                <tr>
                  <td>
                    {language === "te"
                      ? "అనుమానాస్పద లింక్"
                      : "Suspicious link"}
                  </td>

                  <td>
                    {language === "te"
                      ? "లింక్‌ను తెరవకుండా తొలగించండి లేదా ధృవీకరించండి."
                      : "Do not open it until you verify it."}
                  </td>
                </tr>

                <tr>
                  <td>
                    {language === "te"
                      ? "అవాస్తవ బహుమతి లేదా ఉద్యోగ ఆఫర్"
                      : "Unbelievable prize or job offer"}
                  </td>

                  <td>
                    {language === "te"
                      ? "అధికారిక మూలం ద్వారా ఆఫర్‌ను ధృవీకరించండి."
                      : "Verify the offer through the official source."}
                  </td>
                </tr>

              </tbody>

            </table>

          </div>
        </div>


        {/* ================= DIGITAL LITERACY CONNECTION ================= */}

        <div className="card shadow p-4 mt-4 border-primary">

          <h3 className="text-primary">
            💻{" "}
            {language === "te"
              ? "డిజిటల్ లిటరసీతో సంబంధం"
              : "How This Connects With Digital Literacy"}
          </h3>

          <p className="mt-3">
            {language === "te"
              ? "డిజిటల్ లిటరసీ అంటే కేవలం ఇంటర్నెట్ ఉపయోగించడం మాత్రమే కాదు. ఆన్‌లైన్ సమాచారాన్ని అర్థం చేసుకోవడం, పరిశీలించడం, సురక్షితంగా వ్యవహరించడం మరియు బాధ్యతగా షేర్ చేయడం కూడా డిజిటల్ లిటరసీలో భాగమే."
              : "Digital literacy is not only about using the internet. It also means understanding online information, evaluating it carefully, staying safe and sharing information responsibly."}
          </p>

          <div className="row text-center mt-4">

            <div className="col-md-3 mb-3">
              <div className="p-3 bg-light rounded">
                <h4>🔍</h4>
                <strong>
                  {language === "te"
                    ? "పరిశీలించండి"
                    : "Check"}
                </strong>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="p-3 bg-light rounded">
                <h4>🧠</h4>
                <strong>
                  {language === "te"
                    ? "ఆలోచించండి"
                    : "Think"}
                </strong>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="p-3 bg-light rounded">
                <h4>🛡️</h4>
                <strong>
                  {language === "te"
                    ? "రక్షించుకోండి"
                    : "Protect"}
                </strong>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="p-3 bg-light rounded">
                <h4>📢</h4>
                <strong>
                  {language === "te"
                    ? "బాధ్యతగా షేర్ చేయండి"
                    : "Share Responsibly"}
                </strong>
              </div>
            </div>

          </div>

        </div>


        {/* ================= QUICK CHECKLIST ================= */}

        <div className="card shadow p-4 mt-4">

          <h3>
            ✅{" "}
            {language === "te"
              ? "షేర్ చేసే ముందు 5 సెకన్ల చెక్"
              : "5-Second Check Before You Share"}
          </h3>

          <ol className="mt-3">

            <li>
              {language === "te"
                ? "ఆగండి — వెంటనే షేర్ చేయకండి."
                : "STOP — Don't share immediately."}
            </li>

            <li>
              {language === "te"
                ? "మూలాన్ని చూడండి."
                : "CHECK the source."}
            </li>

            <li>
              {language === "te"
                ? "ఆధారం ఉందా చూడండి."
                : "LOOK for evidence."}
            </li>

            <li>
              {language === "te"
                ? "ఇతర నమ్మదగిన వనరులతో పోల్చండి."
                : "COMPARE with trustworthy sources."}
            </li>

            <li>
              {language === "te"
                ? "నిజమని నిర్ధారించిన తర్వాత మాత్రమే షేర్ చేయండి."
                : "SHARE only when you are confident it is trustworthy."}
            </li>

          </ol>

        </div>


        {/* ================= FINAL MESSAGE ================= */}

        <div className="alert alert-success mt-4 mb-5">

          <h4>
            💡{" "}
            {language === "te"
              ? "గుర్తుంచుకోండి"
              : "Remember"}
          </h4>

          <p className="mb-0 fs-5">
            <strong>
              {language === "te"
                ? "ఆన్‌లైన్‌లో కనిపించిన ప్రతిదీ నిజం కాదు. ఆలోచించండి, పరిశీలించండి, ధృవీకరించండి — తర్వాతే నమ్మండి లేదా షేర్ చేయండి."
                : "Not everything you see online is true. Think, check and verify before you trust or share."}
            </strong>
          </p>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default VerificationGuide;