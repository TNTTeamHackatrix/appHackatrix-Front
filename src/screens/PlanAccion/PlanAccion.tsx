import * as React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


export class PlanAccion extends React.PureComponent<any, any> {
    constructor(props: any) {
        super(props);
    }
}
const PlanAccionSinConectar: any = connect(
    (store: any) => {
        return {

        };
    },
)(PlanAccion);

export default withRouter(PlanAccionSinConectar)