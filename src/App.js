import React from 'react';
import './styles.css';
import Header from './components/Header';
import Main from './pages/main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
