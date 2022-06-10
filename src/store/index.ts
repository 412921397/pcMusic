import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducer";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
