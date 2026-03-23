import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ContentA } from './ContentA';
import { ContentB } from './ContentB';

function App() {
  return (
    <div className="App">
      <Header />

      <main style={{ padding: '20px' }}>
        <ContentA />
        <hr />
        <ContentB />
      </main>

      <Footer />
    </div>
  );
}

export default App;