import React from 'react';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;