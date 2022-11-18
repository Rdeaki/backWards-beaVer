import React from 'react';


function About() {
    return (
        <section id="about-me" className="me">
          <h1>About Me</h1>
          <div>
            <img
              id="headshot"
              src={require(`../../assets/headshot.jpg`)}
              alt="headshot"
            />
            <div>
            Little info about yours truly.
            </div>
          </div>
        </section>
    );
}

export default About;