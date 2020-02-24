import * as React from 'react';
import {hot} from 'react-hot-loader/root';
import {Router, Route, Switch} from 'react-router';
import {Root} from './containers/Root';
import {TodoApp} from './containers/TodoApp';

// render react DOM
export const App = hot(({history}: { history: any }) => (
    <Root>
        <Router history={history}>
            <Switch>
                <Route path="/" component={TodoApp}/>
            </Switch>
        </Router>
    </Root>
));
