import * as React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


export class ExampleComponent extends React.PureComponent<any, any> {
    constructor(props: any) {
        super(props);
    }
}
const ExampleComponentSinConectar: any = connect(
    (store: any) => {
        return {

        };
    },
)(ExampleComponent);

export default withRouter(ExampleComponentSinConectar)