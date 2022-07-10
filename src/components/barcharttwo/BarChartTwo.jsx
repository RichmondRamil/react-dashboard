import React from "react";
import Chart from "react-apexcharts";
import "./barcharttwo.scss";

const BarChartTwo = () => {
  const options = {
    chart: {
      redrawOnParentResize: true,
      toolbar: {
        show: false,
      },
    },
    colors: [
      "#F4F5FA",
      "#F4F5FA",
      "#F4F5FA",
      "#9155FD",
      "#F4F5FA",
      "#F4F5FA",
      "#F4F5FA",
    ],
    dataLabels: {
      enabled: false,
    },
    grid: {
      padding: {
        bottom: 5,
        left: 0,
        right: 0,
        top: -1,
      },
      strokeDashArray: 7,
    },
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 9,
        columnWidth: "40%",
        distributed: true,
        endingShape: "rounded",
        startingShape: "rounded",
      },
    },
    stroke: {
      colors: ["#FFF"],
      width: 2,
    },
    xaxis: {
      categories: [
        "Week 1",
        "Week 2",
        "Week 3",
        "Week 4",
        "Week 5",
        "Week 6",
        "Week 7",
      ],
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
    series: [
      {
        name: "Net Profit",
        data: [37, 57, 45, 75, 57, 40, 65],
      },
    ],
    yaxis: {
      labels: {
        formatter: function (value) {
          return "₱ " + value + "k";
        },
      },
    },
  };
  const { series } = options;
  return (
    <div className="barcharttwo">
      <div className="barcharttwo-container">
        <div className="title">
          <h3>Weekly Overview</h3>
          <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        <Chart options={options} series={series} type="bar" height={199} />
        <div className="description">
          <h1>45%</h1>
          <p>Your sales performance is 45% 😎 better compared to last month</p>
        </div>
        <button>DETAILS</button>
      </div>
    </div>
  );
};

export default BarChartTwo;
