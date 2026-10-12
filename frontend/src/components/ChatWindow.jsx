import { useState } from "react";

const API_URL = 'http://localhost:3000';

function ChatWindow() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    function sendMessage(event) {
        event.preventDefault();

        const text = input.trim();
        if (text === '' || loading) {
            return;
        }

        const newMessages = [
            ...messages,
            {
                role: 'user',
                content: text
            }
        ];

        setMessages(newMessages);
        setLoading(true)
        setError('');
        setInput('');

        fetch(`${API_URL}/ai/chat`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                messages: newMessages
            })
        }).then(response => {
            return response.json();
        }).then(jsonData => {

            if (!jsonData.success) {
                throw new Error(jsonData.message);
            }

            const aiReply = jsonData.data.reply;

            setMessages([
                ...newMessages,
                {
                    role: 'assistant',
                    content: aiReply
                }
            ]);
        }).catch(error => {
            setError(error.message);
        }).finally(() => {
            setLoading(false);
        });
    }

    return (
        <div className="chat-window">
            <h2>Assistente del catalogo</h2>

            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`chat-message chat-message-${message.role}`}>
                        {message.content}
                    </div>
                ))}
            </div>

            {error && <p className="chat-error">{error}</p>}

            <form className="chat-form" onSubmit={sendMessage}>
                <input
                    className="chat-input"
                    type="text"
                    placeholder="Scrivi un messaggio..."
                    value={input}
                    onChange={(event) => {
                        setInput(event.target.value)
                    }}
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Attendi...' : 'Invia'}
                </button>
            </form>
        </div>
    );
}

export default ChatWindow;
