
import React, {Component} from "react";
import App from './app';


class Root extends Component {
    render() {
        return (
            <App />
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
