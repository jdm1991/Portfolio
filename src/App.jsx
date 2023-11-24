import "./App.css";
import Home from './Home';
import Header from './Header';
import Navbar from './Navbar';
import Portfolio from './Portfolio'
import Contact from './Contact'
import AboutMe from './AboutMe'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <header className="App-header">
      <Header />
      <Navbar />
    </header>
    <main className="App-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    </>
  );
}

export default App;
