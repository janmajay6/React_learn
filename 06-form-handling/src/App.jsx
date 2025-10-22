import React from 'react'

function App() {
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("submnited");
    

  }
  return (
    <div>
      <form onSubmit={(e)=>(handleSubmit(e))}>
        <input type="text" placeholder='name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App