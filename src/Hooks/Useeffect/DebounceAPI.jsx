import React, { useEffect,useState } from 'react'

const DebounceAPI = () => {
    const [query, setquery] = useState("");
    const [result, setresult] = useState("");
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (query) setresult(`searched for:${query}`);
        }, 500);

        return () => clearTimeout(timeout);
    }, [query]);
}
export default DebounceAPI;