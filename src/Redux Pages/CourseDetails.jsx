import React from 'react'
import { courses } from '../Data'
import { Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

const CourseDetails = () => {
    const course=courses[2];
    
    return (
        <div>
            <h3>Course Detailspage</h3>
            <div className='container d-flex justify-content-center mt-3'>
                <Card key={course.id} className='m-2 text-center' style={{ width: '16rem' }}>
                    <Card.Img variant='top' src={course.url} alt={course.title} height={200} />
                    <Card.Body>
                        <Card.Title>{course.title}</Card.Title>
                        <Card.Text>{course.description}</Card.Text>
                        <Link to="/">
                        <Button variant="primary">Home</Button>
                        </Link>
                    </Card.Body>
                </Card>

            </div>
        </div>
    )
}

export default CourseDetails