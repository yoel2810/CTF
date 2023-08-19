import "./App.css";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
