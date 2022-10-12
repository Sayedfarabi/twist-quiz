import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Option from "../Option";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";


const Question = ({ questionData }) => {
    const { question, options, id, correctAnswer } = questionData;
    // const [opt1, opt2, opt3, opt4] = options;
    // console.log(opt1);

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
        <div className="rounded" style={{ maxWidth: '350px', margin: '20px auto', background: '#2c2c2e' }}>
            <div className="p-3">
                <div className="text-primary px-2 text-light rounded" style={{ backgroundColor: '#8093e0' }}>
                    <h3>{question}</h3>
                </div>
                <div className="row m-2 rounded" style={{ backgroundColor: '#bbc6f2' }}>
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
                <div className="text-center mt-3">
                    <Button onClick={showCorrectAnswer} variant="primary"><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></Button>
                </div>
            </div>
        </div>
    );
};

export default Question;