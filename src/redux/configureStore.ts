import {applyMiddleware, combineReducers, createStore} from "redux";
import {combineEpics, createEpicMiddleware} from "redux-observable";
import * as ReduxThunk from "redux-thunk";
import {logger} from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";
import {cuestionarioReducer} from "./reducers";
import {cuestionarioEpic} from "../util/pruebaReducers";

const rootEpic = combineEpics(
    cuestionarioEpic
);

const epicMiddleware = createEpicMiddleware();
// const history = createBrowserHistory();

export default function configureStore() {
  // 2. routerMiddleware: Syncs the location/URL path to the state TODO revisar si estan sincroizadsa
  // const middlewares = [epicMiddleware];
  // const enhancers = [applyMiddleware(...middlewares)];
  // const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    combineReducers({
      cuestionario: cuestionarioReducer,
    }),

    composeWithDevTools(applyMiddleware(ReduxThunk.default, epicMiddleware, logger)),
  );

  epicMiddleware.run(rootEpic);

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  // if (module.hot) {
  //   module.hot.accept("./reducers", () => {
  //     store.replaceReducer(createReducer(store.injectedReducers));
  //   });
  // }

  return store;
}
