import React from 'react';
// import WalkAnimation from './WalkAnimation';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      {/* <WalkAnimation /> */}
      <Navbar/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
