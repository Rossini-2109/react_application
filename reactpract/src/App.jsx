// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react';
// import './App.css';
// import Title from './Title';

// const App = () => {
//   const [data, setData] = useState([]);
//   const [count, setCount] = useState(0);
//   const [loading,setloading] =useState(true)

//   useEffect(() => {
//     const fetchData = async () => {
//       try{
//       const response = await fetch('https://randomuser.me/api/?results=10');
//       console.log(response.status)
//       const result = await response.json();
//       setData(result.results);
//       }
//       catch(error)
//       {
// console.log(error.message)

//       }
//       finally{
//         setloading(false);
//       }
      
//     };
   
   
//     fetchData();
//   }, []);

//   return (
//     loading ? <><h1>Page is loading</h1></>:
//     <div className="container">
//       <Title count={count} />
//     <button onClick={() => setCount(count + 1)}>Click me</button>
//       <h1 className="title">User Details</h1><br></br>
//       <marquee direction="right" scrollamount= "10">User Information from API</marquee>
//       <hr></hr>

//       <div className="user-grid">
//         {data.map((item, key) => {
//           return (
//             <div className="box" key={key}>
              
//               <img src={item.picture.large} alt="User" /><br></br>

{/*               
              <h3>Name: {item.name.first} {item.name.last}</h3> */}
//               <label for="name">Name: </label>
//               <input value={data.name} onChange={(e) => setName(e.target.value)}/>
//               <p>Your name is:{name}</p>
//               <p>Email: {item.email}</p>
//               <p>Phone: {item.phone}</p>
//               <p>Gender: {item.gender}</p>
//               <p>City: {item.location.city}</p>
//               <p>State: {item.location.state}</p>
//               <p>Country: {item.location.country}</p>
                            
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default App;

import { useState } from "react";
import './App.css';
function App() {
  const [form, setForm] = useState({
    firstName: "",email: "",age: ""});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>User Details</h1>
      <label for="name">Name: </label>
      <input type="text" placeholder="First Name"
        name="firstName" value={form.firstName}
        onChange={handleChange} />
      <br /><br />
        <label for="email">Email-id: </label>
      <input type="email" placeholder="Email"
        name="email" value={form.email}
        onChange={handleChange} />
      <br /><br />
        <label for="age">Age: </label>
      <input type="number" placeholder="Age"
        name="age" value={form.age}
        onChange={handleChange} />
      <br /><br />

      <button onClick={() => setSubmitted(true)}>
        Submit
      </button>

   {submitted && (
        <div>
          <h2>Submitted Details</h2>
          <p>First Name: {form.firstName}</p>
          <p>Email: {form.email}</p>
          <p>Age: {form.age}</p>
        </div>
      )} 
    </div>
  );
}

export default App;