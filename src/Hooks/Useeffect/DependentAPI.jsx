// import React, { useEffect, useState } from 'react'

// const DependentAPI = () => {
//     const [query, setquery] = useState("");
//     const [result, setresult] = useState("");
//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             if (query) setresult(`Searched for:${query}`);
//         }, 500);
//         return () => clearTimeout(timeout);
//     }, [query]);
// }
// export default DependentAPI;



import { useEffect, useState } from "react";

function DependentAPICalls() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    if (selectedUser) {
      fetch(`https://jsonplaceholder.typicode.com/users/${selectedUser}`)
        .then((res) => res.json())
        .then((data) => setUserDetails(data));
    }
  }, [selectedUser]);

  return (
    <div>
      <select onChange={(e) => setSelectedUser(e.target.value)}>
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      {userDetails && <p>{userDetails.email}</p>}
    </div>
  );
}

export default DependentAPICalls;
