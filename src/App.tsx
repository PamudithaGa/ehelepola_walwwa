import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//Components
import Places from "./components/home/Places";
import Gallery from "./components/home/Gallery";

function App() {
  return (
    <>
      <div className="flex items-center justify-center w-full ">
        <Places />
      </div>
      <div className="flex items-center justify-center w-full bg-primary">
        <Gallery/>
      </div>
    </>
  );
}

export default App;
