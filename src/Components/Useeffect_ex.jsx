import React, { useEffect, useState } from "react";

function Useeffect_ex() {
    const [data, setData] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('count useEffect called!')
    }, [count])

    useEffect(() => {
        console.log('data useEffect called!')
    }, [data])

    useEffect(() => {
        console.log('file mount first time called!')
    }, [])

    useEffect(() => {
        console.log('both called!')
    }, [count, data])

    return (
        <div>
            <h1>10.</h1>
            <h2>- useEffect Hook!</h2>

            <h2>Data: {data}</h2>
            <h2>Count: {count}</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <div><button onClick={() => setData(data + 1)}>Update Data</button></div>
                <div><button onClick={() => setCount(count + 1)}>Update Count</button></div>
            </div>
        </div>
    )
}

export default Useeffect_ex
