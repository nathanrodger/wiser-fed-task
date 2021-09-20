import 'react-app-polyfill/ie11';

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import cssVars from 'css-vars-ponyfill';

/* components */
import Header from './component/header/header';
import Home from './component/home/home';
/* style */
import "./style/main.scss";
/* context */
import AppProvider from './script/context/context';

cssVars();

const App = (
    <React.Fragment>
        <AppProvider>
            <BrowserRouter>
                <Header />
                <Home />
            </BrowserRouter>
        </AppProvider>
    </React.Fragment>
)

ReactDOM.render(App, document.getElementById('root'));