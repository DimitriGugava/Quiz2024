import "./App.css";
import React from "react";
import background from "./icons/background.svg";
import { useState } from "react";
import Header from "./headerContainer/Header";
import Main from "./main/Main";
import data from "./data.json";
import Quiztopic from "./quiztopic/Quiztopic";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App(props) {
  const [goDark, setGoDark] = useState(false);
  const [goLight, setGoLight] = useState(true);
  const [quizData, setQuizData] = useState(data);
  const [topicClicked, setTopicClicked] = useState(false);

  const handleDark = (props) => {
    setGoDark(!goDark);
  };

  return (
    <Router>
      <>
        {!goDark ? (
          <div className="App">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header
                      goDark={goDark}
                      setGoDark={setGoDark}
                      goLight={goLight}
                      setGoLight={setGoLight}
                      handleDark={handleDark}
                    />
                    <Main
                      setTopicClicked={setTopicClicked}
                      topicClicked={topicClicked}
                      setQuizData={setQuizData}
                      quizData={quizData}
                      goDark={goDark}
                      setGoDark={setGoDark}
                      goLight={goLight}
                      setGoLight={setGoLight}
                      handleDark={handleDark}
                    />
                  </>
                }
              />
              <Route
                path="/quiztopic/:topic"
                element={
                  <Quiztopic
                    setTopicClicked={setTopicClicked}
                    topicClicked={topicClicked}
                    setQuizData={setQuizData}
                    quizData={quizData}
                    goDark={goDark}
                    setGoDark={setGoDark}
                    goLight={goLight}
                    setGoLight={setGoLight}
                    handleDark={handleDark}
                  />
                }
              />
            </Routes>
          </div>
        ) : (
          <div className="App" style={{ backgroundColor: "#313E51" }}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header
                      goDark={goDark}
                      setGoDark={setGoDark}
                      goLight={goLight}
                      setGoLight={setGoLight}
                      handleDark={handleDark}
                    />
                    <Main
                      setTopicClicked={setTopicClicked}
                      topicClicked={topicClicked}
                      setQuizData={setQuizData}
                      quizData={quizData}
                      goDark={goDark}
                      setGoDark={setGoDark}
                      goLight={goLight}
                      setGoLight={setGoLight}
                      handleDark={handleDark}
                    />
                  </>
                }
              />
              <Route
                path="/quiztopic/:topic"
                element={
                  <Quiztopic
                    setTopicClicked={setTopicClicked}
                    topicClicked={topicClicked}
                    setQuizData={setQuizData}
                    quizData={quizData}
                    goDark={goDark}
                    setGoDark={setGoDark}
                    goLight={goLight}
                    setGoLight={setGoLight}
                    handleDark={handleDark}
                  />
                }
              />
            </Routes>
          </div>
        )}
      </>
    </Router>
  );
}

export default App;
