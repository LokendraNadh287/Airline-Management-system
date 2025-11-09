import React, { useState } from 'react';
import { ChatbotService } from '../services/chatbotService';

const Chatbot: React.FC = () => {
    const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        if (input.trim() === '') return;

        const userMessage = { user: input, bot: '' };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');

        const botResponse = await ChatbotService.getResponse(input);
        setMessages((prev) => {
            const updatedMessages = [...prev];
            updatedMessages[updatedMessages.length - 1].bot = botResponse;
            return updatedMessages;
        });
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-header">AI Chatbot</div>
            <div className="chatbot-messages">
                {messages.map((msg, index) => (
                    <div key={index} className="chatbot-message">
                        <div className="user-message">{msg.user}</div>
                        <div className="bot-message">{msg.bot}</div>
                    </div>
                ))}
            </div>
            <div className="chatbot-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default Chatbot;