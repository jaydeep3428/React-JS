import React, { useRef } from "react";

function Useref_ex() {
    let inputRef = useRef(null)

    function handleInput() {
        console.warn('function call')
        inputRef.current.style.color = 'red'
    }

    return (
        <div>
            <h1>12.</h1>
            <h2>- useRef Hook!</h2>
            <input type="text" ref={inputRef} /> <br /><br />
            <button onClick={handleInput}>Click Me!</button>
        </div>
    )
}

export default Useref_ex
