import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Topbar from "./components/Topbar";
import Works from "./components/Works";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
}
export default App;
