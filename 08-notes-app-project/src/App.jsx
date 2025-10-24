
import { useState } from "react";

function App() {
  const [heading, setHeading] = useState("");
  const [detail, setDetail] = useState("");
  const[notes, setNotes]=useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Note added");
    // console.log("heading: ", heading);
    // console.log("details: ", detail);
    const newNotes= [...notes];
    newNotes.push({heading, detail});
    setNotes(newNotes);
    // console.log(newNotes);
    // console.log(notes);
    
    
    setHeading("");
    setDetail("");
  };

  const handleDelete= (idx)=>{
    // console.log(idx);
    
    const newUpdatedNotes= notes.filter((note,index)=>index!==idx); // we can also use splice method here to remove item from array e.g // const newUpdatedNotes= [...notes]; newUpdatedNotes.splice(idx,1);
    setNotes(newUpdatedNotes);

  }

  return (
    <div className="h-screen lg:flex lg:gap-20 bg-black p-12  text-white">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex lg:w-2/5 bg-amber-300 lg:mt-10 justify-between gap-5 flex-col p-7 rounded w-80 h-100 mb-10"
      >
        <h1 className="font-bold text-2xl">Add Notes</h1>

        <input
          type="text"
          placeholder="Note Name"
          value={heading}
          className="bg-black px-5 py-2 font-medium rounded-2xl outline-none text-center "
          onChange={(e) => setHeading(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="Note Details"
          className="bg-amber-50 text-black px-5 font-medium h-40 py-2 outline-none border-2 rounded-2xl"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />

        <button className="bg-black px-5 py-2 rounded-2xl w-1/2 font-medium outline-none ">
          Add note
        </button>
      </form>
      <div className=" lg:border-l-2 lg:w-full p-10">
        <h1 className="font-bold text-xl">Recent notes</h1>
        <div className="flex flex-wrap gap-5 overflow-auto h-full mt-3">
      
            {notes.map((note,idx)=>(
             <div key={idx} className="relative bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] bg-cover  h-52 w-42 rounded-2xl flex justify-between flex-col p-5 gap-3 "> 
                <div>
                   <h2 className="text-black leading-6 font-bold text-xl capitalize border-b-1">{note.heading}</h2>
                <p className="text-gray-800 text-sm">{note.detail}</p>

                </div>
                
                <button onClick={()=>handleDelete(idx)} className="  bg-red-500 cursor-pointer active:scale-95 px-2 rounded-2xl py-2 w-full text-sm font-medium  bottom-5">delete</button>
              </div>

            ))}
                      
        </div>
      </div>
    </div>
  );
}

export default App;
