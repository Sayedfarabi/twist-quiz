import React, { useContext } from 'react';
import { QuizTopicContext } from '../Root';
import TopicItem from './TopicItem';

const Topics = () => {
    const quizItems = useContext(QuizTopicContext);
    const { data } = quizItems;
    // console.log(data)
    return (
        <div className='container'>
            <h2 className='text-center text-primary mt-3'>Choice Your Topic for Quiz</h2>
            <div style={{ margin: 'auto', maxWidth: '900px' }} className='my-5 row'>
                {
                    data.map(item => <TopicItem
                        key={item.id}
                        item={item}></TopicItem>)
                }
            </div>
        </div>

    );
};

export default Topics;