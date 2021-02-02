import './App.css';
import React, {useState} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {NavBar} from "./NavBar";
import {View} from "./View";
import {Create} from "./Create";
import {Login} from "./Login";
import {Form1} from "./Form1";
import {Form2} from "./Form2";
import {Form3} from "./Form3";

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
                <Route exact path="/form1" component={Form1}/>
                <Route exact path="/form2" component={Form2}/>
                <Route exact path="/form3" component={Form3}/>
            </Switch>
            </div>
        </Router>
    );
}

export default App;
