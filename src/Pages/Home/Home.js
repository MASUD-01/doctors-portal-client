import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Contactus from './Contactus';
import Exceptional from './Exceptional';

import Info from './Info';
import MakeAppoinmaent from './MakeAppoinmaent';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Exceptional></Exceptional>
            <MakeAppoinmaent></MakeAppoinmaent>
            <Testimonials></Testimonials>
            <Contactus></Contactus>
            <Footer></Footer>
        </div>
    );
};

export default Home;