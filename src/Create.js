import React from 'react';
import Axios from 'axios';

export class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name:'', age:0, degree:''};
    }

    addStudent() {
        Axios.post('http://localhost:3001/insert',{
            name: this.state.name,
            age: this.state.age,
            degree: this.state.degree
        }).then(()=>{
            alert('Student added successfully!!!!')
        });
    }

    render() {
        return(<div className="container">
                <div className="form-group">
                    <label htmlFor="name">Student Name:</label>
                    <input onChange={event => {this.setState({name:event.target.value})}} type="text" className="form-control" id="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="age">Student Age:</label>
                    <input onChange={event => {this.setState({age:event.target.value})}} type="text" className="form-control" id="age"/>
                </div>
                <div className="form-group">
                    <label htmlFor="degree">Student Degree:</label>
                    <input onChange={event => {this.setState({degree:event.target.value})}} type="text" className="form-control" id="degree"/>
                </div>
                <button className="btn btn-success" onClick={()=>this.addStudent()}>Submit</button>
            </div>
        );
    }
}