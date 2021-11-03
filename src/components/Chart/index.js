import React from 'react'
import {Line} from 'react-chartjs-2'

const Chart = () => {

const data = {
    labels: ['P1', 'P2', 'P3', 'P4', 'P5'],
    datasets: [
        {
            "label": "Price",
            "name": "Nikkei",
            "data": [8.1,8.4,7.8,7.5, 8.2],
            "rating": 'A'
          }
    ]
}

const options = {
    scales: {
      y:  {
          beginAtZero: true
      }
    }
}

    return (
        <div>
        <Line data={data} options={options} />
        </div>
    )
}

export default Chart
