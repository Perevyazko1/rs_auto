import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const tg = (window as any).Telegram.WebApp
  const [init, setInit] = useState(tg?.initData)

  return (
    <div style={{width: "100px", wordWrap: "break-word" }}>
      {init}
    </div>
  );
}

export default App;
