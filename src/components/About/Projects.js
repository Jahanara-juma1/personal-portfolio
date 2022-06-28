import React from 'react';
import './Projects.css';
// import project01 from '../images/project01.png'
// import project02 from '../images/project02.png'
// import project03 from '../images/project03.png'
// import project04 from '../images/project04.png'
// import project05 from '../images/project05.png'
// import project06 from '../images/project06.png'

const Projects = () => {
    return (
        <section className="portfolio" id="portfolio">

                <h1 className="heading"><span>Projects</span> <small className='sm-text-title font-serif font-extrabold'>( Click project to show details )</small> </h1>

                <div className="box-container">

                    <div className="box">
                        <a target="_blank" href=""><img src="https://i.ibb.co/rcd7dJn/project01.png" alt="" /></a>
                    </div>

                    <div className="box">
                        <a target="_blank" href=""><img src="https://i.ibb.co/vXQ5Y3P/project02.png" alt="" /></a>
                    </div>

                    <div className="box">
                        <a target="_blank" href=""><img src="https://i.ibb.co/QCq9YRX/project03.png" alt="" /></a>
                    </div>

                    <div className="box">
                        <a target="_blank" href=""><img src="https://i.ibb.co/HCC0GnQ/project04.png" alt="" /></a>
                    </div>

                    <div className="box">
                        <a target="_blank" href=""><img src="https://i.ibb.co/pd5tkQ2/project05.png" alt="" /></a>
                    </div>

                    <div className="box">
                        <a target="_blank" href=""><img src="https://i.ibb.co/VSYvRkN/project06.png" alt="" /></a>
                    </div>

                </div>

            </section>
    );
};

export default Projects;