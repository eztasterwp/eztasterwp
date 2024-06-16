import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Проверяем, что Web App подключен
    if (window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>мама ёж</h1>
      </header>
    </div>
  );
}

export default App;
