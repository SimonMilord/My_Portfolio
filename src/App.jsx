import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Footer from "./components/Footer/footer";
import MobileNav from "./components/MobileNav/mobileNav";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <HomePage {...routerProps} />}
            />
            <Route
              path="/github"
              component={() => {
                window.location.replace("https://github.com/SimonMilord");
                return null;
              }}
            />
            <Route
              path="/linkedin"
              component={() => {
                window.location.replace(
                  "https://www.linkedin.com/in/simonmilord/"
                );
                return null;
              }}
            />
            <Route
              path="/twitter"
              component={() => {
                window.location.replace(
                  "https://twitter.com/SimonMilord"
                );
                return null;
              }}
            />
            <Route
              path="*"
              exact
              render={(routerProps) => <HomePage {...routerProps} />}
            />
          </Switch>
        </div>
      </Router>
      <Footer />
      <MobileNav />
    </>
  );
}

export default App;
