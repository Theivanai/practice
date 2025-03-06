import React, { useState, useEffect } from 'react'

function Websocket() {
    const [messages, setmessages] = useState([[]]);

    useEffect(() => {
        const socket = new Websocket("wss://echo.websocket.org");

        socket.onmessage = (event) => {
            setmessages((prev) => [prev, event.data]);
        };

        return () => socket.close();
    }, []);

    return (
        <div>
            <h4>Websocket</h4>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
        </div>
    )

}

export default Websocket;