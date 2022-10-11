import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopicItem = ({ item }) => {
    // console.log(item)
    return (
        <div style={{ width: '250px' }} className='col-sm-12 col-md-6 col-lg-3 p-2 m-2 bg-light'>
            <div>
                <div>
                    <img className='img-fluid' src={item.logo} alt="" />
                </div>
                <div className='mt-2 d-flex align-items-center justify-content-between'>
                    <div><h5>{item.name}</h5></div>
                    <div>
                        <Link to={`/quiz/${item.id}`}><Button variant="primary">Start Practice</Button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TopicItem;