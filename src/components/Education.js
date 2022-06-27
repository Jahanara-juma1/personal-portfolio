import React from 'react';

const Education = () => {
    return (
        <>
            <div class="divider font-bold text-3xl text-secondary my-20 text-primary" id="education"> Education and Training</div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto '>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="avatar flex justify-center">
                        <div class="w-12 rounded-full">
                            <img src="https://www.vhv.rs/dpng/d/397-3976471_education-icon-png-transparent-png.png" />
                        </div>
                    </div>

                    <div class="card-body text-center">
                        <h2 class="text-2xl font-bold text-secondary">Post Graduation</h2>
                        <p>Honer's (running)</p>
                        <p>Political Science</p>
                        <p>National University</p>


                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="avatar flex justify-around">
                        <div class="w-12 rounded-full">
                            <img src="https://aplikas.com/wp-content/uploads/2017/01/icon-training-informationmapping-r-worldssl-net_.png" />
                        </div>
                    </div>

                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="avatar flex justify-center">
                        <div class="w-16 rounded-full">
                            <img src="https://static.vecteezy.com/system/resources/previews/003/241/296/non_2x/webinar-online-training-tutor-icon-vector.jpg" />
                        </div>
                    </div>
                    <div class="card-body text-center">
                        <h2 class="text-2xl font-bold text-secondary">Complete Web Development</h2>
                        <p>Programming Hero(Bangladesh)</p>


                    </div>
                </div>
            </div>
        </>
    );
};

export default Education;