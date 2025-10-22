import  { useState } from 'react'

function Lesson4() {
    const [Num, setNum] = useState(10);
    const handleChange=()=>{
        setNum(prev=>(prev+1));
        setNum(prev=>(prev+2));
        setNum(prev=>(prev+3)); // Correct way to update state based on previous state. This is a batch update approach. We cannot update state directly when updating state multiple times in a single event handler.
    }
  return (
    <div>
            <h1>{Num}</h1>
            <button onClick={handleChange}>increase</button>

    </div>
  )
}

export default Lesson4