import React from 'react';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          Hello, my name is Naomi. I graduated in 2015 from UNC Chapel Hill with a B.A. in geography and environmental studies. I am excited 
          to be learning about full stack development.
        </p>
      </div>
    </section>
  );
}

export default About;