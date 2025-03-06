// import React from 'react'
// import { playlists } from '../Data'
// import { Button, Card } from "react-bootstrap";
// import { Link } from 'react-router-dom';

// const Playlist = () => {
//     const playlist = playlists[0];
//     return (
//         <div className='container mt-2'>
//             <h3>Playlist</h3>
//             <div className='card-deck'>
//                 {playlists.map((playlist) => (
//                     <Card key={playlist.id} className='m-2 text-center' style={{ width: '16rem' }}>
//                         <Card.Img variant='top' src={playlist.url} alt={playlist.title} height={150} />
//                         <Card.Body>
//                             <Card.Title>{playlist.title}</Card.Title>
//                             <Card.Text>{playlist.description}</Card.Text>
//                             <Link to="/playdetails">
//                                 <Button variant="primary">View playlist</Button>
//                             </Link>
//                         </Card.Body>
//                     </Card>

//                 ))}

//             </div>
//         </div>
//     )
// }

// export default Playlist

import React from 'react';
import { playlists } from '../Data';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Playlist = () => {
    return (
        <div className='container mt-2'>
            <h3>Playlist</h3>
            <div className='card-deck'>
                {playlists.map((playlist) => (
                    <Card key={playlist.id} className='m-2 text-center' style={{ width: '16rem' }}>
                        <Card.Img 
                            variant='top' 
                            src={playlist.url} 
                            alt={playlist.title} 
                            height={150} 
                            
                        />
                        <Card.Body>
                            <Card.Title>{playlist.title}</Card.Title>
                            <Card.Text>{playlist.description}</Card.Text>
                            <Link to="/playlistdetails">
                                <Button variant="primary">View playlist</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Playlist;
