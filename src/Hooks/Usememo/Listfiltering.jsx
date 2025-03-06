// import React, { useState,useMemo } from 'react'

// const Listfiltering = ({students}) => {

//     const[]=useState([{id:1,name:"kavi"},{id:2,name:"subha"},{id:3,name:"karthi"}]);
//     const[searchterm,setsearchterm]=useState('');

//     const filteredstudents = useMemo(()=>{
//         return students.filter(students=>students.name.toLowerCase().includes(searchterm.toLowerCase()));
//     },[students,searchterm]);//recalculate when students or searchterm change

//     return(
//         <div>
//             <input type="text" placeholder='search students' value={searchterm} onChange={(e)=>setsearchterm(e.target.value)}/>
//             <ul>
//                 {filteredstudents.map(student=>(
//                     <li key={student.id}>{student.name}
//                     </li>
//                 ))}
//             </ul>

//         </div>
//     )
// }
// export default Listfiltering


import React, { useState, useMemo } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents] = useState(["Alice", "Bob", "Charlie", "David", "Eve"]);

  // Ensure students is always an array before filtering
  const filteredStudents = useMemo(() => {
    return students.filter(student =>
      student.toLowerCase().includes(searchTerm.toLowerCase())
    );
   }, [students, searchTerm]);

  return (
    <div>
      <h2>Student Search</h2>
      <input
        type="text"
        placeholder="Search student"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    
        {filteredStudents.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      
    </div>
  );
};

export default App;
