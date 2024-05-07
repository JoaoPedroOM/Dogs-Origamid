import React, { useEffect, useState } from "react";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
    );
    setGraph(graphData);
  }, [data]);

  return (
    <section className="animate-left grid mx-auto max-w-[50rem] grid-cols-2 mb-8 px-8 gap-8 sm:grid-cols-1 sm:mb-8">
      <div className="[grid-column:1/3] p-8 text-[2rem] shadow-graph rounded grid items-center sm:[grid-column:1]">
        <p>Acessos: {total}</p>
      </div>
      <div className="shadow-graph rounded grid items-center">
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data:{
                fillOpacity: .9,
                stroke: '#fff',
                strokeWidth: 2
            },
            labels: {
                fontSize: 14,
                fill: '#333'
            }
          }}
        />
      </div>
      <div className="shadow-graph rounded grid items-center pr-4">
        <VictoryChart>
            <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatsGraphs;
