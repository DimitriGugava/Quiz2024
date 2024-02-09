import React, { createContext, useContext, useState } from "react";
import data from "./data.json";

const QuizzesContext = createContext();

export const useQuizzes = () => useContext(QuizzesContext);

export const QuizzesProvider = ({ children }) => {
  const [quizzes, setQuizzes] = useState(data.quizzes);

  return (
    <QuizzesContext.Provider value={{ quizzes, setQuizzes }}>
      {children}
    </QuizzesContext.Provider>
  );
};
