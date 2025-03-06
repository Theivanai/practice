import React, { useState, useCallback } from 'react'

const Stableclickhandlers = () => {
    const [count, setcount] = useState(0);

    //usecallback memoize increment function to prevent recreation on every render
    const increment = useCallback(() => {
        setcount(prevcount => prevcount + 1);
    }, []);
    return (
        <div>
            <h3>counter</h3>
            <p>count:{count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Stableclickhandlers