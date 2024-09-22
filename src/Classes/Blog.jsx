import React from 'react';
import '../Static/Blog.css'

export default function() {
    return (
        <>
            <div className='Title'>
                <h2>Indpon's Blog</h2>
            </div>

            <div className="firstblog">
                <p className="title">
                    My First Blog
                </p>

                <button className='gtb_button_1' onClick={() => {window.location.href="/firstblog"}}>
                    <p className='gtb'>
                        Go to Blog
                    </p>
                </button>
            </div>
        </>
    )
}