import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: "My Daily Activities",
};


type PieProps = {
  data: Record<number, any>[];
  option: string;
}

export const PieChart: React.FC<PieProps> = ({ data, option }) => {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={option}
      width={"100%"}
      height={"400px"}
    />
  )
}