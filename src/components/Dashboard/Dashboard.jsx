import React, {useState} from 'react';
import styles from './Dashboard.module.scss'
import Menu from "../Menu/Menu";
import DashBoardHeader from "../DashboardHeader/DashboardHeader";
import DashboardCharts from "../DashboardCharts/DashboardCharts";
import {ReactComponent as LeftArrowBtn} from "../../assets/arrowLeftButton.svg";

const Dashboard = () => {
  const [isShowMenu, setIsShowMenu] = useState(true);
  return (
    <div className={styles.dashboardMainConitainer}>
      {isShowMenu ? <Menu setIsShowMenu={setIsShowMenu}/> : <button className={styles.dashboardMainConitainerShowMenuBtn} onClick={()=>setIsShowMenu(prevState => !prevState)}><LeftArrowBtn/></button>}
      <div className={styles.dashboardWithoutMenuContainer}>
        <DashBoardHeader/>
        <DashboardCharts/>

      </div>


    </div>
  );
};



export default Dashboard;
