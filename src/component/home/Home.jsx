import React from 'react';
import Head from '../head/Head';
import Topics from '../head/topic/Topic';

const Home = () => {
    return (
        <div className='container' style={{ height: '90vh' }}>
            <Head></Head>
            <Topics></Topics>
        </div>
    );
};

export default Home;