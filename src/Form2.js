import React from 'react';

export class Form2 extends React.Component {
    constructor(props) {
        super(props);
        this.student_data = props.location.data;
    }

    openForm3() {
        this.props.history.push({
            pathname:'/form3',
            data:this.student_data
        });
    }

    render() {
        return (
                <div className="container">
                    <h1>Form2</h1>
                    <div className="form-group">
                        <label htmlFor="name">Email:</label>
                        <input onChange={event => {
                            this.student_data.email = event.target.value
                        }} type="text" className="form-control" id="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Degree:</label>
                        <input onChange={event => {
                            this.student_data.degree = event.target.value
                        }} type="text" className="form-control" id="age"/>
                    </div>
                    <button className="btn btn-success" onClick={() => this.openForm3()}>Next</button>
                </div>
        )
    }
}