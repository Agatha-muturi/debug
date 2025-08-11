// buggy code
// import React, { useState } from "react";
// import Child from "./Child";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [username, setUsername] = useState(); // ❌ Missing default value

//   const increment = () => setCount(count + 1);

//   return (
//     <div>
//       <h1>Debugging Example</h1>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increase</button>

//       {/* Passing prop incorrectly */}
//       <Child namee={username} /> 
//     </div>
//   );
// }

// corrected code
import {useState} from 'react';
import Child from './components/child';
export default function App(){
  const [count, setCount]=useState(0);
  const username ='Guest';
  const increment =()=>setCount(count+1);
  return(
    <div>
      <h1>Degugging example</h1>
      <p>count: {count}</p>
      <button onClick= {increment}>increase</button>
      <Child name= {username}/>
    </div>
  )
}