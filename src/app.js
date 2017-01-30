// @flow

import React, {Component} from "react";
/*import {
    StyleSheet,
    View
} from 'react-native';*/

//import {AppNavigator, Routes} from './common/router';
//import I18n from 'react-native-i18n';
//import I18nApp from 'common/i18n';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

//import {APIFirebase} from './common/API';

class App extends Component {

    constructor() {
        super();

        /*I18n.defaultLocale = "es-AR";
        I18n.locale = "es-AR";
        I18n.fallbacks = true;
        I18n.translations =  I18nApp;*/

        this.backButton = this.backButton.bind(this);
    }

    /*componentDidMount() {
        //TODO: SACAR KEYS A UN ARCHIVO DE CONFIGURACION

        let config = {
          apiKey: "AIzaSyB9rHyXgs_HFYdBMApy-VZzEsPoSK6UJk4",
          authDomain: "segmobra-desa.firebaseapp.com",
          databaseURL: "https://segmobra-desa.firebaseio.com",
          storageBucket: "segmobra-desa.appspot.com",
          messagingSenderId: "1091820485364"
      };

     //   APIFirebase.init(config);
    }*/

    render() {
        return (
          <Router routes={routes} history={browserHistory} />
        );
    }

    backButton() {
        console.log('backButton', Object.keys(this.props))
    }
}

export default App;
