import React, { useState } from "react";

function Input_field() {
    const [data, setData] = useState(null)
    const [print, setPrint] = useState(false)
    function getData(val) {
        setData(val.target.value)
    }
    return (
        <div>
            <h1>2.</h1>
            <h2>- Get Input Box Value And Print The Value!</h2>
            {
                print ?
                    <h2>{data}</h2>
                    : null
            }
            <input type="text" onChange={getData} /> <br /> <br />
            <button onClick={() => setPrint(true)}>Print</button>
        </div >
    );
}

export default Input_field