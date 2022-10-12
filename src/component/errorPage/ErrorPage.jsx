import { faBug } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='d-flex align-items-center justify-content-center' style={{ margin: 'auto', width: '50vw', height: '50vh' }}>
            <div>
                <div style={{ fontSize: '150px' }} className='text-warning text-center'>
                    <FontAwesomeIcon icon={faBug} />
                </div>
                <div>
                    <h2 className='text-center text-warning'>Error 4O4</h2>
                    <div className='mt-3 text-center'>
                        <Link to='/home'><Button variant="primary">Back to Home</Button></Link>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ErrorPage;