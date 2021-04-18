import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleMovie from "./components/SingleMovie";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import "./App.scss";

function App() {
  return (
    

      <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/movie/:id">
            <SingleMovie />
          </Route>
          <Route exact path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
      </div>
    
  );
}

export default App;
