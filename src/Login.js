import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Axios from "axios";

export function Login({setTokenFunc}) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const login = e=> {
        e.preventDefault();
        Axios.post('http://localhost:3001/login', {
            username: {username},
            password: {password}
        }).then( (res) => {
            if(res.data['login'] === 'success') {
                setTokenFunc('success');
            } else {
                alert('Username or password is incorrect');
            }
        });
    }
    return (
        <form onSubmit={login}>
            <div className="loginForm">
                <h1>Please Login</h1>
                <div className="form-group">
                    <label htmlFor="name">User Name:</label>
                    <input onChange={event => {
                        setUserName(event.target.value)
                    }} type="text" className="form-control" id="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input onChange={event => {
                        setPassword(event.target.value)
                    }} type="password" className="form-control" id="name"/>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
    )
}

//Type checking
// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// }