import axios from 'axios'
import { useState } from 'react';


function Lesson2() {
    const [names, setNames] = useState([])

    const handleData=async ()=>{
        // const users = await axios.get('https://jsonplaceholder.typicode.com/users');
        // console.log(users);
        // console.log(users.data);
        
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
        
        console.log(data);

        setNames(data);
       
        
        
    }
    

    
  return (
    <div>
        <button onClick={handleData}>Get Data</button>

        {names.map((item,idx)=>(
            <div key={idx}>
                <h1>{item.name}</h1>
            </div>
        ))}
        
    </div>
  )
}

export default Lesson2