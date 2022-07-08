import React from 'react';
import './App.css';
import svg from  './assets/note.png';

function App() {
  return (
    <div className="app_container">
        <div style={{position: "absolute"}}>
            <img style={{height: 200, width: 200 }} src={svg} alt={'im'} />
            <img style={{height: 200, width: 200 }} src={svg} alt={'im'} />
            <img style={{height: 200, width: 200 }} src={svg} alt={'im'} />
            <img style={{height: 200, width: 200 }} src={svg} alt={'im'} />
        </div>
    </div>
  );
}

export default App;
