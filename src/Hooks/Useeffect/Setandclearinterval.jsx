import React, { useEffect, useState } from 'react'

const Setandclearinterval = () => {
    const [seconds, setseconds] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            setseconds((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return <p>countdown:{seconds}s</p>
};
export default Setandclearinterval