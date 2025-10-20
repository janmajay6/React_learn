import { useState } from 'react'

function App() {
  const [name,setName] = useState('User');
   const [name1,setName1] = useState('User1');

  return (
    <div>
      <h1>Welcome {name} <br /></h1>
      <h2>{name1}</h2>

      

    <button onClick={()=>setName('Janmajay')}>Login</button>
    <input onChange={(e)=>setName1(e.target.value)} type="text" placeholder='name' />
 
    </div>
  
  )
}

export default App