import React,{createContext,usecontext} from 'react'

const ThemeContext=createContext("light");

const ThemeDisplay = () => {
    const theme = usecontext(ThemeContext);
    return <h3>current theme:{theme}</h3>;
};

const App = () => {
    return (
        <ThemeContext.Provider value="dark">
            <ThemeDisplay />
        </ThemeContext.Provider>
    )

}


export default App