import React from 'react';

export class AuthError extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return(
            <div className="alert alert-danger">
                <strong>Authentication Failed</strong>
            </div>
        )
    }
}