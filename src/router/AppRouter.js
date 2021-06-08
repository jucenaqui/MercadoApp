import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import BaseApp from '../components/BaseApp';
import { ProductListApp } from '../components/product/ProductListApp';

export const AppRouter = () => {
    return (
        <Router>
            <div>
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
