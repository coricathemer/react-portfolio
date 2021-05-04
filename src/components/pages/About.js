import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg"

const About = () => (
  <div>
    <h1>About Cori</h1>
    <section className="my-5">
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
    <p>
      Hi! Welcome to the about me section of my portfolio!
    </p>
    <h3>Development Background</h3>
    <p>
      I wanted to take a moment and share a little bit about my journey to becoming a full stack web developer. 

      My journey to development started back in the myspace days where I experimented with html styling on my personal page. Later I spent 4 months traveling the country with my spouse. While we were on our trip I invested in some self taught coding courses to further my knowledge. Two kids and a few years later the desire to gain a better understanding of web development led me to a coding boot camp through the University of Arizona. 
    </p>
  </div>
);

export default About;
