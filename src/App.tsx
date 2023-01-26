import React from 'react';

//styles
import styles from "./App.module.css"

//components
import Footer from './components/Footer';
import Header from './components/Header';



function App() {
  return (

    <div>
      <Header />
      <main className={styles.main}>
      <h1>conteudo</h1>
      </main>
      <Footer />
    </div>
    
  );
}

export default App;
