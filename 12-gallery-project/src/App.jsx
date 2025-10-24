import React, { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDot } from "react-loading-indicators";
import Gallery from "./components/Gallery";

function App() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1)

  useEffect(
    () => {getData()},

    [page]
  );

  const getData = async () => {
    const { data } = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=12`
    );

    setPhotos(data);
    // console.log(data);
  };

  return (
    <>
      <div className="h-screen overflow-auto bg-black w-full p-4 text-white">
        {/* <div className="flex justify-center">
          <button
            onClick={getData}
            className="bg-amber-500 px-6 py-3  mb-4 active:scale-95 rounded text-2xl font-medium"
          >
            Get data
          </button>
        </div> */}
        {photos.length != 0 ? (
          <div className="flex flex-wrap gap-5 mt-4 justify-center mb-4">
            {photos.map((pic,idx) => (

             <Gallery key={idx} pic={pic}/>
            ))}
          </div>
        ) : (
          <div className="flex justify-center flex-col  items-center font-bold h-full">
            <ThreeDot
              className="r text-lg"
              color="#f9c600"
              size="large"
              text=""
              textColor="#4f46e5"
            />
            <h2 className="mt-2 font-bold text-2xl">Loading</h2>
          </div>
        )}

         <div className="flex justify-center items-center gap-4 p-4 text-black">
        {(page==1)?"" :<button onClick={()=>{setPage(page-1), setPhotos([])}} className="bg-amber-400 rounded px-6 py-2 cursor-pointer active:scale-95 text-lg font-medium">Prev</button>}
        <h4 className="text-white">Page {page}</h4>
        <button onClick={()=>{setPage(page+1),setPhotos([])}} className="bg-amber-400 rounded  px-6 py-2 text-lg cursor-pointer active:scale-95 font-medium">Next</button>
      </div>
      </div>
     
    </>
  );
}

export default App;
