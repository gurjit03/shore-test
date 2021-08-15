import React from 'react';
import { Provider, createStore } from './config/store';
import AppRouter from './Router';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider createStore={createStore}>
        <AppRouter />        
      </Provider>
    </div>
  );
}

export default App;
