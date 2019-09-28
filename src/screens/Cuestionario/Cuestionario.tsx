import * as React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


export class Cuestionario extends React.PureComponent<any, any> {
    constructor(props: any) {
        super(props);
    }
}
const CuestionarioSinConectar: any = connect(
    (store: any) => {
        return {

        };
    },
)(Cuestionario);

export default withRouter(CuestionarioSinConectar)