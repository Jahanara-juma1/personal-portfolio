import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <>
            <div class="font-bold text-3xl text-secondary my-20 text-center text-primary" id='portfolio' > My Projects</div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 '>
                <div class=" card w-96 bg-base-100 shadow-xl">
                    <div class="avatar flex justify-center">
                        <div class="w-40 rounded-full">
                            <img src="https://i.ibb.co/bHj6HWX/pexels-carl-kristensen-1674300-1.png" />
                        </div>
                    </div>

                    <div class="card-body text-center">
                        <h2 class="text-2xl font-bold text-secondary">Camera manuFectural tool</h2>
                        <p>Complete and fully site built with React js, firebase hook, react bootstarp, etc.</p>
                        <button class="btn btn-outline btn-accent"><a target="_blank" href="https://manufacture-portal-2b19e.web.app/">Live website</a></button>


                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="avatar flex justify-around">
                        <div class="w-40 rounded-full">
                            <img src="https://i.ibb.co/NNqrZjJ/maxim-hopman-Hin-rzh-Od-Ws-unsplash-1.png" />

                        </div>
                    </div>
                    <div class="card-body text-center">
                        <h2 class="text-2xl font-bold text-secondary"> Warehouse Management System</h2>
                        <p>Complete and fully functional warehouse management site</p>

                        <button class="btn btn-outline btn-accent"><a target="_blank" href=" https://warehouse-management-site.web.app/">Live website</a></button>


                    </div>

                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="avatar flex justify-center">
                        <div class="w-40 rounded-full">
                            <img src="https://cdn.mukama.com/c/9-moodpic_large/bags.jpg" />
                        </div>
                    </div>
                    <div class="card-body text-center">
                        <h2 class="text-2xl font-bold text-secondary">Product Analysis Website</h2>
                        <p>Complete and fully functional product analysis website.</p>
                        <button class="btn btn-outline btn-accent"><a target="_blank" href=" https://sweet-concha-eb6afb.netlify.app/">Live website</a></button>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;