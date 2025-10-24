import React from 'react'
import { ThreeDot } from "react-loading-indicators";

function Gallery(props) {
    // console.log(props);
    
  return (
    <>
         
              <div>
                <a href={props.pic.url} target="_blank">
                  <div className="h-65 w-65 bg-amber-50 overflow-hidden rounded-2xl ">
                    <img
                      className="h-full w-full object-cover "
                      src={props.pic.download_url}
                      alt=""
                    />
                  </div>
                  <h2 className="text-xl font-bold">{props.pic.author}</h2>
                </a>
              </div>
          
    </>
  )
}

export default Gallery