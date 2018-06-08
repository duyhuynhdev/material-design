import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CMS from './views/templates/CMS';
import {BrowserRouter} from 'react-router-dom';
ReactDOM.render((
    <BrowserRouter>
    <CMS />
    </BrowserRouter>), 
    document.getElementById('root')
);
registerServiceWorker();
