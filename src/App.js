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

  const [topics, setTopics] = useState(data.quizzes);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  console.log(topics);

  const handleDark = (props) => {
    setGoDark(!goDark);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main topics={topics} />
              </>
            }
          />
          <Route
            path="/quiztopic/:topic"
            element={<Quiztopic topics={topics} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
