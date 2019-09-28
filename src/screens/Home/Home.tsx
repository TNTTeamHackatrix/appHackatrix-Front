import * as React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


export class Home extends React.PureComponent<any, any> {
    constructor(props: any) {
        super(props);
    }
}
const HomeSinConectar: any = connect(
    (store: any) => {
        return {

        };
    },
)(Home);

export default withRouter(HomeSinConectar)