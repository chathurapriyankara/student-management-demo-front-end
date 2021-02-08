import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {NavBar} from "./NavBar";
import {View} from "./View";
import {Create} from "./Create";
import {Login} from "./Login";
import {Form1} from "./Form1";
import {Form2} from "./Form2";
import {Form3} from "./Form3";
import {PDFDocument} from "./PDFTest";
import {AuthError} from "./AuthError";

function App() {
    const [token, setToken] = useState('');
    if (!token) {
        return <Login setTokenFunc={setToken}/>
    }
    return (
        <Router>
            <div className="container-fluid">

                <Switch>
                    <Route exact path="/auth-error" component={AuthError}/>
                    <div>
                        <NavBar/>
                        <Route path="/" exact component={View}/>
                        <Route path="/create" exact component={Create}/>
                        <Route exact path="/form1" component={Form1}/>
                        <Route exact path="/form2" component={Form2}/>
                        <Route exact path="/form3" component={Form3}/>
                        <Route exact path="/pdf" component={PDFDocument}/>
                    </div>

                </Switch>
            </div>
        </Router>
    );
}

export default App;
