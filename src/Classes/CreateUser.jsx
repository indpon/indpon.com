import React from 'react';

import '../Static/CreateUser.css'

function CreateUser() {
    return (
        <div>
            <form action="/api/v1/createuser" method="POST">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" /> <br />
                
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" /><br />
                
                <input type="submit" value="Create User" />

                <h2><b>PLEASE NOTE THIS IS NOT WORKING RIGHT NOW</b></h2>
                
            </form>
        </div>
    );
}

export default CreateUser;
