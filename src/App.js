import './App.css';
import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {Home} from "./Home";
import {View} from "./View";
import {Create} from "./Create"

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/view" exact component={View}/>
                <Route path="/create" exact component={Create}/>
            </Switch>
        </Router>
    );
}

export default App;
