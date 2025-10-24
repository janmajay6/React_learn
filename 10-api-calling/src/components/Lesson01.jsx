import React from 'react'

function Lesson01() {
    //  async function handleData (){
//     const Response= await fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => response.json())
//       .then((data) => console.log(data));
//      
    
//   }



  const handleData =async()=>{

    const response= await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);

    const data= await response.json();
    console.log(data);}
    
  return (
   
        
      <div>

      <button onClick={handleData}>get data</button>
      

    </div>
    
  )
}

export default Lesson01