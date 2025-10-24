import React, { useEffect, useState } from 'react'

function App() {

  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100);

  useEffect(()=>{
    console.log("changing");
    
  },[num])
  
  return (
    <div>
      <h2>num1: {num}</h2>
      <h2>num2: {num2}</h2>

      <button onClick={()=>setNum(num+1)}>click me</button>
       <button onClick={()=>setNum2(num2+1)}>click me</button>
      
      
    </div>
  )
}

export default App;