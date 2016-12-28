import React from 'react';
import { Route/*, IndexRoute*/ } from 'react-router';
//import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import DetailWorkPage from './containers/DetailWorkPage';
import ManageWorkPage from './containers/ManageWorkPage';
import GalleryPage from './containers/GalleryPage';
import WorkMessagePage from './containers/WorkMessagePage';
import Dashboard from './containers/DashboardPage';
import ManageUserPage from './containers/ManageUserPage';
import CambiarPassword from './containers/CambiarPasswordPage';

export default (
    <Route>
        <Route path="login" component={LoginPage}/>
        <Route path="/" component={Dashboard}>
            <Route path="manageWork" component={ManageWorkPage}/>
            <Route path="detailWorkPage" component={DetailWorkPage}/>
            <Route path="cambiarPassword" component={CambiarPassword}/>
            <Route path="gallery" component={GalleryPage}/>
            <Route path="workMessage" component={WorkMessagePage}/>
            <Route path="manageUser" component={ManageUserPage}/>
        </Route>
    </Route>
);
