// Importing necessary hooks and utilities from React and React Router
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Quiztopic.css"; // Importing CSS for styling

// The Quiztopic component, which displays a quiz for a selected topic
const Quiztopic = ({ topics }) => {
  // Using useParams to get the 'topic' parameter from the URL
  const { topic } = useParams();

  // State hooks for managing the quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Tracks the index of the current question
  const [currentQuestionText, setCurrentQuestionText] = useState(""); // Tracks the text of the currently selected option
  const [currentOption, setCurrentOption] = useState(0); // Tracks the index of the currently selected option

  // Finding the relevant quiz data based on the topic parameter from the URL
  const quizInfo = topics.find(
    (quiz) => quiz.title.toLowerCase() === topic.toLowerCase()
  );

  // useEffect hook to perform side effects, here logging the currentQuestionText
  useEffect(() => {
    console.log(currentQuestionText); // Logs whenever currentQuestionText updates
  }, [currentQuestionText]); // The dependency array, effect runs only if currentQuestionText changes

  // Handling the case where no quiz is found for the topic
  if (!quizInfo) {
    return <div>No quiz found for this topic.</div>;
  }

  // Getting the current question object from the quiz data
  const currentQuestion = quizInfo.questions[currentQuestionIndex];

  // Handling the case where there are no more questions in the quiz
  if (!currentQuestion) {
    return <div>Quiz completed or no questions found.</div>;
  }

  // Function to handle option selection
  const readCurrentQuestion = (optionIndex) => {
    setCurrentOption(optionIndex); // Updates the currentOption with the index of the selected option
    setCurrentQuestionText(currentQuestion.options[optionIndex]); // Updates the text of the currently selected option
  };

  // Function to move to the next question after an option is selected
  const handleNextQuestion = () => {
    const selectedOptionText = currentQuestion.options[currentOption];
    if (selectedOptionText !== currentQuestion.answer) {
      console.log("Wrong answer"); // Log if the selected option is not the answer
    } else {
      console.log("Correct answer"); // Log if the selected option is the answer
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1); // Move to the next question
      setCurrentOption(0); // Reset the currentOption for the next question
      setCurrentQuestionText(""); // Reset the currentQuestionText for the next question
    }
  };

  // Rendering the quiz UI
  return (
    <div className="quizMain">
      <div className="quizTop_Main_Cont" style={{ backgroundColor: "#313E51" }}>
        <div className="quizTop_Header_Box">
          <div className="quizTop_Question_Texual_Box">
            <span className="quizTop_Quest_Number" style={{ color: "#ABC1E1" }}>
              Question {currentQuestionIndex + 1} of {quizInfo.questions.length}{" "}
              {/* Displaying the current question number */}
            </span>
            <span className="quizTop_Quest_Texual" style={{ color: "#FFF" }}>
              {currentQuestion.question}{" "}
              {/* Displaying the current question text */}
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
              ></div>{" "}
              {/* Displaying progress bar */}
            </div>
          </div>
        </div>

        <div className="quizTop_Questions_Box">
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              className="quizTop_Each_Question_Box"
              style={{ backgroundColor: "#313E51" }}
              onClick={() => readCurrentQuestion(index)}
            >
              {" "}
              {/* Option boxes */}
              <div className="quizTop_Question_Number_Name">
                {String.fromCharCode(65 + index)}{" "}
                {/* Displaying option letter (A, B, C, ...) */}
              </div>
              <div
                className="quizTop_Question_Answer"
                style={{ color: "#FFF" }}
              >
                {option} {/* Displaying option text */}
              </div>
            </div>
          ))}
          <button
            className="quizTop_Question_Submit"
            onClick={handleNextQuestion}
            disabled={currentQuestionText === ""}
          >
            {" "}
            {/* Next question button */}
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiztopic; // Exporting the component for use in other parts of the application
