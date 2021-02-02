import React from 'react';

export class Form1 extends React.Component {
    constructor(props) {
        super(props);
        this.student_data = {name: '', age: '', email:'', degree:''};
        console.log(this.student_data);
    }

    openForm2() {
        this.props.history.push({
            pathname:'/form2',
            data:this.student_data
        });

    }

    render() {
        return (
            <div className="container">
                <h1>Form 1</h1>
                <div className="form-group">
                    <label htmlFor="name">Student Name:</label>
                    <input onChange={event => {
                        this.student_data.name = event.target.value
                    }} type="text" className="form-control" id="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="age">Student Age:</label>
                    <input onChange={event => {
                        this.student_data.age = event.target.value
                    }} type="text" className="form-control" id="age"/>
                </div>
                <button className="btn btn-success" onClick={() => this.openForm2()}>Next</button>
            </div>
        )
    }
}