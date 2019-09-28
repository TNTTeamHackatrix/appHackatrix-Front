import * as React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


export class Resultado extends React.PureComponent<any, any> {
    constructor(props: any) {
        super(props);
    }
}
const ResultadoSinConectar: any = connect(
    (store: any) => {
        return {

        };
    },
)(Resultado);

export default withRouter(ResultadoSinConectar)