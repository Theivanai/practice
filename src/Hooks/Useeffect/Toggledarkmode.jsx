import React, { useEffect, useState } from 'react'
import './Toggledarkmode.css'

const Toggledarkmode = () => {
    const [dark, setdark] = useState(false)

    useEffect(() => {
        if (dark) {
            document.body.classList.add("darkmode")
        }
        else {
            document.body.classList.remove("darkmode")
        }
    }, [dark])

    const handleHome = () => {
        setdark(!dark)
    }

    return (
        <div>
            
            <button onClick={handleHome} className='toggledarkmode'>{dark ? 'Light mode' : 'Dark mode'}</button>
        </div>
    )
}
export default Toggledarkmode;