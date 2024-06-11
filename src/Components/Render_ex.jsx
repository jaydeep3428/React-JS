import React from "react";

class Render_ex extends React.Component {
    render() {
        console.log("Render Method",this.props)
        return (
            <div>
                <h1>6.</h1>
                <h2>- Render Method!</h2>
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}

export default Render_ex
