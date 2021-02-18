import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { Menu, NotFound, ShoppingCart } from '../pages';

interface RoutesProps {}

interface RoutesState {}

export default class Routes extends Component<RoutesProps, RoutesState> {
    render() {
        return (
            <BrowserRouter forceRefresh={false}>
                <Switch>
                    <Route exact path="/cart">
                        <ShoppingCart></ShoppingCart>
                    </Route>
                    <Route exact path="/menu">
                        <Menu></Menu>
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}
