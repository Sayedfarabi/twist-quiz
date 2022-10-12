import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../question/Question';
import { addToDb } from '../../utilities/fakeDb.js';
// import { useContext } from 'react';
import { StoreDataContext } from '../Root';

const Quiz = () => {
    const quizData = useLoaderData();
    // console.log(quizData);
    const { data } = quizData;
    const { questions, name } = data;
    // console.log(name)
    addToDb(questions);

    const storeData = useContext(StoreDataContext);
    // console.log(storeData)

    return (
        <div className='container'>
            <div className='my-5 text-center'>
                <h1 className='fw-bolder text-primary'>Quiz Topic : {name}</h1>
            </div>
            <div style={{ margin: '5px auto' }}>
                {storeData.map(questions => {
                    return <Question
                        key={questions.id}
                        questionData={questions}
                    >
                    </Question>
                })}
            </div>

        </div>
    );
};

export default Quiz;