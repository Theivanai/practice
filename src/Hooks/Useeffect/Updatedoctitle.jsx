import React, { useEffect, useState } from 'react'

const Updatedoctitle = () => {

    const [count, setcount] = useState(0);

    useEffect(() => {
        document.title = `count: ${count}`;
    }, [count]);


    return (
        <div>
            
            <button onClick={() => setcount(count + 1)}>Count: {count}</button>
        </div>
    );
};

export default Updatedoctitle