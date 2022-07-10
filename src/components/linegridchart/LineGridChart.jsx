import React from "react";
import Chart from "react-apexcharts";
import "./linegridchart.scss";

const LineGridChart = () => {
  const options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: "solid",
      colors: ["transparent"],
    },
    dataLabels: {
      enabled: false,
    },

    title: {
      text: "Total Sales",
      align: "left",
      style: {
        color: "#58545e",
        fontFamily: "Inter, sans-serif",
      },
    },
    subtitle: {
      text: "₱480,279",
      align: "left",
      style: {
        color: "#58545e",
        fontSize: "14px",
        fontWeight: 600,
      },
    },
    grid: {
      strokeDashArray: 12,
      padding: {},
    },

    tooltip: {
      enabled: false,
    },
    colors: ["#6fd226", "#000000"],
    series: [
      {
        data: [10, 5, 30, 20, 29],
      },
    ],
    xaxis: {
      categories: [],
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
  };
  const { series } = options;
  return (
    <div className="linegridchart">
      <div className="linegridchart-container">
        <Chart height={140} options={options} series={series} type="line" />
        <p className="total">Total Profit</p>
      </div>
    </div>
  );
};

export default LineGridChart;
