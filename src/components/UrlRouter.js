import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import { ShortUrlredirection } from './ShortUrlredirection';
import { UrlShortner } from './UrlShortner';

export function UrlRouterComponent() {
    return (

        <div>
            <Switch>
                <Route exact path="/" component={UrlShortner}></Route>
                <Route path="/:id" component={ShortUrlredirection}></Route>
            </Switch>
        </div>
    )
}

