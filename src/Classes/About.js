import React from 'react';
import '../Static/About.css'

function About() {
  return (
    <>
      <header>
        <h1>Welcome to the about page!</h1>
      </header>

      <div className="contentarea">
        <p className="info">
          Hello, my name is indpon and I have been coding since I was 9 years old.
          <br /> You are either seeing this because I did that stupid idea of putting indpon.com on a shirt
          <br /> OR you visited this from me sending it somewhere, or you're just my friend
        </p>
        
        <p className="info">
          Anyways, let's get into the about me!
          <br /> My name is indpon, and I do work in all sorts of languages.
          <br />

          <b>
            <p className="info">My primary languages are:</p>
          </b>

          <br />

          <p className="info italics langs">Javascript, Python, and C#</p>

          <br />

          <p className="info more-info">
            More about me:
            <br /> Nothing yet hahaha
            <br /> <a href="/">Go back home</a>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            I use Arch BTW
          </p>

        </p>

      </div>
    </>
  );
}

export default About;
