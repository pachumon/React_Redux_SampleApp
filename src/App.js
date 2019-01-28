import React, { Component } from "react";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import CoursePage from "./components/CoursePage";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <Header />
            <div className="container-fluid">
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/Courses" exact component={CoursePage} />
                <Route path="/About" component={AboutPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
