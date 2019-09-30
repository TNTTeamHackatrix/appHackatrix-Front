import {combineReducers} from "redux";
import {encuestaReducer} from "../util/pruebaReducers";

// Initial routing state
export function routeReducer(state: any = {}, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}

export const cuestionarioReducer = combineReducers({
  cuestionarioReducer: encuestaReducer
});

