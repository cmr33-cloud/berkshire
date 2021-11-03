import React from 'react'
import data from './Data'
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';

const Chart = () => {
    const newData = [{x: Date.now(), y: data[0].price[data[0].price.length-1]},
                    {x: 1635936279070, y: data[0].price[data[0].price.length - 2]},
                    {x: 1635938292070, y: data[0].price[data[0].price.length - 3]}
                        ]
                

    return (
        <div>
            <VictoryChart>
            <VictoryAxis 
            orientation="bottom"
            standalone={true}
            fixLabelOverlap={true}
          />
          <VictoryAxis dependentAxis
            orientation="left"
            standalone={false}
          />
            <VictoryLine style={{
      data: { stroke: "#c43a31" },
      parent: { border: "1px solid #ccc"}
    }} data={newData} />
            </VictoryChart>
            
        </div>
    )
}

export default Chart
