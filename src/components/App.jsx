import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { home, about } from '../pages';

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={home} />
            <Route path="/home" component={home} />
            <Route path="/about" component={about} />
        </Switch>
    );
};

export default App;