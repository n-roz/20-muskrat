import React from 'react'
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from ".omponents/Footer";
import './App.css';
import Nav from './components/Nav';






// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import Footer from './components/Footer';
// import Header from './components/Header';
// import Navigation from './components/Navigation';
// import Project from './components/Projects';

// Let's add our own component to the App component. First, get rid of the starter JSX in App() and replace it with an empty <div>
function App() {
  return (
    <div>
      <main>
        <header>
          <Nav></Nav>
        </header>
        <<About></About>>
      </main>
    </div>
  );
}

export default App;


// function App() {
//   return (
//     <main>

//       {/* <!- Hero Section --> */}
//       <div class="hero">
//         <nav>
//           <h2 class="logo">Portfolio</h2>
//           <ul>
//             <li><a href="#about-me">About Me</a></li>
//             <li><a href="#my-projects">My Projects</a></li>
//             <li><a href="#contact-me">Contact Me</a></li>
//           </ul>
//         </nav>

//         <div class="content">
//           <h4>Hello, my name is</h4>
//           <h1>Naomi R.</h1>
//           <div class="newslatter"></div>
//         </div>
//       </div>

//       {/* <!-- About Section --> */}
//       <section class="about">
//         <div class="main" id="about-me">
//           {/* <img src="assets/IMG_4886.jpg"> */}
//           <div class="about-me">
//             <h5>About Me</h5>
//             <h5>Developer & Designer</h5>
//             <h6>I am an entry level front-end web developer currently based in Colorado. I received my B.A. from the University of North Carolina in Chapel Hill in 2015. I look forward to using my new coding skills to make a difference.</h6>
//           </div>
//         </div>
//       </section>

//       {/* <!-- My Projects Section --> */}
//       <div class="service">
//         <div class="title" id="my-projects">
//           <h2>My Projects</h2>
//         </div>
//         <div class="box">
//           <div class="card">
//             <h5>Password Generator</h5>
//             <div class="pra">
//               {/* <img src="assets/password-generator.png" class="responsive"> */}
//               <p>HTML, CSS, & JavaScript</p>
//               <p style="text-align: center;">
//                 <a class="button" href="https://github.com/n-roz/password-generator">Take me to GitHub</a>
//               </p>
//             </div>
//           </div>
//           <div class="card">
//             <h5>Movie Finder Pro</h5>
//             {/* <img src="assets/Screen Shot 2022-11-02 at 10.50.32 AM.png" class="responsive"> */}
//             <div class="pra">
//               <p>Bootstrap, APIs, & More</p>
//               <p style="text-align: center;">
//                 <a class="button" href="https://github.com/ReeceDevenney/Movie-Finder-Pro">Take me to GitHub</a>
//               </p>
//             </div>
//           </div>
//           <div class="card">
//             <h5>Pokedex Group Project</h5>
//             {/* <img src="assets/Screen Shot 2022-11-01 at 9.03.07 AM.png" class="responsive"> */}
//             <div class="pra">
//               <p>APIs, Handlebars, & More</p>
//               <p style="text-align: center;">
//                 <a class="button" href="https://github.com/zasen01/smooth-ops">Take me to GitHub</a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <!------Contact Me------> */}
//       <div class="contact-me" id="contact-me">
//         <a class="button-two" href="mailto:naomiroznik@gmail.com">naomiroznik@gmail.com</a>
//       </div>

//       {/* <!------footer start---------> */}
//       <footer>
//         {/* <img src="assets/Screen Shot 2022-10-06 at 6.26.54 PM.png" height="50" width="50"> */}


//       </footer>
//     </main>
// </html >

// }

// export default App;