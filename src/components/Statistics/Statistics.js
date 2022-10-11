import React, { PureComponent, useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';
import './Statistics.css'
import { QuizContext } from '../../Layouts/Layouts';

const Statistics = () => {
    
const quizData= useContext(QuizContext);
   
    return (
        <div style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={quizData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey='total' stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={quizData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey='id' />
            <YAxis />
            <Tooltip />
            <Line connectNulls type="monotone" dataKey= 'total' stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
};

export default Statistics;