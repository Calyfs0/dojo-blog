import "./App.css";
import Navbar from "./components/navbar";
import MainContent from "./components/maincontent";

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <Navbar />
        <div className="main-content">
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
