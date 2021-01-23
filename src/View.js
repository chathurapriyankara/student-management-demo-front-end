import React from 'react';
import Axios from 'axios';

export class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data:''};
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    //Call this on page load
    componentDidMount() {
        Axios.get('http://localhost:3001/get-all').then((res)=>{
            this.setState({data:res.data});
            console.log(res.data);
        });
    }

    update(id) {
        const name = prompt("Enter new age: ");
        Axios.put('http://localhost:3001/update',{
            newName: name,
            id:id
        });
    }

    delete(id) {
        Axios.delete(`http://localhost:3001/delete/${id}`).then(()=>{
            const val = this.state.data.filter((val)=>{
                return val._id !== id
            });
            this.setState({data:val});
        });
    }

    render() {
        return(<div className="container">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Age</th>
                                <th>Degree</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Array.from(this.state.data).map((val)=>{
                            return(
                                <tr>
                                    <td>{val.name}</td>
                                    <td>{val.age}</td>
                                    <td>{val.degree}</td>
                                    <td><button onClick={()=>this.update(val._id)} className="btn btn-primary">Update</button></td>
                                    <td><button onClick={()=>this.delete(val._id)} className="btn btn-danger">Delete</button></td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}