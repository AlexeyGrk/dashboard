import React from 'react';
import styles from './Dashboard.module.scss'
import Menu from "../Menu/Menu";
import DashBoardHeader from "../DashboardHeader/DashboardHeader";

const Dashboard = () => {
  return (
    <div className={styles.dashboardMainConitainer}>
      <Menu/>
      <div className={styles.dashboardWithoutMenuContainer}>
        <DashBoardHeader/>
      </div>


    </div>
  );
};



export default Dashboard;
