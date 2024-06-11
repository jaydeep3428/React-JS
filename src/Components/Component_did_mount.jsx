import React from "react";

class Component_did_mount extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Anil'
        }
    }
    render() {
        return (
            <div>
                <h1>7.</h1>
                <h2>- componentDidMount Method!</h2>
                <h2>{this.state.name}</h2>
                <button onClick={() => this.setState({ name: 'Sahu' })}>Update</button>
            </div>
        )
    }
}

export default Component_did_mount
