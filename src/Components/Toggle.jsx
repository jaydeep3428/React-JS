import React, { useState } from "react"

function Toggle() {
    const [status, setStatus] = useState(true)
    return (
        <div>
            <h1>4.</h1>
            <h2>- Hide And Show Element Using useState, Onclick Event!</h2>
            {
                status ?
                    <h2>Hello React</h2>
                    : null
            }

            {/* <button onClick={() => setStatus(false)}>Hide</button> */}
            <button onClick={() => setStatus(!status)}>Toggle</button>
        </div>
    )
}

export default Toggle