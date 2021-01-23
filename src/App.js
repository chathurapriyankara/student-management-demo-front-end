import './App.css';
import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {NavBar} from "./NavBar";
import {View} from "./View";
import {Create} from "./Create"

function App() {
    return (
        <Router>
            <div className="container-fluid">
            <NavBar/>
            <Switch>
                <Route path="/" exact component={View}/>
                <Route path="/create" exact component={Create}/>
            </Switch>
            </div>
        </Router>
    );
}

export default App;
