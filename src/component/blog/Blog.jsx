import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div className='container vh-100 mt-5'>
            <h2 className="text-center text-primary">Answer to the questions</h2>
            <div className='my-5'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is the purpose of React Router</Accordion.Header>
                        <Accordion.Body>
                            The main purpose of using React Router is to easily route from one component to another . And the required data for various components can be loaded and used.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How does context API work ?</Accordion.Header>
                        <Accordion.Body>
                            The React Context API is a way for a React app to effectively produce global variables that can be passed around.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What is purpose of "useRef" hook ?</Accordion.Header>
                        <Accordion.Body>
                            The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>
        </div>
    );
};

export default Blog;