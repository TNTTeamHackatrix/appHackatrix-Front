import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import "bootstrap/scss/bootstrap.scss";
import {AppContainer} from "react-hot-loader";
import {BrowserRouter as Router} from "react-router-dom";
import configureStore from "./redux/configureStore";
import App from "./App";
import {unregister} from "./serviceWorker";


const store = configureStore();
// const history = createBrowserHistory();

const root = document.createElement("div");
document.body.appendChild(root);

const render = (component: any) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Router>
                    {component}
                </Router>
            </Provider>

        </AppContainer>,
        root,
    );
};

render(<App/>);

unregister();
