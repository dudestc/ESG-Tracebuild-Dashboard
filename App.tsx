import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Internal Finishes",
    "Superstructure",
    "Façade",
    "Internal walls and partitions",
    "Internal finishes",
    "FF&E",
    "Building Services",
  ],
  datasets: [
    {
      labels: [
        "Internal Finishes",
        "Superstructure",
        "Façade",
        "Internal walls and partitions",
        "Internal finishes",
        "FF&E",
        "Building Services",
      ],
      data: [2, 7, 15, 13, 62, 6, 351],
      backgroundColor: [
        "#b91d47",
        "#00aba9",
        "#2b5797",
        "#e8c3b9",
        "#c45850",
        "#CD9C5C",
        "#1e7145",
      ],
      borderColor: [
        "#b91d47",
        "#00aba9",
        "#2b5797",
        "#e8c3b9",
        "#c45850",
        "#CD9C5C",
        "#1e7145",
      ],
      borderWidth: 1,
    },
  ],
};

export function App() {
  return <Doughnut data={data} />;
}
