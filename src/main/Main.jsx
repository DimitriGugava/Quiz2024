import "../main/Main.css";
import React from "react";
import { useState } from "react";
import html from "../icons/html.svg";
import css from "../icons/css.svg";
import javascript from "../icons/javascript.svg";
import accessibility from "../icons/accessibility.svg";

const Main = (props) => {
  return (
    <div>
      {!props.goDark ? (
        <div className="mainContainer">
          <div className="content_Container">
            <div className="welcome_Content_Box">
              <div className="welcome_ToThe_FrontendQuiz_Text_Box">
                <h1 className="welcomeToThe_Text">Welcome to the</h1>
                <h1 className="frontEnd_Quiz_Text">Frontend Quiz!</h1>
              </div>
              <a className="pick_Subject_Text">
                Pick a subject to get started.
              </a>
            </div>
            <div className="topic_Select_Box">
              <div className="topic_Container">
                <img className="topic_icon" src={html} />
                <a className="topic_Text">HTML</a>
              </div>
              <div className="topic_Container">
                <img className="topic_icon" src={css} />
                <a className="topic_Text">CSS</a>
              </div>
              <div className="topic_Container">
                <img className="topic_icon" src={javascript} />
                <a className="topic_Text">Javascript</a>
              </div>
              <div className="topic_Container">
                <img className="topic_icon" src={accessibility} />
                <a className="topic_Text">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mainContainer" style={{ backgroundColor: "#313E51" }}>
          <div className="content_Container">
            <div className="welcome_Content_Box">
              <div className="welcome_ToThe_FrontendQuiz_Text_Box">
                <h1 className="welcomeToThe_Text" style={{ color: " #FFF" }}>
                  Welcome to the
                </h1>
                <h1 className="frontEnd_Quiz_Text" style={{ color: " #FFF" }}>
                  Frontend Quiz!
                </h1>
              </div>
              <a className="pick_Subject_Text" style={{ color: " #ABC1E1" }}>
                Pick a subject to get started.
              </a>
            </div>
            <div className="topic_Select_Box">
              <div
                className="topic_Container"
                style={{ background: "#3B4D66" }}
              >
                <img className="topic_icon" src={html} />
                <a className="topic_Text" style={{ color: " #FFF" }}>
                  HTML
                </a>
              </div>
              <div
                className="topic_Container"
                style={{ background: "#3B4D66" }}
              >
                <img className="topic_icon" src={css} />
                <a className="topic_Text" style={{ color: " #FFF" }}>
                  CSS
                </a>
              </div>
              <div
                className="topic_Container"
                style={{ background: "#3B4D66" }}
              >
                <img className="topic_icon" src={javascript} />
                <a className="topic_Text" style={{ color: " #FFF" }}>
                  Javascript
                </a>
              </div>
              <div
                className="topic_Container"
                style={{ background: "#3B4D66" }}
              >
                <img className="topic_icon" src={accessibility} />
                <a className="topic_Text" style={{ color: " #FFF" }}>
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
