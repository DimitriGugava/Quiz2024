import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Quiztopic.css";

const Quiztopic = ({ topics }) => {
  const { topic } = useParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // Assume topics is an array of quiz data
  const quizInfo = topics.find(
    (quiz) => quiz.title.toLowerCase() === topic.toLowerCase()
  );

  if (!quizInfo) {
    return <div>No quiz found for this topic.</div>;
  }

  // Simplistic handling for moving to next question
  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const currentQuestion = quizInfo.questions[currentQuestionIndex];

  // Ensure there's a current question to display
  if (!currentQuestion) {
    return <div>Quiz completed or no questions found.</div>;
  }

  return (
    <div className="quizMain">
      <div className="quizTop_Main_Cont" style={{ backgroundColor: "#313E51" }}>
        <div className="quizTop_Header_Box">
          <div className="quizTop_Question_Texual_Box">
            <span
              className="quizTop_Quest_Number"
              style={{ color: " #ABC1E1" }}
            >
              Question {currentQuestionIndex + 1} of {quizInfo.questions.length}
            </span>
            <span className="quizTop_Quest_Texual" style={{ color: " #FFF" }}>
              {currentQuestion.question}
            </span>
            <div
              className="quizTop_Progress_Bar"
              style={{ backgroundColor: "#3B4D66" }}
            >
              <div
                className="quizTop_Progress_Bar_Fill"
                style={{
                  width: `${
                    ((currentQuestionIndex + 1) / quizInfo.questions.length) *
                    100
                  }%`,
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="quizTop_Questions_Box">
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              className="quizTop_Each_Question_Box"
              style={{ backgroundColor: "#313E51" }}
            >
              <div className="quizTop_Question_Number_Name">
                {String.fromCharCode(65 + index)}
              </div>
              <div
                className="quizTop_Question_Answer"
                style={{ color: " #FFF" }}
              >
                {option}
              </div>
            </div>
          ))}
          <button
            className="quizTop_Question_Submit"
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiztopic;
