import "../main/Main.css";
import React from "react";
import { useState } from "react";
import html from "../icons/html.svg";
import css from "../icons/css.svg";
import javascript from "../icons/javascript.svg";
import accessibility from "../icons/accessibility.svg";
import { Link } from "react-router-dom";
import Result from "../result/Result";
import data from "../data.json";

const Main = ({ topics }, { selectedQuiz }) => {
  return (
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
        {topics.map((topic, index) => (
          <div className="topic_Select_Box" key={topic.index}>
            <Link
              to={`/quiztopic/${topic.title.toLowerCase()}`}
              key={topic.index}
            >
              <div className="topic_Container" key={topic.index}>
                <img
                  className="topic_icon"
                  src={topic.icon}
                  alt={topic.icon}
                  key={topic.index}
                />
                <span className="topic_Text" key={topic.title}>
                  {topic.title.toLowerCase()}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
