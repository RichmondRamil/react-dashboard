import React from "react";
import Chart from "react-apexcharts";
import "./radarchart.scss";

const RadarChart = () => {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#9155FD", "#16B1FF"],
    grid: {
      show: false,
    },
    stroke: {
      width: 0,
    },
    fill: {
      gradient: {
        gradientToColors: ["#9155FD", "#16B1FF"],
        opacityFrom: 1,
        opacityTo: 0.9,
        shade: "dark",
        shadeIntensity: 1,
        stops: [0, 100],
        type: "vertical",
      },
      type: "gradient",
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    markers: {
      size: 0,
    },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: [
            "#ebe9f1",
            "transparent",
            "transparent",
            "transparent",
            "transparent",
            "transparent",
          ],
        },
        size: 100,
      },
    },
    xaxis: {
      convertedCatToNumeric: false,
      labels: {
        show: true,
        style: {
          fontSize: "14px",
        },
      },
    },
    yaxis: {
      show: false,
    },
    series: [
      {
        name: "Income",
        data: [70, 90, 90, 90, 80, 90],
      },
      {
        name: "Net Worth",
        data: [120, 80, 100, 80, 100, 80],
      },
    ],
  };

  const { series } = options;
  return (
    <div className="radarchart">
      <div className="radarchart-container">
        <div className="title">
          <h1>Performance</h1>
          <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        <Chart options={options} series={series} type="radar" />
      </div>
    </div>
  );
};

export default RadarChart;
