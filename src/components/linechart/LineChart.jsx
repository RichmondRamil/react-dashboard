import React from "react";
import Chart from "react-apexcharts";
import "./linechart.scss";

const LineChart = () => {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: true,
    },
    colors: ["#58545e", "#6fd226"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    series: [
      {
        name: "Expense",
        data: [-90, -60, -49, -70, -109],
      },
      {
        name: "Earning",
        data: [108, 40, 92, 80, 99],
      },
    ],
    title: {
      text: "Revenue Report",
      align: "left",
      style: {
        color: "#58545e",
        fontFamily: "Inter, sans-serif",
      },
    },
    tooltip: {
      enabled: false,
    },
  };

  const { series } = options;
  return (
    <div className="linechart">
      <div className="linechart-container">
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <Chart options={options} series={series} type="bar" />
      </div>
    </div>
  );
};

export default LineChart;
