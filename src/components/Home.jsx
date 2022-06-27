import React from 'react';
import Contract from './Contract';
import Education from './Education';

import Banner from './Header/Banner';
import Portfolio from './Header/Portfolio/Portfolio';

import Skills from './Skills';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <Education></Education>
            <Contract></Contract>
        </>
    );
};

export default Home;