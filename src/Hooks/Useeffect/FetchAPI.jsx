import React, {useState, useEffect}  from 'react'

const FetchAPI= () => {
const [posts, setposts] = useState([]);
useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setposts(data));
}, []);

return (
    <ul style={{listStyle:'none'}}>
        {posts.slice(0,9).map((post)=>(
            <li key={post.id} >{post.title}</li>
        ))}
    </ul>
);
}
export default FetchAPI;