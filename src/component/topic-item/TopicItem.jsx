import React from 'react';
import { Button } from 'react-bootstrap';

const TopicItem = ({ item }) => {
    return (
        <div style={{ width: '250px' }} className='col-sm-12 col-md-6 col-lg-3 p-2 m-2 bg-light'>
            <div>
                <div>
                    <img className='img-fluid' src={item.logo} alt="" />
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                    <div><h5>{item.name}</h5></div>
                    <div>
                        <Button variant="primary">Start Practice</Button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TopicItem;