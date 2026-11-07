import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";

function SpotFake() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const questions = [
    {
      type: "whatsapp",
      title: "📲 WhatsApp Forward",
      question:
        "Government is giving ₹50,000 to every citizen. Click this unknown link immediately to claim it.",
      answer: "Fake",
      reason:
        "No official announcement. Unknown links asking for money or personal details are usually scams.",
      tip:
        "Always verify government schemes on official government websites."
    },

    {
      type: "government",
      title: "🏛 Government Notice",
      question:
        "The District Collector announced tomorrow as a holiday due to heavy rainfall. The same notice is available on the official district website.",
      answer: "Real",
      reason:
        "The information is published on the official district website.",
      tip:
        "Always verify government announcements using official websites."
    },

    {
      type: "health",
      title: "💊 Health Message",
      question:
        "Drinking hot water every 15 minutes cures every disease. Forward this message to everyone.",
      answer: "Fake",
      reason:
        "There is no scientific evidence supporting this claim.",
      tip:
        "Health information should come from trusted medical organizations."
    },

    {
      type: "news",
      title: "📰 News Website",
      question:
        "Election results published on the Election Commission of India's official website.",
      answer: "Real",
      reason:
        "The information comes directly from the official Election Commission.",
      tip:
        "Always trust official sources for election results."
    },

    {
      type: "offer",
      title: "🎁 Online Offer",
      question:
        "Congratulations! You won a free iPhone. Enter your bank account and OTP to receive it.",
      answer: "Fake",
      reason:
        "Legitimate companies never ask for OTPs or banking details to claim prizes.",
      tip:
        "Never share OTPs, passwords or bank details."
    }
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [finished, setFinished] = useState(false);

  const getQuestionData = () => {
    const q = questions[current];

    if (language === "te") {
      const teluguQuestions = [
        {
          question:
            "ప్రతి పౌరుడికి ప్రభుత్వం ₹50,000 ఇస్తోంది. పొందడానికి వెంటనే ఈ తెలియని లింక్‌పై క్లిక్ చేయండి.",
          reason:
            "అధికారిక ప్రకటన లేదు. డబ్బు లేదా వ్యక్తిగత వివరాలను అడిగే తెలియని లింకులు సాధారణంగా మోసాలు.",
          tip:
            "ప్రభుత్వ పథకాలను ఎల్లప్పుడూ అధికారిక ప్రభుత్వ వెబ్‌సైట్లలో ధృవీకరించండి."
        },

        {
          question:
            "భారీ వర్షాల కారణంగా రేపు సెలవు అని జిల్లా కలెక్టర్ ప్రకటించారు. అదే నోటీసు అధికారిక జిల్లా వెబ్‌సైట్‌లో కూడా ఉంది.",
          reason:
            "ఈ సమాచారం అధికారిక జిల్లా వెబ్‌సైట్‌లో ప్రచురించబడింది.",
          tip:
            "ప్రభుత్వ ప్రకటనలను ఎల్లప్పుడూ అధికారిక వెబ్‌సైట్ల ద్వారా ధృవీకరించండి."
        },

        {
          question:
            "ప్రతి 15 నిమిషాలకు వేడి నీరు తాగితే ప్రతి వ్యాధి నయమవుతుంది. ఈ మెసేజ్‌ను అందరికీ ఫార్వర్డ్ చేయండి.",
          reason:
            "ఈ క్లెయిమ్‌కు శాస్త్రీయ ఆధారాలు లేవు.",
          tip:
            "ఆరోగ్య సమాచారాన్ని నమ్మకమైన వైద్య సంస్థల ద్వారా మాత్రమే తెలుసుకోండి."
        },

        {
          question:
            "ఎన్నికల ఫలితాలు భారత ఎన్నికల సంఘం అధికారిక వెబ్‌సైట్‌లో ప్రచురించబడ్డాయి.",
          reason:
            "ఈ సమాచారం అధికారిక ఎన్నికల సంఘం నుండి నేరుగా వచ్చింది.",
          tip:
            "ఎన్నికల ఫలితాల కోసం ఎల్లప్పుడూ అధికారిక వనరులను నమ్మండి."
        },

        {
          question:
            "అభినందనలు! మీరు ఉచిత iPhone గెలుచుకున్నారు. పొందడానికి మీ బ్యాంక్ ఖాతా వివరాలు మరియు OTP నమోదు చేయండి.",
          reason:
            "బహుమతులు పొందడానికి నిజమైన సంస్థలు OTPలు లేదా బ్యాంకింగ్ వివరాలను అడగవు.",
          tip:
            "OTPలు, పాస్‌వర్డ్‌లు లేదా బ్యాంక్ వివరాలను ఎప్పుడూ పంచుకోవద్దు."
        }
      ];

      return {
        ...q,
        ...teluguQuestions[current]
      };
    }

    return q;
  };

  const getTypeTitle = (type) => {
    if (language === "te") {
      const titles = {
        whatsapp: "📲 WhatsApp ఫార్వర్డ్",
        government: "🏛 ప్రభుత్వ నోటీసు",
        health: "💊 ఆరోగ్య సందేశం",
        news: "📰 వార్తా వెబ్‌సైట్",
        offer: "🎁 ఆన్‌లైన్ బహుమతి ఆఫర్"
      };

      return titles[type];
    }

    const titles = {
      whatsapp: "📲 WhatsApp Forward",
      government: "🏛 Government Notice",
      health: "💊 Health Message",
      news: "📰 News Website",
      offer: "🎁 Online Prize Offer"
    };

    return titles[type];
  };

  const checkAnswer = (choice) => {
    const question = getQuestionData();

    let newScore = score;

    if (choice === question.answer) {
      newScore++;

      setScore(newScore);

      if (language === "te") {
        setMessage(
          `✅ సరైన సమాధానం!

ఎందుకు?
${question.reason}

💡 సూచన:
${question.tip}`
        );
      } else {
        setMessage(
          `✅ Correct!

Why?
${question.reason}

💡 Tip:
${question.tip}`
        );
      }
    } else {
      if (language === "te") {
        const correctAnswer =
          question.answer === "Real" ? "నిజం" : "నకిలీ";

        setMessage(
          `❌ తప్పు!

సరైన సమాధానం: ${correctAnswer}

ఎందుకు?
${question.reason}

💡 సూచన:
${question.tip}`
        );
      } else {
        setMessage(
          `❌ Incorrect!

Correct Answer: ${question.answer}

Why?
${question.reason}

💡 Tip:
${question.tip}`
        );
      }
    }

    setTimeout(() => {
      if (current === questions.length - 1) {
        setFinished(true);
      } else {
        setCurrent(current + 1);
        setMessage("");
      }
    }, 3500);
  };

  const question = getQuestionData();

  return (
    <>
      <Navbar />

      <div className="container mt-5 mb-5">

        {/* TITLE */}
        <h1 className="text-center text-danger">
          🕵️ {language === "te"
            ? "నకిలీని గుర్తించే ఛాలెంజ్"
            : "Spot the Fake Challenge"}
        </h1>

        <p className="lead text-center">
          {language === "te"
            ? "ప్రతి ఉదాహరణను జాగ్రత్తగా చదివి అది నిజమా లేదా నకిలీదా నిర్ణయించండి."
            : (
              <>
                Read each example carefully and decide whether it is{" "}
                <strong>Real</strong> or <strong>Fake</strong>.
              </>
            )}
        </p>

        <hr />

        {!finished ? (
          <>
            {/* QUESTION CARD */}
            <div className="card shadow p-4">

              <h5 className="text-primary">
                {language === "te"
                  ? `ప్రశ్న ${current + 1} / ${questions.length}`
                  : `Question ${current + 1} of ${questions.length}`}
              </h5>

              {/* PROGRESS */}
              <div className="progress mt-3 mb-4">

                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  style={{
                    width: `${((current + 1) / questions.length) * 100}%`
                  }}
                >
                  {Math.round(
                    ((current + 1) / questions.length) * 100
                  )}
                  %
                </div>

              </div>


              {/* WHATSAPP */}
              {question.type === "whatsapp" && (
                <div className="card border-success shadow">

                  <div className="card-header bg-success text-white">
                    {getTypeTitle("whatsapp")}
                  </div>

                  <div className="card-body">

                    <p className="fw-bold">
                      {question.question}
                    </p>

                    <small className="text-muted">
                      {language === "te"
                        ? "చాలా మందికి ఫార్వర్డ్ చేయబడింది"
                        : "Forwarded many times"}
                    </small>

                  </div>

                </div>
              )}


              {/* GOVERNMENT */}
              {question.type === "government" && (
                <div className="card border-primary shadow">

                  <div className="card-header bg-primary text-white">
                    {getTypeTitle("government")}
                  </div>

                  <div className="card-body">

                    <p>
                      {question.question}
                    </p>

                  </div>

                </div>
              )}


              {/* HEALTH */}
              {question.type === "health" && (
                <div className="card border-warning shadow">

                  <div className="card-header bg-warning">
                    {getTypeTitle("health")}
                  </div>

                  <div className="card-body">

                    <p>
                      {question.question}
                    </p>

                  </div>

                </div>
              )}


              {/* NEWS */}
              {question.type === "news" && (
                <div className="card border-info shadow">

                  <div className="card-header bg-info text-white">
                    {getTypeTitle("news")}
                  </div>

                  <div className="card-body">

                    <h5>
                      {language === "te"
                        ? "బ్రేకింగ్ న్యూస్"
                        : "Breaking News"}
                    </h5>

                    <p>
                      {question.question}
                    </p>

                  </div>

                </div>
              )}


              {/* OFFER */}
              {question.type === "offer" && (
                <div className="card border-danger shadow">

                  <div className="card-header bg-danger text-white">
                    {getTypeTitle("offer")}
                  </div>

                  <div className="card-body">

                    <h4 className="text-danger">
                      {language === "te"
                        ? "అభినందనలు!"
                        : "Congratulations!"}
                    </h4>

                    <p>
                      {question.question}
                    </p>

                  </div>

                </div>
              )}


              {/* BUTTONS */}
              <div className="mt-4">

                <button
                  className="btn btn-success btn-lg me-3"
                  onClick={() => checkAnswer("Real")}
                >
                  ✅ {language === "te" ? "నిజం" : "Real"}
                </button>

                <button
                  className="btn btn-danger btn-lg"
                  onClick={() => checkAnswer("Fake")}
                >
                  ❌ {language === "te" ? "నకిలీ" : "Fake"}
                </button>

              </div>


              {/* ANSWER MESSAGE */}
              {message && (
                <div className="alert alert-info mt-4">

                  <pre
                    style={{
                      whiteSpace: "pre-wrap",
                      fontFamily: "inherit",
                      margin: 0
                    }}
                  >
                    {message}
                  </pre>

                </div>
              )}

            </div>


            {/* CLUES */}
            <div className="card shadow mt-4 p-4">

              <h3>
                🕵️{" "}
                {language === "te"
                  ? "నకిలీ వార్తలను గుర్తించే సూచనలు"
                  : "Clues to Spot Fake News"}
              </h3>

              <ul>

                <li>
                  ✅{" "}
                  {language === "te"
                    ? "మూలం అధికారికమైనదో లేదో తనిఖీ చేయండి."
                    : "Check whether the source is official."}
                </li>

                <li>
                  ✅{" "}
                  {language === "te"
                    ? "హెడ్‌లైన్ మాత్రమే కాకుండా పూర్తి వార్తను చదవండి."
                    : "Read the complete news, not only the headline."}
                </li>

                <li>
                  ✅{" "}
                  {language === "te"
                    ? "ప్రచురించిన తేదీని ధృవీకరించండి."
                    : "Verify the publication date."}
                </li>

                <li>
                  ✅{" "}
                  {language === "te"
                    ? "నమ్మకమైన వార్తా వెబ్‌సైట్లతో పోల్చండి."
                    : "Compare with trusted news websites."}
                </li>

                <li>
                  ✅{" "}
                  {language === "te"
                    ? "అనుమానాస్పద లింక్‌లపై క్లిక్ చేయవద్దు."
                    : "Never click suspicious links."}
                </li>

                <li>
                  ✅{" "}
                  {language === "te"
                    ? "ధృవీకరించకుండా వార్తలను షేర్ చేయవద్దు."
                    : "Never share news without verifying it."}
                </li>

              </ul>

            </div>

          </>
        ) : (

          /* ================= RESULTS ================= */

          <div className="card shadow text-center p-5">

            <h1>
              🎉{" "}
              {language === "te"
                ? "ఛాలెంజ్ పూర్తయింది!"
                : "Challenge Completed!"}
            </h1>

            <h2 className="text-success mt-4">
              {language === "te"
                ? `మీ స్కోర్: ${score} / ${questions.length}`
                : `Your Score: ${score} / ${questions.length}`}
            </h2>


            {/* STARS */}
            <div className="mt-3">

              {score === 5 && (
                <h2 className="text-warning">
                  ⭐⭐⭐⭐⭐
                </h2>
              )}

              {score === 4 && (
                <h2 className="text-warning">
                  ⭐⭐⭐⭐☆
                </h2>
              )}

              {score === 3 && (
                <h2 className="text-warning">
                  ⭐⭐⭐☆☆
                </h2>
              )}

              {score < 3 && (
                <h2 className="text-warning">
                  ⭐⭐☆☆☆
                </h2>
              )}

            </div>


            {/* RESULT MESSAGE */}
            <div className="alert alert-success mt-4">

              {score === 5 && (
                <>
                  <h4>
                    {language === "te"
                      ? "అద్భుతం!"
                      : "Excellent!"}
                  </h4>

                  <p>
                    {language === "te"
                      ? "నకిలీ వార్తలను గుర్తించడంలో మీరు చాలా నైపుణ్యం కలిగి ఉన్నారు. డిజిటల్ అవగాహనను మరింత వ్యాప్తి చేయండి!"
                      : "You are highly skilled at identifying fake news. Keep spreading digital awareness!"}
                  </p>
                </>
              )}


              {score === 4 && (
                <>
                  <h4>
                    {language === "te"
                      ? "చాలా బాగుంది!"
                      : "Very Good!"}
                  </h4>

                  <p>
                    {language === "te"
                      ? "చాలా బాగా చేశారు! ఇతరులతో సమాచారాన్ని పంచుకునే ముందు దాన్ని ధృవీకరిస్తూ ఉండండి."
                      : "Great job! Continue verifying information before sharing it with others."}
                  </p>
                </>
              )}


              {score === 3 && (
                <>
                  <h4>
                    {language === "te"
                      ? "బాగుంది!"
                      : "Good!"}
                  </h4>

                  <p>
                    {language === "te"
                      ? "మీరు సరైన దారిలో ఉన్నారు. నకిలీ వార్తలను గుర్తించడంలో నిపుణులు కావడానికి మరింత సాధన చేయండి."
                      : "You're on the right track. Practice more to become an expert in spotting fake news."}
                  </p>
                </>
              )}


              {score < 3 && (
                <>
                  <h4>
                    {language === "te"
                      ? "నేర్చుకుంటూ ఉండండి!"
                      : "Keep Learning!"}
                  </h4>

                  <p>
                    {language === "te"
                      ? "సాధనతో డిజిటల్ అక్షరాస్యత మెరుగుపడుతుంది. నమ్మకమైన వనరులను ఉపయోగించి సమాచారాన్ని ఎల్లప్పుడూ ధృవీకరించండి."
                      : "Digital literacy improves with practice. Always verify information using trusted sources."}
                  </p>
                </>
              )}

            </div>


            {/* REMEMBER */}
            <div className="card border-primary mt-4">

              <div className="card-body">

                <h4>
                  🌟{" "}
                  {language === "te"
                    ? "గుర్తుంచుకోండి"
                    : "Remember"}
                </h4>

                <h5 className="text-primary">

                  {language === "te"
                    ? (
                      <>
                        షేర్ చేసే ముందు ఆలోచించండి.
                        <br />
                        నమ్మే ముందు ధృవీకరించండి.
                      </>
                    )
                    : (
                      <>
                        Think Before You Share.
                        <br />
                        Verify Before You Believe.
                      </>
                    )}

                </h5>

              </div>

            </div>


            {/* PLAY AGAIN */}
            <button
              className="btn btn-primary btn-lg mt-4"
              onClick={() => {
                setCurrent(0);
                setScore(0);
                setFinished(false);
                setMessage("");
              }}
            >
              🔄{" "}
              {language === "te"
                ? "మళ్లీ ఆడండి"
                : "Play Again"}
            </button>

          </div>

        )}

      </div>

      <Footer />

    </>
  );
}

export default SpotFake;