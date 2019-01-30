import React, { Component } from "react";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import CoursePage from "./components/course/CoursePage";
import ManageCoursePage from "./components/course/ManageCoursePage";
import LoadingDots from "./components/common/LoadingDots";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <Header />
            {this.props.loading && <LoadingDots interval={100} dots={20} />}
            <div className="container-fluid">
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/Courses" exact component={CoursePage} />
                <Route path="/Course" exact component={ManageCoursePage} />
                <Route path="/Course/:id" exact component={ManageCoursePage} />
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

function mapStateToProps(state, ownprops) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
