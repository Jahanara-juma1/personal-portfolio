import React from 'react';
import './About.css'

const About = () => {
    return (
        <section className="about" id="about">
            <h1 className="heading text-5xl text-center text-primary"> <span>about</span> me </h1>

            <div className="row">
                <div className="info">
                    <h3> I'm Juma. Simply, I'm a junior web developer and a continuous learner.I know Node JS, Express JS, MongoDB, Firebase, Tailwind, Bootstrap, CSS-3, HTML-5, and some important libraries like React Query, React Router, etc. Also, I'm a student who is now studying at Dr.Abdul Mannan Mohila College .
                    </h3>
                </div>
                <div className="counter">

                    <div className="box">
                        <span>12+</span>
                        <h3>porject completed</h3>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default About;