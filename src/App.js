import React, { useEffect, useState } from "react";

import Header from "./Components/Header";
import ProjectsPage from "./Components/ProjectsPage";
import About from "./Components/About"

import "./App.css";

const App = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About />
      <ProjectsPage data={resumeData.main} />
    </div>
  );
};

export default App;
