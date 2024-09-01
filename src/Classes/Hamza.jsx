import React, { useState } from 'react';

function Hamza() {
    const [clicks, setClicks] = useState(0);

    return (
        <>
        <div>
            <p>
                <b>
                    Welcome to Hamzas part of the website, he hasnt told me what he wants in it though
                </b>
            </p>
        </div>

        <div>
            <button onClick={setClicks(clicks + 1)}>{clicks}</button>
        </div>
        </>
        
    )
}

export default Hamza;