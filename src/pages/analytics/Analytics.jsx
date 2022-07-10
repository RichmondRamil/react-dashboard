import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import {
  Sidebar,
  Navbar,
  CardIcon,
  Statistic,
  BarChartTwo,
  TotalEarnigns,
  LineGridChart,
  CardWithIcon,
  RadarChart,
  DepositAndWithdraw,
} from "../../components";
import { Trophy } from "../../assets";

import "./analytics.scss";

const Analytics = () => {
  return (
    <div className="analytics">
      <Sidebar />
      <div className="analytics-container">
        <Navbar />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CardIcon
                title="Congratulations Richmond 🥳"
                subtitle="Best Seller of the month"
                total="₱287k"
                color="green"
                percent="38%"
                view="VIEW SALES"
                img={Trophy}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Statistic />
            </Grid>
            <Grid item xs={12} md={6}>
              <BarChartTwo />
            </Grid>
            <Grid item xs={12} md={6} container spacing={2}>
              <Grid item xs={12} md={8}>
                <TotalEarnigns />
              </Grid>
              <Grid item xs={12} md={4} container spacing={2}>
                <Grid item xs={12} md={12}>
                  <LineGridChart />
                </Grid>
                <Grid item xs={12} md={12}>
                  <CardWithIcon
                    title="New Projects"
                    icon={<BusinessCenterIcon />}
                    description="Total Projects Made"
                    total="874"
                    classPercent="red"
                    percent="-18%"
                    btmdesc="Yearly Projects"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <RadarChart />
            </Grid>
            <Grid item xs={12} md={8}>
              <DepositAndWithdraw />
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Analytics;
