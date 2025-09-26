import React, { useState, useRef, useEffect } from 'react';
// Using lucide-react for icons (install: npm install lucide-react)
import { Send, X, Bot } from 'lucide-react'; 

// --- Initial Messages ---
const initialMessages = [
  {
    text: "Welcome to PMIS Chatbot. Type 'Hi' to get started.",
    sender: 'bot',
  },
];

const AiChatbot = () => {
  // State for chat visibility, messages, and input
  const [isOpen, setIsOpen] = useState(false); // Start with closed, as is common practice
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  
  // Ref for auto-scrolling
  const messagesEndRef = useRef(null); 

  // Auto-scroll to the bottom of the messages container
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    // 1. Add user message
    const newUserMessage = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInput('');

    // 2. Simulate a bot response
    setTimeout(() => {
      let botResponseText = `I received your message: "${input.trim()}". I am a mock assistant. Please contact the official PMIS support for actual assistance.`;

      if (input.trim().toLowerCase() === 'hi') {
        botResponseText = "Hello! I am the PMIS Chatbot. How can I assist you with your internship or bank account seeding queries today?";
      }

      const newBotMessage = { text: botResponseText, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, newBotMessage]);
    }, 800);
  };

  // --- Render the main button if the chat is closed ---
  if (!isOpen) {
    return (
      <button 
        className="fixed bottom-5 right-5 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 z-50"
        onClick={toggleChatbot}
        aria-label="Open Chatbot"
      >
        <Bot size={30} />
      </button>
    );
  }

  // --- Render the full chatbot interface ---
  return (
    <div 
      // Main container styling: fixed position, size, shadow, background, z-index
      className="fixed bottom-5 right-5 w-80 h-[450px] flex flex-col bg-white rounded-lg shadow-2xl border border-gray-200 z-50"
    >
      {/* --- Chatbot Header --- */}
      <div className="flex justify-between items-center p-3 bg-blue-500 text-white rounded-t-lg">
        <span className="font-bold text-lg">PMIS Chatbot</span>
        <button 
          className="p-1 hover:bg-blue-600 rounded-full transition" 
          onClick={toggleChatbot} 
          title="Close Chat"
        >
          <X size={18} />
        </button>
      </div>

      {/* --- Chatbot Messages Area --- */}
      <div className="flex-grow overflow-y-auto p-4 space-y-3 bg-gray-50">
        {messages.map((message, index) => (
          <div
            key={index}
            // Message alignment and width
            className={`flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              // Bubble styling
              className={`max-w-[80%] p-3 rounded-xl text-sm leading-snug shadow-md ${
                message.sender === 'user' 
                  ? 'bg-gray-800 text-white rounded-br-sm' // Dark background for user
                  : 'bg-blue-500 text-white rounded-tl-sm' // Blue background for bot (matches screenshot)
              }`}
            >
              {/* Prepend 'B' for bot as seen in the image (optional) */}
              {message.sender === 'bot' && (
                <span className="inline-block w-4 h-4 text-center text-xs font-bold mr-1 rounded-full bg-white text-blue-500">B</span>
              )}
              {message.text}
            </div>
          </div>
        ))}
        {/* Empty div for auto-scrolling */}
        <div ref={messagesEndRef} /> 
      </div>

      {/* --- Chatbot Input Area --- */}
      <form className="p-3 border-t border-gray-200 flex" onSubmit={handleSend}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type 'Hi' to get started"
          className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm mr-2"
        />
        <button 
          type="submit" 
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={input.trim() === ''}
          aria-label="Send Message"
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default AiChatbot;