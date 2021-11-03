import React from 'react'
import data from './Data'
import * as V from 'victory'
import { VictoryLine, VictoryChart, VictoryTheme, VictoryZoomContainer } from 'victory';

const Chart = () => {
    const newData = [{x: Date.now(), y: data[0].price[data[0].price.length-1]},
                    {x: Date.now(), y: data[0].price[data[0].price.length - 2]}]
                

    return (
        <div>
            <VictoryChart>
            <VictoryZoomContainer
            allowZoom={false}
            zoomDomain={{x:[0,1]}}
            />
            <VictoryLine style={{
      data: { stroke: "#c43a31" },
      parent: { border: "1px solid #ccc"}
    }} data={newData} x="date" y="price"/>
            </VictoryChart>
            
        </div>
    )
}

export default Chart
