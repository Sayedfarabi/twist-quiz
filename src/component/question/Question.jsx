import Option from "../Option";


const Question = ({ questionData }) => {
    // const { questionData } = props;
    const { question, options, id, correctAnswer } = questionData;
    // console.log(correctAnswer)

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
            </div>



        </div>
    );
};

export default Question;