import React from "react";
import Header from "./components/Header";
import DashBoard from "./pages/DashBoard";
import Companies from "./pages/Companies";
import Features from "./pages/Features";
import Video from "./pages/Video";

const App = () => {
  return (
    <>
      <Header />
      <DashBoard />
      <Companies />
      <Features />
      <Video />
    </>
  );
};

export default App;
