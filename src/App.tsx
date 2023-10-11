import "./App.css";
import { Header } from "../src/components/Header";
import { NavBar } from "../src/components/NavBar";
import { TVList } from "./components/TVList";
import { PersonList } from "./components/PersonList";

function App() {
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <TVList></TVList>
      <PersonList></PersonList>
    </div>
  );
}

export default App;
