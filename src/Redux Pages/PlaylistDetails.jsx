// import React from 'react'
// import { courses, playlists } from '../Data'
// import { Button, Card } from "react-bootstrap";
// import { Link } from 'react-router-dom';

// const PlaylistDetails = () => {
//     const playlist = playlists[0];


//     return (
//         <div className='container mt-2'>
//             <h3>{playlist.title}Playlist</h3>
//             <div className='card-deck mt-5'>
//                 {playlist.courses.map((course) => (
//                     <Card key={course.id} className='m-2 text-center' style={{ width: '16rem' }}>
//                         <Card.Img variant='top' src={course.url} alt={course.title} height={150} />
//                         <Card.Body>
//                             <Card.Title>{course.title}</Card.Title>
//                             <Card.Text>{course.description}</Card.Text>
//                             <Link to="/course">
//                                 <Button variant="primary">Open</Button>
//                             </Link>
//                         </Card.Body>
//                     </Card>

//                 ))}

//             </div>

//         </div>
//     )
// }

// export default PlaylistDetails

import React from 'react';
import { playlists } from '../Data';
import { Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

const PlaylistDetails = () => {

    const playlist = playlists[0];
    // const navigate = useNavigate();
    // const viewCourse = (course) => {
    //     navigate("/course")
    // }

    return (
        <div className='container mt-2'>
            <h3>{playlist.title} Playlist</h3>
            <div className='card-deck mt-5'>
                {playlist.courses.map((course) => (
                    <Card key={course.id} className='m-2 text-center' style={{ width: '16rem' }}>
                        <Card.Img variant='top' src={course.url} alt={course.title} height={150} />
                        <Card.Body>
                            <Card.Title>{course.title}</Card.Title>
                            <Card.Text>{course.description}</Card.Text>
                            <Link to='/course'>
                                <Button variant="primary">Open</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default PlaylistDetails;
