import React, { useState, useMemo } from "react";

function Usememo_ex() {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(10)

    const multicountMemo = useMemo(function multicount() {
        console.log('multicount')
        return count * 5
    }, [count])

    return (
        <div>
            <h1>11.</h1>
            <h2>- useMemo Hook!</h2>
            <h2>Count: {count}</h2>
            <h2>Item: {item}</h2>
            <h2>{multicountMemo}</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <div><button onClick={() => setCount(count + 1)}>Update Count</button></div>
                <div><button onClick={() => setItem(item + 1)}>Update Item</button></div>
            </div>
        </div>
    )
}

export default Usememo_ex
