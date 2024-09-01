import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {

    

    return (
        <>
            <div>
                <title>404 | indpon.com</title>
                <p className='notfound bold'>404 Not Found</p>
                <Link to="/">Go to home</Link>
            </div>
        </>
    )

}

export default NotFound;
