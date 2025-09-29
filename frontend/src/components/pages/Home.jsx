import React from 'react';
import Layout from '../common/Layout';
import Hero from '../common/Hero';
import FeaturedCategories from '../common/FeaturedCategories';
import FeaturedCourses from '../common/FeaturedCourses';
import Newsletter from './Newsletter';



const Home = () => {
    return (
        <Layout>
            <Hero/>
            <FeaturedCategories/>
            <FeaturedCourses/>
            <Newsletter/>
         </Layout>
    );
};

export default Home;