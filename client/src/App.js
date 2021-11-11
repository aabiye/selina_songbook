import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./components/Routes";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header></Header>
          <Switch>
            <Routes />
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    </>
  );
}

export default App;
