import React from 'react';
import Hero from './Hero';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

const Home: React.FC = () => {
    return (
        <><Header /><Hero /><Footer /></>
    );
};

export default Home;