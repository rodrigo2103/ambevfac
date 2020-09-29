import { ActionDashboard } from 'material-ui/svg-icons';
import React, { PureComponent } from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts';

const data = [
  {
    name: '1°', x: 4000, y: 2400, amt: 2400,
  },
  {
    name: '2°', x: 3000, y: 1398, amt: 2210,
  },
  {
    name: '3°', x: 2000, y: 9800, amt: 2290,
  },
  {
    name: '4°', x: 2780, y: 3908, amt: 2000,
  },
  {
    name: '5°', x: 1890, y: 4800, amt: 2181,
  },
  {
    name: '6°', x: 2390, y: 3800, amt: 2500,
  },
  {
    name: '7°', x: 3490, y: 4300, amt: 2100,
  },

];
const state = {
  labels: ['1°', '2°', '3°',
           '5°', '4°'],
  datasets: [
    {
      label: 'Rain',
      backgroundColor: [
        'orange',
        'blue',
        'pink',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [80, 30, 60, 5, 56]
    }
  ]
}

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <div>
      <h3>Score-Software</h3>
      <BarChart
        width={800}
        height={300}
        data={data}
        margin={{
          top: 5, right: 10, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="y" fill="orange" />
        <Bar dataKey="x" fill="blue" />
      </BarChart>
      <h3>Score-Equipamentos</h3>
      <BarChart
        width={800}
        height={300}
        data={data}
        margin={{
          top: 5, right: 10, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="y" fill="orange" />
        <Bar dataKey="x" fill="blue" />
      </BarChart>
      <h3>   

      </h3>

      <h3>Score-Equipamentos</h3>
      <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'SCORE TOTAL',
              fontSize:30
            

            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

      

      </div>

    );
  }
}

















