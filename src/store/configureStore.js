import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import invariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  //this will be helful with redux devtools very cool
  //trace flag given below provides the tracing to code that caused the state change   super cool
  const composeEnhancers =
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        traceLimit: 25
      })) ||
    compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(invariant()))
  );
}
