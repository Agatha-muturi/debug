// buggy code
// import React from "react";

// export default function Child({ name }) {
//   return (
//     <div>
//       <h2>Child Component</h2>
//       <p>Hello, {name.toUpperCase()}!</p> {/* ❌ name might be undefined */}
//     </div>
//   );
// }
// corrected bug
import React from 'react';
export default function Child({name}) {
    return(
        <div>
            <h2>Child component</h2>
            <p>Hello, {name|| 'Guest'.toUpperCase()}!</p>
        </div>
    )
}
