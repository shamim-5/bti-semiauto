import { useCallback, useState } from "react";
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Literatures from "./Pages/Literatures/Literatures";
import Footer from "./Pages/Shared/Footer";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }, []);

  return (
    <div
      data-theme={theme}
      className="cover-home1 h-screen scrollbar-thin  scrollbar-thumb-[#001529] scrollbar-track-slate-500"
    >
      <Navbar toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/literatures" element={<Literatures />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
