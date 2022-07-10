import React from "react";
import Chart from "react-apexcharts";
import "./barchart.scss";
const BarChart = () => {
  const options = {
    chart: {
      redrawOnParentResize: true,
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: true,
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#ac83fa", "#9155FD"],
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Fee Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    plotOptions: {
      bar: {
        columnWidth: "50%",
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
  };
  const { series } = options;
  return (
    <div className="barchart">
      <div className="barchart-container">
        <div className="title">
          <h1>Weekly Sales</h1>
          <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        <p>Total 108.5k Sales</p>
        <Chart type="bar" height={270} options={options} series={series} />
      </div>
    </div>
  );
};

export default BarChart;
