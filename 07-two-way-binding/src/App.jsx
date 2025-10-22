import React, { useState } from 'react'

function App() {
  const [title, setTitle] = useState('')
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Sucessfully submmited", title);
    setTitle('');
    

  }
  return (
    <div>
      <form onSubmit={(e)=>(handleSubmit(e))}>
        <input onChange={(e)=>{console.log( e.target.value); setTitle(e.target.value)}
        } type="text" placeholder='name' value={title} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App