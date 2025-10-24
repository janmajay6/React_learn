import React from 'react'

function Lesson1() {
    localStorage.setItem('name','John Doe');
  localStorage.setItem('age',22);
  const age= localStorage.getItem('age');

  const user = localStorage.getItem('name');
  console.log(user);
  // localStorage.removeItem('age');
  // localStorage.removeItem('name');
  console.log(user);
  return (
    <div> 

      <h1>Age: {(age!=0)? age :'less age'}</h1>
      <h1>Hello {(user!='')? user: "User"}</h1>
      
      </div>
  )
}

export default Lesson1