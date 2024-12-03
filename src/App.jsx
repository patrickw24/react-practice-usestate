import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GreetingApp } from "./Components/GreetingApp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GreetingApp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
