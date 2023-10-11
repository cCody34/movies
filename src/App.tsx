import "./App.css";
import { Header } from "../src/components/Header";
import { NavBar } from "../src/components/NavBar";
import { TVList } from "./components/TVList";

function App() {
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <TVList></TVList>
    </div>
  );
}

export default App;
