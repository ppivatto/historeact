// @flow

import React, {Component} from "react";
import { Provider } from 'react-redux'
import configureStore from './store/configure-store';
import App from './app';

const store = configureStore();

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

global.LOG = (...args) => {
    console.log('/------------------------------\\');
    console.log(...args);
    console.log('\\------------------------------/');
    return args[args.length - 1];
};

export default Root;
