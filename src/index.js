/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
//import { Router, browserHistory } from 'react-router';
//import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
require('./favicon.ico');
//import './styles.scss';
import './styles.css';
//import configureStore from 'store/configure-store';
import Root from './root'

injectTapEventPlugin();

//const store = configureStore();

/*let config = {
    apiKey: "AIzaSyBMdb210Ix02xc5K4pfLas4b0tunO28UC4",
    authDomain: "node-api-rest-example.firebaseapp.com",
    databaseURL: "https://node-api-rest-example.firebaseio.com",
    storageBucket: "node-api-rest-example.appspot.com",
    messagingSenderId: "26330816176"
  };

APIFirebase.init(config);*/

render(
    <Root />, document.getElementById('app')
);
