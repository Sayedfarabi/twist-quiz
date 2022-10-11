import React from 'react';

const Option = ({ option, id }) => {
    return (
        <div className='col-sm-12 col-md-6'>
            <p><input type="radio" id={id} name={id} /> {option}</p>
        </div>
    );
};

export default Option;