import * as React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


export class Control extends React.PureComponent<any, any> {
    constructor(props: any) {
        super(props);
    }
}
const ControlSinConectar: any = connect(
    (store: any) => {
        return {

        };
    },
)(Control);

export default withRouter(ControlSinConectar)