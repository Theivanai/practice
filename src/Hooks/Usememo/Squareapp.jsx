// import React, { useMemo } from 'react'

// const Squareapp = useMemo(()=> {
//     return number*number;
// },[number]);

// export default Squareapp


import React, { useState, useMemo } from "react";

const App = () => {
    const [number, setNumber] = useState(0);
    const [theme, setTheme] = useState("light");

    // useMemo: Compute square only when number changes
    const squaredValue = useMemo(() => {
        console.log("Calculating square..."); // Debugging purpose
        return number * number;
    }, [number]);

    return (
        <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "20px" }}>
            <h2>Math Computation</h2>
            <p>Square of {number}: {squaredValue}</p>
            <button onClick={() => setNumber(prev => prev + 1)}>Increment Number</button>
            <br /><br />
            <button onClick={() => setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")}>Toggle Theme</button>
        </div>
    );
};

export default App;

