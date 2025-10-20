import React from 'react'
import Card from './components/Card'

function App() {

  //we learn array map function to render multiple cards dynamically ans how props works in react   

  const users=[
    { name:"momo", age:21},
    { name:"janmajay", age:22},
    { name:"rahul", age:20},
    { name:"sachin", age:23},
    { name:"rohan", age:24},
    { name:"sonu", age:25},
  ];
  return (
    <div className='parent'>
      <Card/>
      
       {users.map((user)=>(
        <Card name={user.name} age={user.age}/>
      ))} 

    </div>
  )
}

export default App