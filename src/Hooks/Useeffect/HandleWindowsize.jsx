import React, { useEffect, useState } from 'react'

const HandleWindowsize = () => {
    const [width, setwidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setwidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
}
export default HandleWindowsize;