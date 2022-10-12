import React from 'react';
import './head.css';
import './quiz-bg-01.jpg';

const Head = () => {
    // const bgImg = './quiz-bg-01.jpg';
    return (
        <div className='my-5 head-section d-flex align-items-center justify-content-center'>
            <div>
                <h1 className='text-center text-warning'>Check Your Skill by Quiz</h1>
            </div>
        </div>
    );
};

export default Head;