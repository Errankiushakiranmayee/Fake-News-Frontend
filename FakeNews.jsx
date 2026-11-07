import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

function FakeNews() {
  const { language } = useLanguage();
  const isTelugu = language === "te";

  const [newsText, setNewsText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyzeNews = async () => {
    if (!newsText.trim()) {
      setError(
        isTelugu
          ? "దయచేసి వార్తను నమోదు చేయండి."
          : "Please enter a news article."
      );
      setResult(null);
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const hasTelugu = /[\u0C00-\u0C7F]/.test(newsText);
      const detectedLanguage = hasTelugu ? "te" : "en";

      console.log(
        "🌐 Frontend detected language:",
        detectedLanguage
      );

      const response = await fetch(
        "http://localhost:5000/api/detect-news",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            news: newsText,
            language: detectedLanguage,
          }),
        }
      );

      const data = await response.json();

      console.log("🤖 Backend response:", data);
      console.log("🔎 Prediction received:", data.prediction);

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Unable to analyze the news."
        );
      }

      setResult(data);

    } catch (err) {
      console.error("Detection error:", err);

      setError(
        isTelugu
          ? "వార్తను విశ్లేషించలేకపోయాము. సర్వర్ పనిచేస్తుందో లేదో తనిఖీ చేయండి."
          : "Unable to analyze the news. Please make sure the server is running."
      );

    } finally {
      setLoading(false);
    }
  };


  const clearDetector = () => {
    setNewsText("");
    setResult(null);
    setError("");
  };


  // ============================================================
  // RESULT COLORS
  // ============================================================

  const getBorderClass = () => {
    if (!result) return "";

    switch (result.prediction) {
      case "FAKE":
        return "border-danger";

      case "REAL":
        return "border-success";

      case "UNVERIFIED":
      default:
        return "border-warning";
    }
  };


  const getProgressClass = () => {
    if (!result) return "";

    switch (result.prediction) {
      case "FAKE":
        return "bg-danger";

      case "REAL":
        return "bg-success";

      case "UNVERIFIED":
      default:
        return "bg-warning";
    }
  };


  return (
    <>
      <Navbar />

      <div className="container mt-5 mb-5">

        {/* ======================================================
            MAIN DETECTOR
        ====================================================== */}

        <div className="card shadow-lg border-primary">

          <div className="card-body p-4">

            <h1 className="text-center text-primary mb-3">
              🤖{" "}
              {isTelugu
                ? "AI నకిలీ వార్తల గుర్తింపు"
                : "AI Fake News Detector"}
            </h1>

            <p className="text-center text-muted">
              {isTelugu
                ? "వార్తను నమోదు చేసి మా మెషిన్ లెర్నింగ్ మోడల్‌తో విశ్లేషించండి."
                : "Enter or paste a news article and analyze it using our machine-learning model."}
            </p>


            {/* ==================================================
                INPUT
            ================================================== */}

            <textarea
              className="form-control mt-4"
              rows="9"
              value={newsText}
              onChange={(e) => setNewsText(e.target.value)}
              placeholder={
                isTelugu
                  ? "వార్తను ఇక్కడ నమోదు చేయండి..."
                  : "Paste or type the news article here..."
              }
            />


            {/* ==================================================
                BUTTONS
            ================================================== */}

            <div className="text-center mt-4">

              <button
                className="btn btn-primary btn-lg me-2"
                onClick={analyzeNews}
                disabled={loading}
              >

                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    ></span>

                    {isTelugu
                      ? "విశ్లేషిస్తోంది..."
                      : "Analyzing..."}
                  </>
                ) : (
                  <>
                    🔍{" "}
                    {isTelugu
                      ? "వార్తను తనిఖీ చేయండి"
                      : "Check News"}
                  </>
                )}

              </button>


              <button
                className="btn btn-outline-secondary btn-lg"
                onClick={clearDetector}
                disabled={loading}
              >
                🗑️{" "}
                {isTelugu
                  ? "క్లియర్"
                  : "Clear"}
              </button>

            </div>


            {/* ==================================================
                ERROR
            ================================================== */}

            {error && (
              <div className="alert alert-warning mt-4 text-center">
                ⚠️ {error}
              </div>
            )}


            {/* ==================================================
                RESULT
            ================================================== */}

            {result && result.success && (

              <div
                className={`card mt-4 ${getBorderClass()}`}
              >

                <div className="card-body text-center p-4">


                  {/* ==================================================
                      FAKE
                  ================================================== */}

                  {result.prediction === "FAKE" && (

                    <>
                      <div style={{ fontSize: "65px" }}>
                        🔴
                      </div>

                      <h2 className="text-danger fw-bold">
                        {isTelugu
                          ? "నకిలీ వార్తగా గుర్తించబడింది"
                          : "Likely Fake News"}
                      </h2>

                      <p className="text-danger">
                        {isTelugu
                          ? "ఈ వార్త నకిలీ లేదా తప్పుదారి పట్టించే సమాచారం కావచ్చు."
                          : "This news may be fake or misleading."}
                      </p>
                    </>

                  )}


                  {/* ==================================================
                      REAL
                  ================================================== */}

                  {result.prediction === "REAL" && (

                    <>
                      <div style={{ fontSize: "65px" }}>
                        🟢
                      </div>

                      <h2 className="text-success fw-bold">
                        {isTelugu
                          ? "నిజమైన వార్తగా అంచనా వేయబడింది"
                          : "Likely Real News"}
                      </h2>

                      <p className="text-success">
                        {isTelugu
                          ? "మెషిన్ లెర్నింగ్ మోడల్ ఈ వార్తను నిజమైనదిగా అంచనా వేసింది."
                          : "The machine-learning model classified this news as likely real."}
                      </p>
                    </>

                  )}


                  {/* ==================================================
                      UNVERIFIED
                  ================================================== */}

                  {result.prediction === "UNVERIFIED" && (

                    <>
                      <div style={{ fontSize: "65px" }}>
                        🟡
                      </div>

                      <h2 className="text-warning fw-bold">
                        {isTelugu
                          ? "ధృవీకరించబడలేదు"
                          : "Unverified"}
                      </h2>

                      <p className="text-warning">
                        {isTelugu
                          ? "ఈ వార్తను నమ్మదగిన వనరులతో మరింతగా ధృవీకరించాలి."
                          : "There is not enough confidence to reliably classify this news."}
                      </p>
                    </>

                  )}


                  {/* ==================================================
                      UNKNOWN RESULT SAFETY
                  ================================================== */}

                  {result.prediction !== "FAKE" &&
                    result.prediction !== "REAL" &&
                    result.prediction !== "UNVERIFIED" && (

                    <>
                      <div style={{ fontSize: "65px" }}>
                        🟡
                      </div>

                      <h2 className="text-warning fw-bold">
                        {isTelugu
                          ? "ధృవీకరించబడలేదు"
                          : "Unverified"}
                      </h2>

                      <p className="text-warning">
                        {isTelugu
                          ? "ఫలితాన్ని ఖచ్చితంగా నిర్ధారించలేకపోయాము."
                          : "The system could not reliably determine the result."}
                      </p>
                    </>

                  )}


                  {/* ==================================================
                      CONFIDENCE
                  ================================================== */}

                  <h4 className="mt-4">

                    🎯{" "}

                    {isTelugu
                      ? "మోడల్ విశ్వాస స్థాయి"
                      : "Model Confidence"}

                    : {result.confidence}%

                  </h4>


                  <div
                    className="progress mt-3"
                    style={{ height: "28px" }}
                  >

                    <div
                      className={`progress-bar ${getProgressClass()}`}
                      style={{
                        width: `${result.confidence}%`,
                      }}
                    >
                      {result.confidence}%
                    </div>

                  </div>


                  {/* ==================================================
                      REASON
                  ================================================== */}

                 


                  {/* ==================================================
                      LANGUAGE
                  ================================================== */}

                  

                  {/* ==================================================
                      IMPORTANT NOTE
                  ================================================== */}

                  <div className="alert alert-warning mt-4 mb-0">

                    <strong>
                      ⚠️{" "}
                      {isTelugu
                        ? "ముఖ్యమైన గమనిక"
                        : "Important Note"}
                    </strong>

                    <p className="mb-0 mt-2">

                      {isTelugu
                        ? "ఇది మెషిన్ లెర్నింగ్ మోడల్ ఆధారంగా ఇచ్చిన అంచనా మాత్రమే. ముఖ్యమైన సమాచారాన్ని నమ్మే ముందు విశ్వసనీయమైన వనరులతో ధృవీకరించండి."
                        : "This is a machine-learning prediction, not a guarantee of truth. Always verify important information using trusted sources."}

                    </p>

                  </div>

                </div>

              </div>

            )}

          </div>

        </div>


        {/* ======================================================
            HOW TO CHECK
        ====================================================== */}

        <div className="card shadow mt-4">

          <div className="card-body p-4">

            <h2 className="text-center text-success mb-4">

              🔍{" "}

              {isTelugu
                ? "నకిలీ వార్తలను ఎలా తనిఖీ చేయాలి?"
                : "How to Check News"}

            </h2>


            <div className="row">

              <div className="col-md-6 mb-3">

                <div className="border rounded p-3 h-100">

                  <h5>
                    1️⃣{" "}
                    {isTelugu
                      ? "వార్తను నమోదు చేయండి"
                      : "Enter the News"}
                  </h5>

                  <p className="mb-0">
                    {isTelugu
                      ? "పై ఉన్న బాక్స్‌లో వార్త లేదా వార్తా కథనాన్ని కాపీ చేసి నమోదు చేయండి."
                      : "Copy and paste the news article or claim into the box above."}
                  </p>

                </div>

              </div>


              <div className="col-md-6 mb-3">

                <div className="border rounded p-3 h-100">

                  <h5>
                    2️⃣{" "}
                    {isTelugu
                      ? "వార్తను తనిఖీ చేయండి"
                      : "Click Check News"}
                  </h5>

                  <p className="mb-0">
                    {isTelugu
                      ? "'వార్తను తనిఖీ చేయండి' బటన్‌ను క్లిక్ చేయండి."
                      : "Click the Check News button to analyze the submitted news."}
                  </p>

                </div>

              </div>


              <div className="col-md-6 mb-3">

                <div className="border rounded p-3 h-100">

                  <h5>
                    3️⃣{" "}
                    {isTelugu
                      ? "ఫలితాన్ని చూడండి"
                      : "Check the Result"}
                  </h5>

                  <p className="mb-0">
                    {isTelugu
                      ? "సిస్టమ్ నకిలీ, నిజమైనది లేదా ధృవీకరించబడని ఫలితాన్ని చూపిస్తుంది."
                      : "The system displays whether the news is likely fake, likely real, or unverified."}
                  </p>

                </div>

              </div>


              <div className="col-md-6 mb-3">

                <div className="border rounded p-3 h-100">

                  <h5>
                    4️⃣{" "}
                    {isTelugu
                      ? "విశ్వసనీయ వనరులతో ధృవీకరించండి"
                      : "Verify with Trusted Sources"}
                  </h5>

                  <p className="mb-0">
                    {isTelugu
                      ? "ముఖ్యమైన వార్తలను అధికారిక ప్రభుత్వ వెబ్‌సైట్లు మరియు విశ్వసనీయ ఫ్యాక్ట్-చెకింగ్ వనరులతో ధృవీకరించండి."
                      : "For important news, verify the information using official websites and trusted fact-checking sources."}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ======================================================
            FINAL NOTE
        ====================================================== */}

        <div className="alert alert-warning mt-4 text-center">

          <strong>
            ⚠️{" "}
            {isTelugu
              ? "గమనిక:"
              : "Note:"}
          </strong>{" "}

          {isTelugu
            ? "AI ఫలితం ఒక అంచనా మాత్రమే. ముఖ్యమైన సమాచారాన్ని ఎల్లప్పుడూ విశ్వసనీయ వనరులతో ధృవీకరించండి."
            : "The AI result is only a prediction. Always verify important information with trusted sources."}

        </div>

      </div>

      <Footer />
    </>
  );
}

export default FakeNews;