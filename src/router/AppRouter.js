import React from 'react'
import {
    Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import BaseApp from '../components/BaseApp';
import { HeaderBarApp } from '../components/header/HeaderBarApp';
import { ProductListApp } from '../components/product/ProductListApp';

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export const AppRouter = () => {

    return (
        <Router  history={history}>
            <div>
                <HeaderBarApp history={ history } />

                <Switch> 
                    <Route exact path="/" component={ BaseApp } />
                    <Route exact path="/items" component={ BaseApp } />
                    <Route exact path="/items/:id" component={ ProductListApp } />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
