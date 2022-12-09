import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Project from './components/Project';


function App() {
  return (
    <div>
    <main>
      <Header>
        <Navigation></Navigation>
      </Header>
      <Project>
        <section className='about'>
          <h2 className='subheader'>About Me</h2>
          <div>Naomi is...</div>
        </section>
      </Project>
      <Footer />
    </main>
    </div>
  );
}

export default App;