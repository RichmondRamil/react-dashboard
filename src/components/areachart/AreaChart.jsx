import React from "react";
import Chart from "react-apexcharts";

import "./areachart.scss";
const AreaChart = () => {
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
    grid: {
      show: false,
    },
    title: {
      text: "Total Sales",
      align: "left",
      style: {
        color: "#58545e",
        fontFamily: "Inter, sans-serif",
      },
    },
    tooltip: {
      enabled: false,
    },
    subtitle: {
      text: "₱480,279",
      align: "left",
      style: {
        color: "#58545e",
        fontSize: "22px",
      },
    },
    colors: ["#6fd226", "#000000"],
    series: [
      {
        data: [10, 5, 30, 20, 29],
      },
    ],
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Jun", "Jul"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          fontSize: "15px",
          fontWeight: "600",
          fontFamily: "Inter, sans-serif",
        },
      },
    },
    yaxis: {
      show: false,
    },
  };
  const { series } = options;
  return (
    <div className="area-chart">
      <div className="area-chart_container">
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <Chart options={options} series={series} type="area" />
      </div>
    </div>
  );
};

export default AreaChart;
