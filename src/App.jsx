import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
