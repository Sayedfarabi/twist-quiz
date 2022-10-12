import React, { useContext } from 'react';
import { QuizTopicContext } from '../Root';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const Statistics = () => {
    const quizData = useContext(QuizTopicContext);
    const data = quizData.data;

    return (
        <div style={{ height: '90vh' }}>
            <h2 className="text-center text-primary mt-3">Chart of Topic Data</h2>

            <div className='d-flex justify-content-center mt-5'>
                <LineChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="total" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;