import * as React from 'react';
import {hot} from 'react-hot-loader/root';
import {Router, Route, Switch} from 'react-router';
import {TodoApp} from 'app/containers/TodoApp';

// render react DOM
export const App = hot(({history}) => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={TodoApp}/>
        </Switch>
    </Router>
));
