import React from 'react';
import { Route/*, IndexRoute*/ } from 'react-router';
//import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import SucesosPage from './containers/SucesosPage';
import DocumentosPage from './containers/DocumentosPage';
import ContactoPage from './containers/ContactoPage';
import Home from './containers/HomePage';
import BiografiasPage from './containers/BiografiasPage';
import LibrosRecomendados from './containers/LibrosRecomendadosPage';

export default (
    <Route>
        <Route path="login" component={LoginPage}/>
        <Route path="/" component={Home}>
            <Route path="sucesos" component={SucesosPage}/>
            <Route path="librosRecomendados" component={LibrosRecomendados}/>
            <Route path="biografias" component={BiografiasPage}/>
            <Route path="documentos" component={DocumentosPage}/>
            <Route path="contacto" component={ContactoPage}/>
        </Route>
    </Route>
);
