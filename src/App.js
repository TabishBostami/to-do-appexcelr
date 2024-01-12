import "./App.css";
import Navbar from "./Components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Info from "./pages/Info";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// SPA --- single page application

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/info" element={<Info/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
