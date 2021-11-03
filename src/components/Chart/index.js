import React from 'react'
import data from './Data'
import * as V from 'victory'
import { VictoryLine, VictoryChart, VictoryTheme, VictoryZoomContainer, VictoryAxis} from 'victory';

const Chart = () => {
    const newData = [{x: 1, y: data[0].price[data[0].price.length-1]},
                    {x: 2, y: data[0].price[data[0].price.length - 2]},
                    {x: 3, y: data[0].price[data[0].price.length - 3]},
                    {x: 4, y: data[0].price[data[0].price.length - 4]}
                        ]
                

    return (
        <div>
            <VictoryChart theme={VictoryTheme.material} containerComponent={<VictoryZoomContainer
                allowZoom={true}
                allowPan={true}
                />}>
            <VictoryAxis 
            orientation="bottom"
            standalone={false}
            fixLabelOverlap={true}
            tickFormat={() => ''}
            label="Date"
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
