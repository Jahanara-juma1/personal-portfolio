import React from 'react';

const Skills = () => {
    return (
        <>


            <div className='mt-10 bg-base-200 text-black' id='skills'>

                <div class=" text-center font-bold text-4xl text-primary py-10"><i class="fa-solid fa-gear px-2"></i> Skills </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                    <div className='mx-auto' >
                        <h1 className='text-2xl font-bold mt-10'> <i class="fa-solid fa-rocket text-2xl text-primary pr-3"></i>Programming Skills</h1>
                        <p className='py-2 '><span className='font-bold'>Front-End</span> - Javascript, ReactJs, HTML5, CSS3, Bootstrap, Tailwind</p>
                        <p className='py-2'><span className='font-bold'>Back-End </span> - Nodejs, Express, MongoDB, ReactQuery</p>
                        <p className='py-2'><span className='font-bold'>Web-Security</span> - Firebase Authentication,</p>
                        <p className='py-2'><span className='font-bold'>Popular Tools</span> -,Heroku, Netlify, ReactAuth Hooks</p>
                    </div>

                    <>
                        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 bg-base-200 p-5 m-2' data-aos="fade-in" data-aos-duration="2000">

                            <div class="indicator m-2">
                                <span class="indicator-item indicator-center badge badge-accent"></span>
                                <div class="grid w-32 h-32 bg-base-100 place-items-center hover:shadow-xl">
                                    <div class="w-32">
                                        <img src="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg" />
                                    </div>

                                </div>
                            </div>

                            <div class="indicator m-2">
                                <span class="indicator-item indicator-center badge badge-secondary "></span>
                                <div class="grid w-32 h-32 bg-base-100 place-items-center hover:shadow-xl">
                                    <div class="w-32 bg-">
                                        <img src="https://www.logo.wine/a/logo/Node.js/Node.js-Logo.wine.svg" />
                                    </div>

                                </div>
                            </div>

                            <div class="indicator m-2">
                                <span class="indicator-item indicator-center badge badge-secondary"></span>
                                <div class="grid w-32 h-32 bg-base-100 place-items-center hover:shadow-xl">
                                    <div class="w-32 bg-">
                                        <img src="https://www.logo.wine/a/logo/MongoDB/MongoDB-Logo.wine.svg" />
                                    </div>

                                </div>
                            </div>


                            <div class="indicator m-2">
                                <span class="indicator-item indicator-center badge badge-secondary"></span>
                                <div class="grid w-32 h-32 bg-base-100 place-items-center  hover:shadow-xl">
                                    <div class="w-32 bg-">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/768px-Firebase_Logo.svg.png?20200221081546" />
                                    </div>

                                </div>
                            </div>

                            <div class="indicator m-2 ">
                                <span class="indicator-item indicator-center badge badge-secondary"></span>
                                <div class="grid w-32 h-32 bg-base-100 place-items-center  hover:shadow-xl">
                                    <div class="w-32 bg-">
                                        <img src="https://getlogovector.com/wp-content/uploads/2021/01/tailwind-css-logo-vector.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>


                </div>

            </div>
        </>
    );
};

export default Skills;