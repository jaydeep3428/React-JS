import React from "react"

class Constructor_ex extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'Sir! How Are You!'
        }
    }

    render() {
        return (
            <div>
                <h1>5.</h1>
                <h2>- Constructor Method!</h2>
                <h2>Hello {this.state.name}</h2>
            </div> 
        )
    }
}
export default Constructor_ex
