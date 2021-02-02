import React from 'react';

export class Form3 extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.location.data);
    }

    render(){
        return(
            <div>
                <h1>Form3</h1>
            </div>
        );
    }
}