export const ENVIAR_CUESTIONARIO = "@hackatrix/ENVIAR_CUESTIONARIO";
export const RESPUESTA_CUESTIONARIO = "@hackatrix/RESPUESTA_CUESTIONARIO";
export const ERROR_CUESTIONARIO = "@hackatrix/ERROR_CUESTIONARIO";

export const pruebaDispatchCuestionario = (comando: any) =>
    ({comando, type: ENVIAR_CUESTIONARIO});
export const respuestaCuestionarioObtenida = (respuesta: any) =>({type: RESPUESTA_CUESTIONARIO, respuesta: respuesta});