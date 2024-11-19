import React, { useState } from 'react';
import './App.css';

function App() {
  const initialMessage = 'Clique na Ação Abaixo para Exibir a Mensagem!';
  const [message, setMessage] = useState(initialMessage);

  const changeMessage = () => {
    if (message === initialMessage) {
      setMessage('Olá,mundo!');
    } else {
      setMessage('Fim!');
    }
  };

  const resetMessageAndScrollToTop = () => {
    setMessage(initialMessage); 
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <button onClick={changeMessage}>Clique para Alterar a Mensagem!</button>
        <br />
        <button onClick={resetMessageAndScrollToTop}>Voltar ao Início</button>
      </header>
    </div>
  );
}

export default App;
