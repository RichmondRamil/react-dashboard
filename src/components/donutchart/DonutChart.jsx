import React from "react";
import Chart from "react-apexcharts";
import DevicesIcon from "@mui/icons-material/Devices";
import "./donutchart.scss";

const options = {
  chart: {
    width: "50%",
  },
  legend: {
    show: false,
  },
  colors: ["#d9c7fc", "#c7a9fd", "#ac83fa", "#9155FD"],
  series: [14890, 15692, 41420, 50423],
  labels: ["Acer", "Asus", "HP", "Apple"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: { offSetY: 25 },
          total: {
            formatter: function () {
              const sum = series.reduce((partialSum, a) => partialSum + a, 0);
              return sum.toLocaleString();
            },
            label: "Weekly Sales",
            show: true,
          },
          // show: true,
          // total: {
          //   show: true,
          //   showAlways: true,
          //   fontSize: "14px",
          //   fontFamily: "inter",
          // },
        },
      },
    },
  },
};
const { series, labels } = options;
const DonutChart = () => {
  return (
    <div className="donutchart">
      <div className="donutchart-container">
        <div className="title">
          <h1>Sales Overview</h1>
          <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        <div className="landr-container">
          <div className="left">
            <Chart width={260} options={options} series={series} type="donut" />
          </div>
          <div className="right">
            <div className="total-header">
              <DevicesIcon className="icon" />
              <div className="total">
                <p>Number of Product Sales</p>
                {Object.values(series).reduce(
                  (partialSum, a) => partialSum + a,
                  0
                ) + " Total Product"}
              </div>
            </div>
            <div className="products">
              <div className="product">
                <div className="circle-title">
                  <div className="circle one"></div>
                  <div className="circle-content">
                    <p>{labels[3]}</p>
                    {series[3]}
                  </div>
                </div>
              </div>
              <div className="product">
                <div className="circle-title">
                  <div className="circle two"></div>
                  <div className="circle-content">
                    <p>{labels[2]}</p>
                    {series[2]}
                  </div>
                </div>
              </div>
              <div className="product">
                <div className="circle-title">
                  <div className="circle three"></div>
                  <div className="circle-content">
                    <p>{labels[1]}</p>
                    {series[1]}
                  </div>
                </div>
              </div>
              <div className="product">
                <div className="circle-title">
                  <div className="circle four"></div>
                  <div className="circle-content">
                    <p>{labels[0]}</p>
                    {series[0]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
