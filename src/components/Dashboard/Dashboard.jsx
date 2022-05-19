import React, {useEffect, useState} from 'react';
import styles from './Dashboard.module.scss'
import Menu from "../Menu/Menu";
import DashBoardHeader from "../DashboardHeader/DashboardHeader";
import DashboardCharts from "../DashboardCharts/DashboardCharts";
import {ReactComponent as LeftArrowBtn} from "../../assets/arrowLeftButton.svg";
import useWindowDimensions from "../../hooks/useWindowDimension";

const Dashboard = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(()=>{
    console.log('render')
    if(width>1023){
      setIsShowMenu(true)
    }
  },[width])

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
