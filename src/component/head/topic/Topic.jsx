import React, { useContext } from 'react';
import { QuizTopicContext } from '../../Root';
import TopicItem from '../../topic-item/TopicItem';

const Topics = () => {
    const quizItems = useContext(QuizTopicContext);
    const { data } = quizItems;
    return (
        <div className='container vh-100'>
            <div className='my-5 row'>
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