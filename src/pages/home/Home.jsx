import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { GirlHeart, GirlLaptop } from "../../assets";
import {
  Sidebar,
  Navbar,
  CardIcon,
  Statistic,
  AreaChart,
  LineChart,
  DonutChart,
  Timelines,
  BarChart,
  TableComponent,
} from "../../components";
import "./home.scss";

const Home = () => {
  return (
    <div className="home-page">
      <Sidebar />
      <div className="home-page_container">
        <Navbar />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <CardIcon
                title="Ratings"
                total="489k"
                color="green"
                percent="38%"
                textClass="purple"
                desc="Year of 2022"
                view="VIEW DETAILS"
                img={GirlHeart}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CardIcon
                title="Sessions"
                total="296k"
                color="red"
                percent="-28%"
                textClass="gray"
                desc="Last Week"
                view="VIEW DETAILS"
                img={GirlLaptop}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Statistic />
            </Grid>
            <Grid item xs={12} md={3}>
              <AreaChart />
            </Grid>
            <Grid item xs={12} md={3}>
              <LineChart />
            </Grid>
            <Grid item xs={12} md={6}>
              <DonutChart />
            </Grid>
            <Grid item xs={12} md={6}>
              <Timelines />
            </Grid>
            <Grid item xs={12} md={6}>
              <BarChart />
            </Grid>
            <Grid item xs={12} md={12}>
              <TableComponent />
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Home;
