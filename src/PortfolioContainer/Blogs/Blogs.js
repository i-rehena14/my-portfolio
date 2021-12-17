import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div className='container text-success h-100 text-center'>
            <div>
                <h1 className='m-4 p-4'>Blogs Coming Soon!!</h1>
                <Link to='/home'><Button variant='outline-success'>Home</Button></Link>
            </div>
        </div>
    );
};

export default Blogs;