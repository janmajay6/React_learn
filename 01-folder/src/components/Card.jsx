import React from 'react'

function Card(props) {
  
  return (
    <div className='cards'>
        <img src="https://cdn.pixabay.com/photo/2022/09/17/17/54/monkey-7461483_1280.jpg" alt="" />
        <h1>{props.name || "janmajay"}</h1>
        <p>{props.age ||"Lorem ipsum dolor sit amet consectetur adipisicing elit."}</p>
        <button>View Profile</button>
    </div>
  )
}

export default Card