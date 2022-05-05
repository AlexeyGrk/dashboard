import React, {useState} from 'react';
import styles from './Dashboard.module.scss'
import Menu from "../Menu/Menu";
import DashBoardHeader from "../DashboardHeader/DashboardHeader";
import DashboardCharts from "../DashboardCharts/DashboardCharts";

const Dashboard = () => {
  const [isShowMenu, setIsShowMenu] = useState(true);
  return (
    <div className={styles.dashboardMainConitainer}>
      {isShowMenu && <Menu setIsShowMenu={setIsShowMenu}/>}
      <div className={styles.dashboardWithoutMenuContainer}>
        <DashBoardHeader/>
        <DashboardCharts/>

      </div>


    </div>
  );
};



export default Dashboard;
