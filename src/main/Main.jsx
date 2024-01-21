import "../main/Main.css";
import React from "react";
import { useState } from "react";
import html from "../icons/html.svg";
import css from "../icons/css.svg";
import javascript from "../icons/javascript.svg";
import accessibility from "../icons/accessibility.svg";
import { Link } from "react-router-dom";

const Main = (props) => {
  const topics = [
    { id: 1, icon: html, name: "HTML" },
    { id: 2, icon: css, name: "CSS" },
    { id: 3, icon: javascript, name: "Javascript" },
    { id: 4, icon: accessibility, name: "Accessibility" },
  ];
  const topicSelect = (topic) => {
    props.setTopicClicked(true);
    console.log("Selected topic:", topic.name);
  };
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
              {topics.map((topic) => (
                <li>
                  <Link to={`/quiztopic/${topic.name}`}>
                    <div
                      key={topic.id}
                      className="topic_Container"
                      onClick={() => topicSelect(topic)}
                    >
                      <img
                        className="topic_icon"
                        src={topic.icon}
                        alt={topic.name}
                      />
                      <a className="topic_Text">{topic.name}</a>
                    </div>
                  </Link>
                </li>
              ))}
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
              {topics.map((topic) => (
                <li>
                  <Link to={`/quiztopic/${topic.name}`}>
                    <div
                      key={topic.id}
                      className="topic_Container"
                      onClick={() => topicSelect(topic)}
                    >
                      <img
                        className="topic_icon"
                        src={topic.icon}
                        alt={topic.name}
                      />
                      <a className="topic_Text">{topic.name}</a>
                    </div>
                  </Link>
                </li>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
