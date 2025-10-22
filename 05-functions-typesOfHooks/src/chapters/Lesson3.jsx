import React, { useState } from 'react'

function Lesson3() {
    const [Num, setNum] = useState([1,2,3,4]);

    const handleChange= ()=>{
       const newArry=[...Num,5];
       console.log(newArry);
       console.log(newArry.length);
       
       
       newArry.push(6);
       console.log(newArry);
       console.log([...newArry,7]);

       setNum(newArry);
       
       
    }
  return (
    
    <div>
         <h1>{Num}</h1>
         <button onClick={handleChange}>Change</button>

        
    
    </div>
  )
}

export default Lesson3