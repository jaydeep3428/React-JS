import React from "react";

class Component_did_update extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    componentDidUpdate(preProps, preState, snapshot) {
        console.log("componentDidUpdate", preState)
    }
    render() {
        return (
            <div>
                <h1>8.</h1>
                <h2>- componentDidUpdate Method! </h2>
                <h2>{this.state.count}</h2>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Update</button>
            </div>
        )
    }
}

export default Component_did_update
