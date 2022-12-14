import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const TopicItem = ({ item }) => {
    // console.log(item)
    const startButtonHandler = () => {
        toast.success('Questions Loaded done!', {
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
    return (
        <div style={{ maxWidth: '400px', backgroundColor: '#bbc6f2' }} className='d-flex justify-content-center col-sm-12 col-md-6 p-2 m-3 rounded'>
            <div>
                <div>
                    <img className='img-fluid' src={item.logo} alt="" />
                </div>
                <div className='mt-2 d-flex align-items-center justify-content-between' style={{ color: '#e630e2' }}>
                    <div><h5>{item.name}</h5></div>
                    <div><h5>Quiz : {item.total}</h5></div>
                    <div>
                        <Link to={`/quiz/${item.id}`}><Button onClick={startButtonHandler} variant="primary">Start Practice</Button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TopicItem;