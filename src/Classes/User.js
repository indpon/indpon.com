import React, { useState } from 'react';

function User() {
  const [username, setUsername] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(event) {
    setUsername(event.target.value);
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="What's your name?"
        value={username}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      {submitted && <p>Hello, {username}!</p>}
    </div>
  );
}

export default User;
