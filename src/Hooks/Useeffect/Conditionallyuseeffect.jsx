import React, { useEffect, useState } from 'react'

function Conditionallyuseeffect() {

    const [ischecked, setischecked] = useState(false);
    const [count, setcount] = useState(0);

    useEffect(() => {
        let timer;
        if (ischecked) {
            timer = setInterval(() => {
                setcount((prev) => prev + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [ischecked]);

    return (
        <div>
            <label>
                <input type="checkbox" checked={ischecked} onChange={(e) => setischecked(e.target.checked)}
                />Start counter
            </label>
            <p>counter:{count}</p>
        </div>
    );
}

export default Conditionallyuseeffect