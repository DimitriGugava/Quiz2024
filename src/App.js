import "./App.css";
import React from "react";
import background from "./icons/background.svg";
import { useState } from "react";
import Header from "./headerContainer/Header";
import Main from "./main/Main";
import data from "./data.json";
import Quiztopic from "./quiztopic/Quiztopic";

function App(props) {
  const [goDark, setGoDark] = useState(false);
  const [goLight, setGoLight] = useState(true);
  const [quizData, setQuizData] = useState(data);

  const handleDark = (props) => {
    setGoDark(!goDark);
  };

  return (
    <>
      {!goDark ? (
        <div className="App">
          <Header
            goDark={goDark}
            setGoDark={setGoDark}
            goLight={goLight}
            setGoLight={setGoLight}
            handleDark={handleDark}
          />
          {/* <Main
        goDark={goDark}
        setGoDark={setGoDark}
        goLight={goLight}
        setGoLight={setGoLight}
        handleDark={handleDark}
      /> */}
          <Quiztopic
            goDark={goDark}
            setGoDark={setGoDark}
            goLight={goLight}
            setGoLight={setGoLight}
            handleDark={handleDark}
          />
        </div>
      ) : (
        <div className="App" style={{ backgroundColor: "#313E51" }}>
          <Header
            goDark={goDark}
            setGoDark={setGoDark}
            goLight={goLight}
            setGoLight={setGoLight}
            handleDark={handleDark}
          />
          {/* <Main
        goDark={goDark}
        setGoDark={setGoDark}
        goLight={goLight}
        setGoLight={setGoLight}
        handleDark={handleDark}
      /> */}
          <Quiztopic
            goDark={goDark}
            setGoDark={setGoDark}
            goLight={goLight}
            setGoLight={setGoLight}
            handleDark={handleDark}
          />
        </div>
      )}
    </>
  );
}

export default App;
