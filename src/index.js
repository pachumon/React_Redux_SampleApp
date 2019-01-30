import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/toastr/build/toastr.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import "jquery";
import "popper.js";
import App from "./App";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { loadCourses } from "./actions/courseActions";
import { loadAuthors } from "./actions/authorActions";

var store = configureStore();
//hydrating the store by prefilling the data on load
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//use below section only if you want HMR capablities
if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    ReactDOM.render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      document.getElementById("root")
    );
  });
}
