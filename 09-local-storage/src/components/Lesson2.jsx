import React from 'react'

function Lesson2() {

    const data1 = {
        name: "John",
        age: 30,
        city: "New York"
    }

    console.log(data1);
    

    localStorage.setItem('data1',data1);
    localStorage.setItem('data01', JSON.stringify(data1));

    const data2 = [
        { name: "John", age: 30, city: "New York" },
        { name: "Jane", age: 25, city: "Los Angeles" },
        { name: "Mike", age: 35, city: "Chicago" }
    ]

    localStorage.setItem('data2',data2);
    localStorage.setItem('data02',JSON.stringify(data2));

    const data001 = JSON.parse( localStorage.getItem('data01'));
    console.log(data001);

    const data002 =JSON.parse( localStorage.getItem('data02'));
    console.log(data002);
  

  return (
    <div>

        {data002.map((item,idx)=>(
            <div key={idx}>
                <h3>{item.name}</h3>
                </div>
                ))}
       
    </div>
  )
}

export default Lesson2