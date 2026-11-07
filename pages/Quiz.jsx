import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

function Quiz() {
  const { language } = useLanguage();
  const isTelugu = language === "te";

  const questions = [
    {
      question: isTelugu
        ? "1. ఆన్‌లైన్‌లో వార్తలను షేర్ చేసే ముందు మీరు ఏమి చేయాలి?"
        : "1. What should you do before sharing news online?",
      options: isTelugu
        ? [
            "వెంటనే షేర్ చేయాలి",
            "సమాచారాన్ని ధృవీకరించాలి",
            "ప్రతిదీ విస్మరించాలి"
          ]
        : [
            "Share immediately",
            "Verify the information",
            "Ignore everything"
          ],
      answer: 1,
      explanation: isTelugu
        ? "నకిలీ వార్తలు వ్యాప్తి చెందకుండా ఉండటానికి సమాచారాన్ని షేర్ చేసే ముందు ఎల్లప్పుడూ ధృవీకరించాలి."
        : "Always verify information before sharing it to avoid spreading fake news."
    },

    {
      question: isTelugu
        ? "2. సాధారణంగా ఏ మూలం ఎక్కువ నమ్మదగినది?"
        : "2. Which source is generally the most trustworthy?",
      options: isTelugu
        ? [
            "అధికారిక ప్రభుత్వ వెబ్‌సైట్",
            "యాదృచ్ఛిక WhatsApp ఫార్వర్డ్",
            "తెలియని బ్లాగ్"
          ]
        : [
            "Official Government Website",
            "Random WhatsApp Forward",
            "Unknown Blog"
          ],
      answer: 0,
      explanation: isTelugu
        ? "ప్రభుత్వ మరియు అధికారిక వెబ్‌సైట్లు ధృవీకరించబడిన సమాచారాన్ని అందిస్తాయి."
        : "Government and official websites provide verified information."
    },

    {
      question: isTelugu
        ? "3. నకిలీ వార్తలు సాధారణంగా దేని ద్వారా వ్యాప్తి చెందుతాయి?"
        : "3. Fake news usually spreads through:",
      options: isTelugu
        ? [
            "సోషల్ మీడియా",
            "లైబ్రరీ పుస్తకాలు",
            "పాఠశాల పాఠ్యపుస్తకాలు"
          ]
        : [
            "Social Media",
            "Library Books",
            "School Textbooks"
          ],
      answer: 0,
      explanation: isTelugu
        ? "చాలా నకిలీ వార్తలు సోషల్ మీడియా ప్లాట్‌ఫారమ్‌ల ద్వారా వేగంగా వ్యాప్తి చెందుతాయి."
        : "Most fake news spreads quickly through social media platforms."
    },

    {
      question: isTelugu
        ? "4. డిజిటల్ అక్షరాస్యత అంటే ఏమిటి?"
        : "4. What is Digital Literacy?",
      options: isTelugu
        ? [
            "సాంకేతికతను సురక్షితంగా మరియు బాధ్యతగా ఉపయోగించడం",
            "టీవీ చూడటం",
            "రోజంతా ఆటలు ఆడటం"
          ]
        : [
            "Using technology safely and responsibly",
            "Watching TV",
            "Playing games all day"
          ],
      answer: 0,
      explanation: isTelugu
        ? "డిజిటల్ అక్షరాస్యత అంటే డిజిటల్ పరికరాలను సురక్షితంగా మరియు బాధ్యతగా ఉపయోగించడం."
        : "Digital literacy means using digital devices safely and responsibly."
    },

    {
      question: isTelugu
        ? "5. బలమైన పాస్‌వర్డ్‌లో ఏమి ఉండాలి?"
        : "5. A strong password should contain:",
      options: isTelugu
        ? [
            "మీ పేరు మాత్రమే",
            "అక్షరాలు, సంఖ్యలు మరియు ప్రత్యేక చిహ్నాలు",
            "మీ పుట్టిన సంవత్సరం మాత్రమే"
          ]
        : [
            "Only your name",
            "Letters, Numbers and Symbols",
            "Only your birth year"
          ],
      answer: 1,
      explanation: isTelugu
        ? "అక్షరాలు, సంఖ్యలు మరియు ప్రత్యేక చిహ్నాలను కలిపి ఉపయోగించడం వల్ల బలమైన పాస్‌వర్డ్‌ను ఊహించడం కష్టం."
        : "Strong passwords are difficult to guess because they combine letters, numbers and symbols."
    },

    {
      question: isTelugu
        ? "6. వార్తా హెడ్‌లైన్ చాలా ఆశ్చర్యకరంగా కనిపిస్తే మీరు ఏమి చేయాలి?"
        : "6. What should you do if a news headline looks shocking?",
      options: isTelugu
        ? [
            "వెంటనే షేర్ చేయాలి",
            "నమ్మకమైన వనరులను ఉపయోగించి ధృవీకరించాలి",
            "తనిఖీ చేయకుండా నమ్మాలి"
          ]
        : [
            "Share it immediately",
            "Verify it using trusted sources",
            "Believe it without checking"
          ],
      answer: 1,
      explanation: isTelugu
        ? "ఆశ్చర్యకరమైన వార్తలను నమ్మే ముందు లేదా షేర్ చేసే ముందు ఎల్లప్పుడూ ధృవీకరించాలి."
        : "Always verify shocking news before believing or sharing it."
    },

    {
      question: isTelugu
        ? "7. వీటిలో ఏది నకిలీ వార్తకు సంకేతం?"
        : "7. Which of these is a sign of fake news?",
      options: isTelugu
        ? [
            "నమ్మకమైన మూలాలు ఇవ్వబడ్డాయి",
            "చాలా స్పెల్లింగ్ తప్పులు మరియు నమ్మకమైన మూలం లేకపోవడం",
            "ప్రసిద్ధ వార్తాపత్రికలో ప్రచురించబడింది"
          ]
        : [
            "Reliable sources are cited",
            "Many spelling mistakes and no trusted source",
            "Published by a well-known newspaper"
          ],
      answer: 1,
      explanation: isTelugu
        ? "నకిలీ వార్తల్లో తరచుగా వ్యాకరణ తప్పులు ఉంటాయి మరియు నమ్మకమైన మూలాలు ఉండవు."
        : "Fake news often contains grammar mistakes and lacks reliable sources."
    },

    {
      question: isTelugu
        ? "8. డిజిటల్ అక్షరాస్యత ఎందుకు ముఖ్యమైనది?"
        : "8. Why is digital literacy important?",
      options: isTelugu
        ? [
            "ఇది ప్రజలకు ఇంటర్నెట్‌ను సురక్షితంగా ఉపయోగించడంలో సహాయపడుతుంది",
            "ఇది నకిలీ వార్తలను పెంచుతుంది",
            "ఇది కంప్యూటర్ల వేగాన్ని తగ్గిస్తుంది"
          ]
        : [
            "It helps people use the internet safely",
            "It increases fake news",
            "It slows down computers"
          ],
      answer: 0,
      explanation: isTelugu
        ? "డిజిటల్ అక్షరాస్యత ప్రజలకు మోసాలు మరియు నకిలీ సమాచారాన్ని గుర్తించడంలో సహాయపడుతుంది."
        : "Digital literacy helps people identify scams and fake information."
    },

    {
      question: isTelugu
        ? "9. వ్యక్తిగత సమాచారం అడుగుతూ అనుమానాస్పద సందేశం వస్తే మీరు ఏమి చేయాలి?"
        : "9. What should you do if you receive a suspicious message asking for personal information?",
      options: isTelugu
        ? [
            "మీ వివరాలతో సమాధానం ఇవ్వాలి",
            "సందేశాన్ని విస్మరించాలి లేదా రిపోర్ట్ చేయాలి",
            "మీ స్నేహితులకు ఫార్వర్డ్ చేయాలి"
          ]
        : [
            "Reply with your details",
            "Ignore or report the message",
            "Forward it to your friends"
          ],
      answer: 1,
      explanation: isTelugu
        ? "అనుమానాస్పద సందేశాలతో వ్యక్తిగత సమాచారాన్ని ఎప్పుడూ పంచుకోవద్దు."
        : "Never share personal information with suspicious messages."
    },

    {
      question: isTelugu
        ? "10. ఆన్‌లైన్ సమాచారాన్ని నమ్మే ముందు మీరు ఏమి చేయాలి?"
        : "10. Before believing online information, you should:",
      options: isTelugu
        ? [
            "అనేక నమ్మకమైన మూలాలను తనిఖీ చేయాలి",
            "మొదట కనిపించిన వెబ్‌సైట్‌ను నమ్మాలి",
            "ప్రతి సోషల్ మీడియా పోస్ట్‌ను నమ్మాలి"
          ]
        : [
            "Check multiple trusted sources",
            "Believe the first website you see",
            "Trust every social media post"
          ],
      answer: 0,
      explanation: isTelugu
        ? "సమాచారాన్ని నమ్మే ముందు నమ్మకమైన మూలాల నుండి సమాచారాన్ని పోల్చి చూడాలి."
        : "Always compare information from trusted sources before believing it."
    }
  ];

  const [name, setName] = useState("");
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (questionIndex, optionIndex) => {
    setAnswers({
      ...answers,
      [questionIndex]: optionIndex
    });
  };

  const handleSubmit = async () => {
    if (name.trim() === "") {
      alert(
        isTelugu
          ? "దయచేసి మీ పేరును నమోదు చేయండి"
          : "Please enter your name"
      );
      return;
    }

    let score = 0;

    questions.forEach((q, index) => {
      if (answers[index] === q.answer) {
        score++;
      }
    });

    const percentage = Math.round(
      (score / questions.length) * 100
    );

    setResult({
      score,
      percentage
    });

    setSubmitted(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/quiz",
        {
          name,
          score,
          totalQuestions: questions.length,
          percentage
        }
      );

      alert(
        response.data.message ||
          (isTelugu
            ? "క్విజ్ ఫలితం విజయవంతంగా సేవ్ చేయబడింది"
            : "Quiz result saved successfully")
      );
    } catch (error) {
      alert(
        isTelugu
          ? "క్విజ్ ఫలితాన్ని సేవ్ చేయడంలో లోపం"
          : "Error saving quiz result"
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5 mb-5">

        <h1 className="text-center mb-4">
          🧠{" "}
          {isTelugu
            ? "డిజిటల్ అవగాహన క్విజ్"
            : "Digital Awareness Quiz"}
        </h1>

        <p className="lead text-center">
          {isTelugu
            ? "నకిలీ వార్తలు మరియు డిజిటల్ భద్రతపై మీ అవగాహనను పరీక్షించుకోండి."
            : "Test your awareness about fake news and digital safety."}
        </p>

        <div className="card shadow p-4">

          <label className="fw-bold">
            {isTelugu
              ? "మీ పేరు నమోదు చేయండి"
              : "Enter Your Name"}
          </label>

          <input
            type="text"
            className="form-control mb-4"
            placeholder={
              isTelugu
                ? "మీ పేరును నమోదు చేయండి"
                : "Enter your name"
            }
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {questions.map((q, index) => (

            <div key={index} className="mb-4">

              <h5>{q.question}</h5>

              {q.options.map((option, i) => (

                <div className="form-check" key={i}>

                  <input
                    className="form-check-input"
                    type="radio"
                    name={`question${index}`}
                    id={`q${index}-${i}`}
                    checked={answers[index] === i}
                    onChange={() =>
                      handleAnswer(index, i)
                    }
                  />

                  <label
                    className="form-check-label"
                    htmlFor={`q${index}-${i}`}
                  >
                    {option}
                  </label>

                </div>

              ))}

            </div>

          ))}

          <button
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            📝{" "}
            {isTelugu
              ? "క్విజ్ సమర్పించండి"
              : "Submit Quiz"}
          </button>

          {result && (

            <div className="alert alert-success mt-4">

              <h3>
                🎉{" "}
                {isTelugu
                  ? "క్విజ్ పూర్తయింది!"
                  : "Quiz Completed!"}
              </h3>

              <p>
                <strong>
                  {isTelugu ? "పేరు:" : "Name:"}
                </strong>{" "}
                {name}
              </p>

              <p>
                <strong>
                  {isTelugu ? "స్కోర్:" : "Score:"}
                </strong>{" "}
                {result.score} / {questions.length}
              </p>

              <p>
                <strong>
                  {isTelugu
                    ? "శాతం:"
                    : "Percentage:"}
                </strong>{" "}
                {result.percentage}%
              </p>

              {result.percentage >= 80 && (
                <p>
                  🌟{" "}
                  {isTelugu
                    ? "అద్భుతం! నకిలీ వార్తల గురించి మీకు చాలా మంచి అవగాహన ఉంది."
                    : "Excellent! You have very good awareness about fake news."}
                </p>
              )}

              {result.percentage >= 50 &&
                result.percentage < 80 && (
                  <p>
                    👍{" "}
                    {isTelugu
                      ? "చాలా బాగుంది! నేర్చుకుంటూ ఉండండి మరియు వార్తలను ఎల్లప్పుడూ ధృవీకరించండి."
                      : "Good! Keep learning and always verify news."}
                  </p>
                )}

              {result.percentage < 50 && (
                <p>
                  📚{" "}
                  {isTelugu
                    ? "ఆన్‌లైన్ సమాచారాన్ని షేర్ చేసే ముందు డిజిటల్ అక్షరాస్యత గురించి మరింత నేర్చుకోండి."
                    : "Please learn more about Digital Literacy before sharing online information."}
                </p>
              )}

            </div>
          )}

          {submitted && (

            <div className="mt-5">

              <h2 className="mb-4">
                📖{" "}
                {isTelugu
                  ? "సరైన సమాధానాలు & వివరణ"
                  : "Correct Answers & Explanation"}
              </h2>

              {questions.map((q, index) => {

                const correct =
                  answers[index] === q.answer;

                return (

                  <div
                    key={index}
                    className={`card mb-3 ${
                      correct
                        ? "border-success"
                        : "border-danger"
                    }`}
                  >

                    <div className="card-body">

                      <h5>{q.question}</h5>

                      <p>
                        <strong>
                          {isTelugu
                            ? "మీ సమాధానం:"
                            : "Your Answer:"}
                        </strong>{" "}

                        {answers[index] !== undefined
                          ? q.options[answers[index]]
                          : isTelugu
                            ? "సమాధానం ఇవ్వలేదు"
                            : "Not Answered"}
                      </p>

                      <p>
                        <strong>
                          {isTelugu
                            ? "సరైన సమాధానం:"
                            : "Correct Answer:"}
                        </strong>{" "}

                        {q.options[q.answer]}
                      </p>

                      <p>
                        <strong>
                          {isTelugu
                            ? "వివరణ:"
                            : "Explanation:"}
                        </strong>{" "}

                        {q.explanation}
                      </p>

                      {correct ? (

                        <div className="text-success fw-bold">
                          ✅{" "}
                          {isTelugu
                            ? "సరైన సమాధానం"
                            : "Correct"}
                        </div>

                      ) : (

                        <div className="text-danger fw-bold">
                          ❌{" "}
                          {isTelugu
                            ? "తప్పు సమాధానం"
                            : "Incorrect"}
                        </div>

                      )}

                    </div>

                  </div>
                );
              })}

            </div>
          )}

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Quiz;