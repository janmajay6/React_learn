import React, { useState } from 'react'

// useState in Object

function Lesson2() {
    // const [Num, setNum] = useState(10);
    const [Users, setUsers] = useState({name:'Janmajay', age:24});

    // const  handleChange = ()=>{
    //     setNum(20);
    //     console.log(Num);
        
    // }

    const handleUser= ()=>{
        // console.log({...Users});
        
        // const newUser = {...Users};
        // newUser.name = 'John Doe';
        // setUsers(newUser);
        // console.log({...newUser, nickname:'Johny'});
        setUsers({...Users, name:'John Doe'}); // Correct way to update name 
        
        

        setUsers(prevState => ({  ...prevState, age: 25 })); // Correct way to update age based on previous state 
    }
  return (
    <div>
        {/* <h1>{Num}</h1>
         <button onClick={handleChange}>Change</button>
        <br /> */}
        <h2>{Users.name} and {Users.age}</h2>
         <button onClick={handleUser}>Change name</button>
       
    </div>
  )
}

export default Lesson2