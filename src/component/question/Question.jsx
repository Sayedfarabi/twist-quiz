import Option from "../Option";


const Question = ({ questionData }) => {
    // const { questionData } = props;
    const { question, options, id } = questionData;
    // console.log(id)
    return (
        <div className='col-sm-12 col-md-6 border rounded p-3 mt-5 bg-light'>
            <div>
                <div className="text-primary">
                    <h3>{question}</h3>
                </div>
                <div className="row">
                    {
                        options.map(option => <Option option={option} id={id}></Option>)
                    }
                </div>
            </div>



        </div>
    );
};

export default Question;