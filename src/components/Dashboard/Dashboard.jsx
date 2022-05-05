import React from 'react';
import styles from './Dashboard.module.scss'
import Menu from "../Menu/Menu";

const Dashboard = () => {
  return (
    <div className={styles.dashboardMainConitainer}>
      <Menu/>

    </div>
  );
};



export default Dashboard;
