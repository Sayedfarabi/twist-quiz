import React from 'react';
import { toast } from 'react-toastify';

const Option = ({ option, id, correctAnswer }) => {
    const isCorrectHandler = option => {
        const OptionString = option.option;
        const isEqual = OptionString === correctAnswer;

        // console.log(OptionString, correctAnswer);

        if (isEqual) {
            toast.success('Success : Your Answer is correct!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast.warn('Warning : Your Answer is incorrect!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    return (
        <div className='col-sm-12 col-md-6'>
            <p><input onClick={() => isCorrectHandler({ option })} type="radio" id={id} name={id} /> {option}</p>
        </div>
    );
};

export default Option;