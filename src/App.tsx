import "./App.css";
import { Header } from "../src/components/Header";
import { NavBar } from "../src/components/NavBar";
import { TVList } from "./components/TVList";
import { PersonList } from "./components/PersonList";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";

function App() {
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
