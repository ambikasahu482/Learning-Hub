import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { quizData } from "../data/quizData";
import { useHeritage } from "../context/HeritageContext";

export default function Assessment() {
  const [params] = useSearchParams();
  const topic = params.get("topic");

  const {
    setInterest,
    setLevel,
    setItemProgress,
  } = useHeritage();

  const navigate = useNavigate();

  const [interestLocal, setInterestLocal] = useState("");
  const [levelLocal, setLevelLocal] = useState("Beginner");
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);
  const [score, setScore] = useState(0);

  /*
   * Save assessment progress only AFTER
   * the component has rendered.
   *
   * IMPORTANT:
   * Never call setItemProgress() directly
   * inside the render section.
   */
  useEffect(() => {
    if (!topic || !done || !quizData[topic]) {
      return;
    }

    const itemMap = {
      taj: "taj-mahal",
      "red-fort": "red-fort",
      konark: "konark-sun-temple",
      khajuraho: "khajuraho",
      hawa: "hawa-mahal",
      golden: "golden-temple",
      diwali: "diwali",
      bharatanatyam: "bharatanatyam",
    };

    const itemId = itemMap[topic];

    if (itemId) {
      setItemProgress(itemId, 100);
    }
  }, [topic, done, setItemProgress]);

  /*
   * Topic based quiz
   */
  if (topic && quizData[topic] && !done) {
    const questions = quizData[topic];

    const finish = () => {
      const finalScore = questions.reduce(
        (sum, question, index) =>
          sum + (answers[index] === question.answer ? 1 : 0),
        0
      );

      setScore(finalScore);
      setDone(true);
    };

    return (
      <section className="page-section">
        <div className="container quiz-container">

          <div className="page-hero compact">
            <span className="eyebrow">
              QUICK ASSESSMENT
            </span>

            <h1>
              Test what you <em>know.</em>
            </h1>

            <p>
              Answer each question and continue to your
              personalized learning path.
            </p>
          </div>

          <div className="quiz-card">

            {questions.map((question, index) => (
              <div
                className="question"
                key={question.question}
              >
                <span className="question-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>
                  {question.question}
                </h3>

                <div className="options">

                  {question.options.map((option) => (
                    <button
                      type="button"
                      key={option}
                      className={
                        answers[index] === option
                          ? "option selected"
                          : "option"
                      }
                      onClick={() =>
                        setAnswers((previous) => ({
                          ...previous,
                          [index]: option,
                        }))
                      }
                    >
                      {answers[index] === option ? (
                        <CheckCircle2 size={18} />
                      ) : (
                        <span className="radio" />
                      )}

                      {option}
                    </button>
                  ))}

                </div>
              </div>
            ))}

            <button
              type="button"
              className="btn btn-primary full"
              disabled={
                Object.keys(answers).length <
                questions.length
              }
              onClick={finish}
            >
              Finish Assessment
              <ArrowRight size={18} />
            </button>

          </div>
        </div>
      </section>
    );
  }

  /*
   * Assessment result
   */
  if (topic && done && quizData[topic]) {
    const questions = quizData[topic];

    const percent = Math.round(
      (score / questions.length) * 100
    );

    return (
      <section className="page-section">
        <div className="container result-page">

          <div className="result-card">

            <div className="result-icon">
              🏆
            </div>

            <span className="eyebrow">
              ASSESSMENT COMPLETE
            </span>

            <h1>
              {score} / {questions.length}
            </h1>

            <p>
              You scored{" "}
              <strong>{percent}%</strong>.
              {" "}

              {percent >= 80
                ? "Excellent work!"
                : "Good start — keep exploring to improve your score."}
            </p>

            <div className="result-actions">

              <Link
                className="btn btn-primary"
                to="/roadmap"
              >
                View Roadmap
                <ArrowRight size={18} />
              </Link>

              <Link
                className="btn btn-outline"
                to="/resources"
              >
                Explore Resources
              </Link>

            </div>

          </div>

        </div>
      </section>
    );
  }

  /*
   * General personalized assessment
   */
  const submit = (event) => {
    event.preventDefault();

    if (!interestLocal) {
      return;
    }

    setInterest(interestLocal);
    setLevel(levelLocal);

    navigate("/roadmap");
  };

  return (
    <section className="page-section">

      <div className="container assessment-layout">

        <div className="page-hero compact">

          <span className="eyebrow">
            PERSONALIZED ASSESSMENT
          </span>

          <h1>
            Tell us what you want to{" "}
            <em>learn.</em>
          </h1>

          <p>
            We use your interests and level to organize
            a simple heritage learning roadmap.
          </p>

        </div>

        <form
          className="assessment-card"
          onSubmit={submit}
        >

          <label>
            What interests you most?
          </label>

          <div className="interest-options">

            {[
              "Monuments",
              "Temples",
              "Culture",
              "Festivals",
              "History",
            ].map((item) => (
              <button
                type="button"
                key={item}
                className={
                  interestLocal === item
                    ? "interest selected"
                    : "interest"
                }
                onClick={() =>
                  setInterestLocal(item)
                }
              >
                {item}
              </button>
            ))}

          </div>

          <label>
            Your current level
          </label>

          <div className="interest-options">

            {[
              "Beginner",
              "Intermediate",
              "Advanced",
            ].map((item) => (
              <button
                type="button"
                key={item}
                className={
                  levelLocal === item
                    ? "interest selected"
                    : "interest"
                }
                onClick={() =>
                  setLevelLocal(item)
                }
              >
                {item}
              </button>
            ))}

          </div>

          <button
            type="submit"
            className="btn btn-primary full"
            disabled={!interestLocal}
          >
            Create My Roadmap
            <Sparkles size={18} />
          </button>

        </form>

      </div>

    </section>
  );
}