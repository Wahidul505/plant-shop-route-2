import React from 'react';

const Home = () => {
    return (
        <div className='home'>
            <img className='w-full' src="https://images.unsplash.com/photo-1584204559709-ca7d413229eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBsYW50c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className='fixed top-60 right-0 left-0 text-white text-6xl'>
            <h1>Greetings!</h1>
            <p>We are Happy to See You</p>
            </div>
        </div>
    );
};

export default Home;