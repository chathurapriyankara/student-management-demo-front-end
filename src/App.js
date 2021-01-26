import './App.css';
import React, {useState} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {NavBar} from "./NavBar";
import {View} from "./View";
import {Create} from "./Create"
import {Login} from "./Login"

function App() {
    const [token,setToken] = useState('');
    if(!token) {
        return <Login setTokenFunc={setToken} />
    }
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
