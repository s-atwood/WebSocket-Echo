import React, { useState, useEffect } from "react"


function Form() {
    const [message, setMessage] = useState('')
    const [ws, setWs] = useState(null)

    // Create WebSocket client instance
    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8000')
        setWs(ws)

        return() => {
            ws.close()
        }
    }, [])

    // Sends message to server
    const sendMessage = (event) => {
        event.preventDefault()
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(message)
        }
    }

    // Triggers browser alert when message received from server
    useEffect(() => {
        if (!ws) return
        ws.onmessage = (event) => {
            alert(`${event.data}`)
        }
    }, [ws])

    return (
        <>
        <h1>WebSocket Echo</h1>
        <form onSubmit = {sendMessage}>
            <input
                className="textfield"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
            />
            <button type="submit">Send</button>
        </form>
        </>
    )
}

export default Form