import React from 'react';
import Hero from './Hero';
import Header from '~/component/Header';
import Footer from '~/component/Footer';

const Home: React.FC = () => {
    return (
        <><Header /><Hero /><Footer /></>
    );
};

export default Home;