// import logo from './logo.svg';
import './App.css';
import Main from "./components/Main"
import Navbar from "./components/Navbar"

// function Navbar(){
//   return (
//     <>
//         <nav>
//         <img src={logo} className="nav-img" alt="" />
//         <h3 className="nav-head">ReactFacts</h3>
//         <h4 className="title">React Project 1</h4>
//         </nav>
//         </>
//   )
// }

// function Main(){
//   return (
//       <>
//       <div className="container">
//           <h1>Fact About React</h1>
//           <ul>
//               <li>Was first released in 2013</li>
//               <li>Was originally created by Jordan Walke</li>
//               <li>Has well over 100K stars on GitHub</li>
//               <li>Is maintained by Facebook</li>
//               <li>Powers thousands of enterprise apps, including mobile apps</li>
//           </ul>
//       </div>
//       </>
//   )
// }

function App(){
  return (
    <>
    <Navbar/>
    <Main/>
    </>
  );
}

export default App;
