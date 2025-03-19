import React from 'react';
import CopyRight from '~/component/CopyRight';
import Header from '~/component/Header';

const Home: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <Header />
            <h1>Welcome to My Home Page</h1>
            <p>This is the home page of my application. Feel free to explore!</p>
            <CopyRight />
        </div>
    );
};

export default Home;