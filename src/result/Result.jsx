import "./Result.css";
import React from "react";
import { useState } from "react";
import html from "../icons/html.svg";
import css from "../icons/css.svg";
import javascript from "../icons/javascript.svg";
import accessibility from "../icons/accessibility.svg";

const Result = (props) => {
  return (
    <>
      {!props.getDark ? (
        <div className="result_Main">
          <div className="result_Header_Text_Box">
            <div className="result_Header_Text_First">Quiz completed</div>
            <div className="result_Header_Text_Second">You scored...</div>
          </div>
          <div className="result_Number_Box">
            <div>
              <div className="result_Topic_Box">
                <img
                  src={accessibility}
                  alt="html"
                  className="result_Number_Icon"
                />
                <div className="result_Topic_Text">Accessibility</div>
              </div>
              <div className="result_Number_Text">8</div>
              <div className="result_Number_Out_Of">out of 10</div>
            </div>
          </div>
          <button className="result_Retake_Quiz">Play Again</button>
        </div>
      ) : (
        <div className="result_Main">
          <div className="result_Header_Text_Box">
            <div
              className="result_Header_Text_First"
              style={{ color: " #FFF" }}
            >
              Quiz completed
            </div>
            <div
              className="result_Header_Text_Second"
              style={{ color: " #FFF" }}
            >
              You scored...
            </div>
          </div>
          <div
            className="result_Number_Box"
            style={{ backgroundColor: "#3B4D66" }}
          >
            <div className="result_Topic_Box">
              <img
                src={accessibility}
                alt="html"
                className="result_Number_Icon"
              />
              <div className="result_Topic_Text" style={{ color: "#FFF" }}>
                Accessibility
              </div>
            </div>
            <div className="result_Number_Text" style={{ color: "#FFF" }}>
              8
            </div>
            <div className="result_Number_Out_Of" style={{ color: "#FFF" }}>
              out of 10
            </div>
          </div>
          <button className="result_Retake_Quiz">Play Again</button>
        </div>
      )}
    </>
  );
};

export default Result;
