import * as React from "react";
import * as R from "ramda";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import Button from "../../components/UI/Button/Button";
import {pruebaDispatchCuestionario} from "../../util/pruebaActions";
import {CuestionarioRequest} from "../../request/ConfirmarCuestionario";

export class Resultado extends React.PureComponent<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                Prueba resultado
                <Button
                    id="prueba"
                    name="prueba"
                    type="button"
                    typeStyle="secondary"
                    onClick={this.pruebaEjecucion}
                >
                    Enviar cuestionario
                </Button>
            </div>
        );
}

    pruebaEjecucion = () => {
        const comando = new CuestionarioRequest(
            {
                description: "ansiedad",
                value: true
            });

        this.props.dispatch(pruebaDispatchCuestionario(comando))
    };


}

    const ResultadoSinConectar: any = connect(
    (store: any) => {
        return {
            reclamantesStore: R.pathOr([], ["asesoriaSobrevivencia", "beneficiarios", "beneficiarios"])(store),
            };
    },
)(Resultado);
export default withRouter(ResultadoSinConectar)