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
    const { questions } = data;
    // console.log(questions)
    addToDb(questions);

    const storeData = useContext(StoreDataContext);
    // console.log(storeData)

    return (
        <div className='container'>
            <div className='row gx-2'>
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