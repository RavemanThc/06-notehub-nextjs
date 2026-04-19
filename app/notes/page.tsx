// 'use client';

import NoteList from "@/components/NoteList/NoteList";
import { getNotes } from "@/lib/api";
// import { useState } from "react";

// const Notes =  () => {
//   const [click, setClick] = useState<Note[]>([]);
//   const handleClick = async()=>{
//     const response = await getNotes();
//       if(response?.notes) {
//         setClick(response.notes);
//       }
//   };
  
//   return (
//   <section>
//     <h1>NoteList</h1>
//     <button onClick={handleClick}>Get my Notes</button>
//     {click.length > 0 && <NoteList notes={click}/>}
//   </section>
//   )
// };

// export default Notes;

const Notes = async () => {
  const response = await getNotes();

  return (
    <section>
      <h1>Notes List</h1>
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </section>
  );
}

export default Notes;