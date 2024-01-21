import "./Quiztopic.css";
import React from "react";
import { useState } from "react";
import a from "../icons/a.svg";
import b from "../icons/b.svg";
import c from "../icons/c.svg";
import d from "../icons/d.svg";
import Result from "../result/Result";
import { useParams } from "react-router-dom";

const Quiztopic = (props) => {
  // useParams() returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.
  const { topic } = useParams();

  // selectedQuiz is an object that contains the quiz data for the selected topic
  const selectedQuiz = props.quizData.quizzes.find(
    (quiz) => quiz.title === topic
  );

  return (
    <div className="quizMain">
      {!props.goDark ? (
        <div className="quizTop_Main_Cont">
          <div className="quizTop_Header_Box">
            <div className="quizTop_Question_Texual_Box">
              <span className="quizTop_Quest_Number">Question 6 of 10</span>
              <span className="quizTop_Quest_Texual">
                Which of these color contrast ratios defines the minimum WCAG
                2.1 Level AA requirement for normal text?
              </span>
              <div className="quizTop_Progress_Bar">
                <div className="quizTop_Progress_Bar_Fill"></div>
              </div>
            </div>
          </div>
          <div className="quizTop_Questions_Box">
            <div className="quizTop_Each_Question_Box">
              <div className="quizTop_Question_Number_Name">A</div>
              <div className="quizTop_Question_Answer">4.5 : 1</div>
            </div>
            <div className="quizTop_Each_Question_Box">
              <div className="quizTop_Question_Number_Name">B</div>
              <div className="quizTop_Question_Answer">4.5 : 1</div>
            </div>
            <div className="quizTop_Each_Question_Box">
              <div className="quizTop_Question_Number_Name">C</div>
              <div className="quizTop_Question_Answer">4.5 : 1</div>
            </div>
            <div className="quizTop_Each_Question_Box">
              <div className="quizTop_Question_Number_Name">D</div>
              <div className="quizTop_Question_Answer">4.5 : 1</div>
            </div>
            <button className="quizTop_Question_Submit">Submit Answer</button>
          </div>
        </div>
      ) : (
        <div
          className="quizTop_Main_Cont"
          style={{ backgroundColor: "#313E51" }}
        >
          <div className="quizTop_Header_Box">
            <div className="quizTop_Question_Texual_Box">
              <span
                className="quizTop_Quest_Number"
                style={{ color: " #ABC1E1" }}
              >
                Question 6 of 10
              </span>
              <span className="quizTop_Quest_Texual" style={{ color: " #FFF" }}>
                Which of these color contrast ratios defines the minimum WCAG
                2.1 Level AA requirement for normal text?
              </span>
              <div
                className="quizTop_Progress_Bar"
                style={{ backgroundColor: "#3B4D66" }}
              >
                <div className="quizTop_Progress_Bar_Fill"></div>
              </div>
            </div>
          </div>
          <div className="quizTop_Questions_Box">
            <div
              className="quizTop_Each_Question_Box"
              style={{ backgroundColor: "#313E51" }}
            >
              <div className="quizTop_Question_Number_Name">A</div>
              <div
                className="quizTop_Question_Answer"
                style={{ color: " #FFF" }}
              >
                4.5 : 1
              </div>
            </div>
            <div
              className="quizTop_Each_Question_Box"
              style={{ backgroundColor: "#313E51" }}
            >
              <div className="quizTop_Question_Number_Name">B</div>
              <div
                className="quizTop_Question_Answer"
                style={{ color: " #FFF" }}
              >
                4.5 : 1
              </div>
            </div>
            <div
              className="quizTop_Each_Question_Box"
              style={{ backgroundColor: "#313E51" }}
            >
              <div className="quizTop_Question_Number_Name">C</div>
              <div
                className="quizTop_Question_Answer"
                style={{ color: " #FFF" }}
              >
                4.5 : 1
              </div>
            </div>
            <div
              className="quizTop_Each_Question_Box"
              style={{ backgroundColor: "#313E51" }}
            >
              <div className="quizTop_Question_Number_Name">D</div>
              <div
                className="quizTop_Question_Answer"
                style={{ color: " #FFF" }}
              >
                4.5 : 1
              </div>
            </div>
            <button className="quizTop_Question_Submit">Submit Answer</button>
          </div>
        </div>
      )}
    </div>
    // <Result getDark={props.getDark} />
  );
};
export default Quiztopic;
