
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

function Awareness() {
  const { language } = useLanguage();
  const isTelugu = language === "te";

  return (
    <>
      <Navbar />

      <div className="container mt-5 mb-5">

        {/* ================= PAGE TITLE ================= */}

        <div className="text-center mb-4">

          <h1 className="text-success fw-bold">
            🌍{" "}
            {isTelugu
              ? "డిజిటల్ అవగాహన"
              : "Digital Awareness"}
          </h1>

          <p className="lead mt-3">
            {isTelugu
              ? "రోజువారీ జీవితంలో ఎదురయ్యే డిజిటల్ ప్రమాదాలను గుర్తించి, సురక్షితంగా స్పందించడం నేర్చుకోండి."
              : "Learn how to recognize common digital risks and respond safely in everyday situations."}
          </p>

        </div>

        <hr />

        {/* ================= REAL LIFE SITUATIONS ================= */}

        <h2 className="text-center mt-5 mb-4">
          💡{" "}
          {isTelugu
            ? "రోజువారీ డిజిటల్ పరిస్థితులు"
            : "Everyday Digital Situations"}
        </h2>

        <div className="row">

          {/* SCENARIO 1 */}

          <div className="col-md-6 mb-4">

            <div className="card shadow h-100">

              <div className="card-body">

                <h4 className="text-danger">
                  📱{" "}
                  {isTelugu
                    ? "నకిలీ బహుమతి సందేశం"
                    : "Fake Prize Message"}
                </h4>

                <p className="mt-3">
                  {isTelugu
                    ? "మీకు ₹50,000 బహుమతి గెలిచారని, బహుమతి పొందడానికి ఒక లింక్‌పై క్లిక్ చేయమని సందేశం వచ్చింది."
                    : "You receive a message saying that you have won ₹50,000 and asking you to click a link to claim the prize."}
                </p>

                <div className="alert alert-danger">

                  <strong>
                    {isTelugu ? "ఏం చేయాలి?" : "What should you do?"}
                  </strong>

                  <p className="mb-0 mt-2">
                    {isTelugu
                      ? "లింక్‌పై క్లిక్ చేయవద్దు. వ్యక్తిగత లేదా బ్యాంకింగ్ వివరాలను ఇవ్వవద్దు. సందేశాన్ని తొలగించండి."
                      : "Do not click the link. Do not provide personal or banking information. Delete the message."}
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* SCENARIO 2 */}

          <div className="col-md-6 mb-4">

            <div className="card shadow h-100">

              <div className="card-body">

                <h4 className="text-warning">
                  🔐{" "}
                  {isTelugu
                    ? "OTP అడిగే వ్యక్తి"
                    : "Someone Asking for Your OTP"}
                </h4>

                <p className="mt-3">
                  {isTelugu
                    ? "ఒక వ్యక్తి బ్యాంక్ లేదా కంపెనీ ఉద్యోగిగా చెప్పుకుని మీకు వచ్చిన OTP చెప్పమని అడుగుతున్నాడు."
                    : "Someone claims to be from a bank or company and asks you to tell them the OTP sent to your phone."}
                </p>

                <div className="alert alert-warning">

                  <strong>
                    {isTelugu ? "ఏం చేయాలి?" : "What should you do?"}
                  </strong>

                  <p className="mb-0 mt-2">
                    {isTelugu
                      ? "OTPను ఎవరితోనూ పంచుకోవద్దు. అవసరమైతే సంస్థ యొక్క అధికారిక నంబర్‌ను సంప్రదించండి."
                      : "Never share the OTP. Contact the organization through its official number if necessary."}
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* SCENARIO 3 */}

          <div className="col-md-6 mb-4">

            <div className="card shadow h-100">

              <div className="card-body">

                <h4 className="text-primary">
                  🔗{" "}
                  {isTelugu
                    ? "అనుమానాస్పద లింక్"
                    : "Suspicious Link"}
                </h4>

                <p className="mt-3">
                  {isTelugu
                    ? "మీకు తెలిసిన వ్యక్తి నుండి వచ్చినట్లు కనిపించే లింక్ ఒక సందేశంలో వచ్చింది."
                    : "You receive a message containing a link that appears to have been sent by someone you know."}
                </p>

                <div className="alert alert-info">

                  <strong>
                    {isTelugu ? "ఏం చేయాలి?" : "What should you do?"}
                  </strong>

                  <p className="mb-0 mt-2">
                    {isTelugu
                      ? "లింక్‌పై వెంటనే క్లిక్ చేయవద్దు. ఆ వ్యక్తిని వేరే మార్గంలో సంప్రదించి నిజంగా పంపించారా అని అడగండి."
                      : "Do not click immediately. Contact the person through another method and confirm whether they actually sent it."}
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* SCENARIO 4 */}

          <div className="col-md-6 mb-4">

            <div className="card shadow h-100">

              <div className="card-body">

                <h4 className="text-success">
                  💼{" "}
                  {isTelugu
                    ? "నకిలీ ఉద్యోగ ఆఫర్"
                    : "Fake Job Offer"}
                </h4>

                <p className="mt-3">
                  {isTelugu
                    ? "ఇంట్లో నుంచే పెద్ద జీతం వస్తుందని చెప్పి, ముందుగా రిజిస్ట్రేషన్ ఫీజు చెల్లించమని ఒక వ్యక్తి అడుగుతున్నాడు."
                    : "Someone offers you a high-paying work-from-home job but asks you to pay a registration fee first."}
                </p>

                <div className="alert alert-success">

                  <strong>
                    {isTelugu ? "ఏం చేయాలి?" : "What should you do?"}
                  </strong>

                  <p className="mb-0 mt-2">
                    {isTelugu
                      ? "డబ్బు చెల్లించే ముందు సంస్థను మరియు ఉద్యోగ అవకాశాన్ని ధృవీకరించండి."
                      : "Verify the organization and job opportunity before paying any money."}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ================= SOCIAL MEDIA ================= */}

        <div className="card shadow p-4 mt-4">

          <h3>
            📱{" "}
            {isTelugu
              ? "సోషల్ మీడియా అవగాహన"
              : "Social Media Awareness"}
          </h3>

          <p className="mt-3">
            {isTelugu
              ? "సోషల్ మీడియాలో ఏదైనా పోస్ట్ చేయడానికి లేదా షేర్ చేయడానికి ముందు దాని ప్రభావాన్ని ఆలోచించండి."
              : "Think about the impact of content before posting or sharing it on social media."}
          </p>

          <ul>

            <li>
              {isTelugu
                ? "వ్యక్తిగత సమాచారాన్ని పబ్లిక్‌గా పోస్ట్ చేయవద్దు."
                : "Do not publicly post sensitive personal information."}
            </li>

            <li>
              {isTelugu
                ? "తెలియని వ్యక్తులను సులభంగా నమ్మవద్దు."
                : "Do not easily trust unknown people online."}
            </li>

            <li>
              {isTelugu
                ? "సందేహాస్పద ఖాతాలను బ్లాక్ లేదా రిపోర్ట్ చేయండి."
                : "Block or report suspicious accounts."}
            </li>

            <li>
              {isTelugu
                ? "ఫోటోలు మరియు వీడియోలను షేర్ చేసే ముందు ఇతరుల అనుమతి తీసుకోండి."
                : "Ask permission before sharing other people's photos or videos."}
            </li>

          </ul>

        </div>


        {/* ================= FAMILY & COMMUNITY ================= */}

        <div className="card shadow p-4 mt-4">

          <h3>
            👨‍👩‍👧‍👦{" "}
            {isTelugu
              ? "కుటుంబం మరియు సమాజ డిజిటల్ భద్రత"
              : "Family & Community Digital Safety"}
          </h3>

          <p className="mt-3">
            {isTelugu
              ? "కుటుంబ సభ్యులు మరియు సమాజంలోని ఇతరులకు డిజిటల్ భద్రత గురించి అవగాహన కల్పించడం చాలా ముఖ్యం."
              : "Helping family members and the community understand digital safety is important."}
          </p>

          <ul>

            <li>
              {isTelugu
                ? "వృద్ధులకు OTPలు మరియు పాస్‌వర్డ్‌లను పంచుకోకూడదని వివరించండి."
                : "Remind elderly family members never to share OTPs or passwords."}
            </li>

            <li>
              {isTelugu
                ? "అనుమానాస్పద సందేశాలు వస్తే కలిసి తనిఖీ చేయండి."
                : "Check suspicious messages together."}
            </li>

            <li>
              {isTelugu
                ? "ఆన్‌లైన్ మోసాల గురించి కుటుంబ సభ్యులకు తెలియజేయండి."
                : "Inform family members about common online scams."}
            </li>

            <li>
              {isTelugu
                ? "నమ్మకమైన డిజిటల్ భద్రతా సమాచారాన్ని ఇతరులతో పంచుకోండి."
                : "Share reliable digital safety information with others."}
            </li>

          </ul>

        </div>


        {/* ================= BEFORE YOU CLICK ================= */}

        <div className="card shadow p-4 mt-4">

          <h3>
            🖱️{" "}
            {isTelugu
              ? "క్లిక్ చేసే ముందు 5 ప్రశ్నలు"
              : "5 Questions Before You Click"}
          </h3>

          <ol className="mt-3">

            <li>
              {isTelugu
                ? "ఈ సందేశాన్ని ఎవరు పంపారు?"
                : "Who sent this message?"}
            </li>

            <li>
              {isTelugu
                ? "ఈ లింక్ లేదా వెబ్‌సైట్ నిజమైనదేనా?"
                : "Is this link or website genuine?"}
            </li>

            <li>
              {isTelugu
                ? "ఇది నా వ్యక్తిగత సమాచారాన్ని ఎందుకు అడుగుతోంది?"
                : "Why is it asking for my personal information?"}
            </li>

            <li>
              {isTelugu
                ? "ఇది నన్ను వెంటనే చర్య తీసుకోమని ఒత్తిడి చేస్తుందా?"
                : "Is it pressuring me to act immediately?"}
            </li>

            <li>
              {isTelugu
                ? "నేను దీన్ని నమ్మకమైన వనరుతో ధృవీకరించానా?"
                : "Have I verified it using a trusted source?"}
            </li>

          </ol>

        </div>


        {/* ================================================= */}
        {/* ================= EMERGENCY HELP ================= */}
        {/* ================================================= */}

        <div className="card shadow p-4 mt-5 border-danger">

          <h2 className="text-danger text-center fw-bold">
            🚨{" "}
            {isTelugu
              ? "అత్యవసర సహాయం"
              : "Emergency Help"}
          </h2>

          <p className="text-center mt-3">
            {isTelugu
              ? "అత్యవసర పరిస్థితిలో సరైన సేవను సంప్రదించండి. ప్రాణాపాయం ఉంటే వెంటనే సహాయం కోరండి."
              : "In an emergency, contact the appropriate service. If there is immediate danger, seek help immediately."}
          </p>


          {/* EMERGENCY NUMBERS TABLE */}

          <div className="table-responsive mt-4">

            <table className="table table-bordered table-hover text-center">

              <thead className="table-danger">

                <tr>

                  <th>
                    {isTelugu ? "సేవ" : "Service"}
                  </th>

                  <th>
                    {isTelugu ? "నంబర్" : "Number"}
                  </th>

                  <th>
                    {isTelugu ? "ఎప్పుడు సంప్రదించాలి" : "When to Contact"}
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr>

                  <td>
                    🚨{" "}
                    {isTelugu
                      ? "జాతీయ అత్యవసర సేవ"
                      : "National Emergency"}
                  </td>

                  <td>
                    <a
                      href="tel:112"
                      className="btn btn-danger"
                    >
                      <strong>112</strong>
                    </a>
                  </td>

                  <td>
                    {isTelugu
                      ? "పోలీస్, అగ్నిమాపక, అంబులెన్స్ వంటి అత్యవసర పరిస్థితులు."
                      : "Police, fire, ambulance and other emergencies."}
                  </td>

                </tr>


                <tr>

                  <td>
                    🚓{" "}
                    {isTelugu
                      ? "పోలీస్"
                      : "Police"}
                  </td>

                  <td>
                    <a
                      href="tel:100"
                      className="btn btn-dark"
                    >
                      <strong>100</strong>
                    </a>
                  </td>

                  <td>
                    {isTelugu
                      ? "పోలీస్ సహాయం అవసరమైనప్పుడు."
                      : "When police assistance is required."}
                  </td>

                </tr>


                <tr>

                  <td>
                    🚑{" "}
                    {isTelugu
                      ? "అంబులెన్స్"
                      : "Ambulance"}
                  </td>

                  <td>
                    <a
                      href="tel:108"
                      className="btn btn-success"
                    >
                      <strong>108</strong>
                    </a>
                  </td>

                  <td>
                    {isTelugu
                      ? "తీవ్రమైన గాయం లేదా వైద్య అత్యవసర పరిస్థితి."
                      : "Serious injury or medical emergency."}
                  </td>

                </tr>


                <tr>

                  <td>
                    🔥{" "}
                    {isTelugu
                      ? "అగ్నిమాపక సేవ"
                      : "Fire Service"}
                  </td>

                  <td>
                    <a
                      href="tel:101"
                      className="btn btn-warning"
                    >
                      <strong>101</strong>
                    </a>
                  </td>

                  <td>
                    {isTelugu
                      ? "అగ్ని ప్రమాదం లేదా అగ్ని సంబంధిత అత్యవసర పరిస్థితి."
                      : "Fire or fire-related emergency."}
                  </td>

                </tr>


                <tr>

                  <td>
                    💻{" "}
                    {isTelugu
                      ? "సైబర్ క్రైమ్"
                      : "Cyber Crime"}
                  </td>

                  <td>
                    <a
                      href="tel:1930"
                      className="btn btn-primary"
                    >
                      <strong>1930</strong>
                    </a>
                  </td>

                  <td>
                    {isTelugu
                      ? "ఆన్‌లైన్ మోసం లేదా సైబర్ ఆర్థిక మోసం జరిగినప్పుడు."
                      : "For reporting online or cyber financial fraud."}
                  </td>

                </tr>

              </tbody>

            </table>

          </div>


          {/* CYBER FRAUD WARNING */}

          <div className="alert alert-warning mt-4">

            <h5>
              ⚠️{" "}
              {isTelugu
                ? "సైబర్ మోసం జరిగితే"
                : "If You Face Cyber Fraud"}
            </h5>

            <ol className="mb-0">

              <li>
                {isTelugu
                  ? "వెంటనే 1930కి కాల్ చేయండి."
                  : "Call 1930 immediately."}
              </li>

              <li>
                {isTelugu
                  ? "మీ బ్యాంక్ లేదా సంబంధిత ఆర్థిక సంస్థకు వెంటనే సమాచారం ఇవ్వండి."
                  : "Immediately inform your bank or relevant financial institution."}
              </li>

              <li>
                {isTelugu
                  ? "లావాదేవీ వివరాలు, సందేశాలు మరియు ఇతర ఆధారాలను భద్రపరచండి."
                  : "Preserve transaction details, messages and other evidence."}
              </li>

              <li>
                {isTelugu
                  ? "అనుమానాస్పద వ్యక్తులకు మరింత డబ్బు పంపవద్దు."
                  : "Do not send additional money to suspicious persons."}
              </li>

            </ol>

          </div>


          {/* EMERGENCY REMINDER */}

          <div className="alert alert-danger text-center mt-4 mb-0">

            <strong>
              {isTelugu
                ? "🚨 అత్యవసర పరిస్థితిలో ఆలస్యం చేయవద్దు. వెంటనే సరైన సహాయ సేవను సంప్రదించండి."
                : "🚨 Do not delay in an emergency. Contact the appropriate emergency service immediately."}
            </strong>

          </div>

        </div>


        {/* ================= GOLDEN RULE ================= */}

        <div className="alert alert-success text-center mt-4 mb-5">

          <h3>
            🛡️{" "}
            {isTelugu
              ? "ఆగండి • ఆలోచించండి • ధృవీకరించండి • సురక్షితంగా ఉండండి"
              : "Stop • Think • Verify • Stay Safe"}
          </h3>

          <p className="mb-0 mt-3">
            {isTelugu
              ? "డిజిటల్ ప్రపంచంలో చిన్న జాగ్రత్త పెద్ద ప్రమాదాన్ని నివారించగలదు."
              : "A small moment of caution can prevent a major problem in the digital world."}
          </p>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Awareness;

