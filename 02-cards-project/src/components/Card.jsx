import React, { useState } from 'react'
import {Bookmark,BookmarkCheck} from 'lucide-react'

function Card(props) {
    const [check, setCheck] = useState(false);
  return (
    <div className='card'>
        <div>
                    <div className="top">
            <img src={props.logo} alt="" />
            <button onClick={()=>setCheck(!check)}>save {(check && <BookmarkCheck size={15} />)||<Bookmark size={15} />}  </button>
        </div>
        <div className="center">
            <h3>{props.name} <span>{props.posted}</span></h3>
        
            <h2>{props.position}</h2>

            <div className='tag'>
                <h4>{props.type}</h4>
                <h4>{props.level}</h4>
            </div>
        </div>
        </div>

        <div className="bottom">
            
                <div>
                     <h3>{props.salary}</h3>
                     <p>{props.location}</p>

                </div>
                <button>Apply now</button>
          
           
            
        </div>
    </div>
  )
}

export default Card