import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section className="portfolio" id="portfolio">

                <h1 className="heading text-center text-3xl text-primary"><span>Projects</span> <small className='sm-text-title font-serif font-extrabold'>( Click project to show details )</small> </h1>

                <div className="box-container">

                    <div className="box">
                        <a target="_blank" href="https://cranky-wilson-541cdf.netlify.app/"><img src="https://i.ibb.co/rcd7dJn/project01.png" alt="" /></a>
                    </div>

                    <div className="box">
                        <a target="_blank" href="https://independent-service-prov-9bebb.web.app/"><img src="https://i.ibb.co/vXQ5Y3P/project02.png" alt="" /></a>
                    </div>

                    <div className="box">
                        <a target="_blank" href="https://manufacture-portal-2b19e.web.app/"><img src="https://i.ibb.co/QCq9YRX/project03.png" alt="" /></a>
                    </div>

                    <div className="box">
                        <a target="_blank" href="https://warehouse-management-site.web.app/"><img src="https://i.ibb.co/HCC0GnQ/project04.png" alt="" /></a>
                    </div>

                    <div className="box">
                        <a target="_blank" href="https://sweet-concha-eb6afb.netlify.app/"><img src="https://i.ibb.co/pd5tkQ2/project05.png" alt="" /></a>
                    </div>

                    <div className="box">
                        <a target="_blank" href="https://mystifying-johnson-8766cf.netlify.app/"><img src="https://i.ibb.co/VSYvRkN/project06.png" alt="" /></a>
                    </div>

                </div>

            </section>
    );
};

export default Projects;