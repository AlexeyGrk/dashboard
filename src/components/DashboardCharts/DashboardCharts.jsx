import React from 'react';
import {ReactComponent as ChartIcon} from "../../assets/contentReachIcon.svg";
import {ReactComponent as PinkCircle} from "../../assets/circle-pink.svg";
import {ReactComponent as BlueCircle} from "../../assets/circle-blue.svg";
import styles from './DashboardCharts.module.scss'

const DashboardCharts = () => {
  return (
    <div className={styles.dashboardChartsContainer}>
     <div className={styles.contentReachSummaryContainer}>
       <div className={styles.contentReachSummaryHead}>
         <div className={styles.contentReachSummaryHeadLogoTitle}>
           <ChartIcon/>
           <h2 className={styles.contentReachSummaryTitle}>Content Reach Summary</h2>
         </div>

         <div className={styles.contentReachSummaryHeadTabs}>
           <span className={styles.contentReachSummaryHeadTab}>Daily</span>
           <span className={styles.contentReachSummaryHeadTab}>Weekly</span>
           <span className={styles.contentReachSummaryHeadTab}>Monthly</span>
         </div>
       </div>
       <div className={styles.contentReachSummaryMainSectionContainer}>
         <div className={styles.contentReachSummaryMainSectionChart}>
         <h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1>
         </div>
         <div className={styles.contentReachSummaryMainSectionSecondaryChart}>
           <div className={styles.contentReachSummaryMainSectionSecondaryChartMainInformation}>
             <div className={styles.contentReachSummaryMainSectionSecondaryChartMainInformationItem}>
               <p  className={styles.contentReachSummaryMainSectionSecondaryChartMainInformationItemNumber}>150K</p>
               <span className={styles.contentReachSummaryMainSectionSecondaryChartMainInformationItemText}>Total Reach</span>
             </div>
             <div  className={styles.contentReachSummaryMainSectionSecondaryChartMainInformationItem}>
               <p className={styles.contentReachSummaryMainSectionSecondaryChartMainInformationItemNumber}>115K</p>
               <span className={styles.contentReachSummaryMainSectionSecondaryChartMainInformationItemText}> <BlueCircle/> Paid Reach</span>
             </div>
             <div className={styles.contentReachSummaryMainSectionSecondaryChartMainInformationItem}>
               <p className={styles.contentReachSummaryMainSectionSecondaryChartMainInformationItemNumber}>35K</p>
               <span className={styles.contentReachSummaryMainSectionSecondaryChartMainInformationItemText}><PinkCircle/> Organic Reach</span>
             </div>

           </div>

         </div>

       </div>


     </div>
    </div>
  );
};


export default DashboardCharts;
