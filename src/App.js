import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
    }
  }, []);

  const handleClick = (event) => {
    const x = event.clientX;
    const y = event.clientY;

    const newMessage = { id: Date.now(), text: 'чабба', position: { left: x + 'px', top: y + 'px' } };
    setMessages([...messages, newMessage]);
    setTimeout(() => {
      setMessages(messages => messages.filter(msg => msg.id !== newMessage.id));
    }, 2000); // Удалить сообщение через 2 секунды
  };

  return (
    <div className="App" onClick={handleClick}>
      <header className="App-header">
        <button className="animated-button">
          Нажми меня
        </button>
        <div className="messages-container">
          {messages.map(msg => (
            <div key={msg.id} className="message" style={{ left: msg.position.left, top: msg.position.top }}>
              {msg.text}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
