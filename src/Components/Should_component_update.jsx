import React from "react";

class Should_component_update extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate", this.state.count)
        return true
    }
    render() {
        return (
            <div>
                <h1>9.</h1>
                <h2>- shouldComponentUpdate Method!</h2>
                <h2>{this.state.count}</h2>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Update Counter!</button>
            </div>
        )
    }
}

export default Should_component_update
