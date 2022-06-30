import React from 'react';

const Banner = () => {
  return (
    <div class='hero h-screen lg:h-[70vh] bg-base-100 relative z-10 py-5 ' id='home'>
      <div class='hero-content flex-col lg:flex-row'>
        <div className='text-black  ms:text-xl'>
          <p
            data-aos='fade-right'
            data-aos-duration='1000'
            data-aos-delay='200'
            className='text-xl'
          >
            Hello, my name is
          </p>
          <h2
            data-aos='fade-right'
            data-aos-delay='400'
            data-aos-duration='1000'
            class='text-4xl font-bold '
          >
            Juma Akther<br></br>and I'm a Junior Web Developer
          </h2>
          <p
            data-aos='fade-right'
            data-aos-delay='600'
            data-aos-duration='2000'
            class='py-6 max-w-xl sm:max-w-lg'
          >

          </p>
          <a
            data-aos='zoom-in'
            data-aos-delay='2000'
            class='btn btn-info text-white'

            target='_blank'
            href='https://drive.google.com/file/d/1l1manpWzjqC-jqEfp8AbtJ4BHVNpczVJ/view?usp=sharing'
            download
          >
            Download Resume <i class="fa-solid fa-arrow-down-long font-bold text-white p-2"></i>

          </a>
        </div>
        <div className='h-[60vh] shrink-0' data-aos="fade-in" data-aos-duration="2000">
          <img src="https://i.ibb.co/D9s3zFx/shape-4-2.png" class='h-full rounded-xl' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Banner;


