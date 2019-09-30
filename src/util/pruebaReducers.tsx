import {
    ENVIAR_CUESTIONARIO,
    ERROR_CUESTIONARIO,
    RESPUESTA_CUESTIONARIO,
    respuestaCuestionarioObtenida
} from "./pruebaActions";
import {REQUEST} from "./Request";
import axios from 'axios';
import {catchError, map, mergeMap} from "rxjs/operators";
import { ofType } from 'redux-observable';

// @ts-ignore
export const cuestionarioEpic = action$ =>
    action$.pipe(
        ofType(ENVIAR_CUESTIONARIO),
        mergeMap((action: any) =>
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8080/getProblems',
            data: {
                ...action.comando
            }
        }).then(response => respuestaCuestionarioObtenida(action.respuesta))))

export const encuestaReducer = (state = {}, action: { type: any; respuesta: any; }) => {
    switch (action.type) {
        case ENVIAR_CUESTIONARIO:
            return {...state,
                estadoEnvioCuestionario: REQUEST.PENDING};
        case RESPUESTA_CUESTIONARIO:
            return {...state,
                estadoEnvioCuestionario: REQUEST.SUCCESS, respuesta: action.respuesta};
        case ERROR_CUESTIONARIO:
            return {...state,
                estadoEnvioCuestionario: REQUEST.NONE};
        default:
            return state;

    }
}