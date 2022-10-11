import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Option from "../Option";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";


const Question = ({ questionData }) => {
    // const { questionData } = props;
    const { question, options, id, correctAnswer } = questionData;
    // console.log(correctAnswer)
    const showCorrectAnswer = () => {
        toast.info(`Correct Answer is : ${correctAnswer}`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }


    return (
        <div className='col-sm-12 col-md-6 border rounded p-3 mt-5 bg-light'>
            <div>
                <div className="text-primary">
                    <h3><span className="me-2"></span>{question}</h3>
                </div>
                <div className="row">
                    {
                        options.map(option => {
                            return <Option
                                option={option}
                                id={id}
                                correctAnswer={correctAnswer}
                            >

                            </Option>
                        })
                    }
                </div>
                <div className="text-center">
                    <Button onClick={showCorrectAnswer} variant="primary"><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></Button>
                </div>
            </div>



        </div>
    );
};

export default Question;