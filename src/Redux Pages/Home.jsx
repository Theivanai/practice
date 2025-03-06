import React from 'react'
import { courses } from '../Data'
import { Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { add, sub } from '../Slice/AdminSlice';
//import { Link, useNavigate } from 'react-router-dom';


export default function Home() {
    const result = useSelector((e) => e.frontend);
    const send = useDispatch();


    // const navigate = useNavigate()
    // const viewCourse = (course) => {
    //     navigator('/course');
    // }
    return (
        <div className='container mt-2'>
            <h3 className='mt-5'>Courses</h3>
            <h2>{result}</h2>
            <button onClick={() => send(add(1))}>Increment</button>
            <button onClick={() => send(sub(4))}>Decrement</button>
            <div className='card-deck mt-5'>
                {courses.map(course => (
                    <Card key={course.id} className='m-2 text-center' style={{ width: '16rem' }}>
                        <Card.Img variant='top' src={course.url} alt={course.title} height={150} />
                        <Card.Body>
                            <Card.Title>{course.title}</Card.Title>
                            <Card.Text>{course.description}</Card.Text>
                            <Link to="/course">
                                <Button variant="primary">Open</Button>
                            </Link>
                        </Card.Body>
                    </Card>

                ))}

            </div>

        </div>
    )
}