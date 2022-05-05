import React from 'react';
import styles from './DashboardHeader.module.scss'
import {ReactComponent as Bell} from "../../assets/djingleIcon.svg";
import {ReactComponent as MainAvatar} from "../../assets/mainAvatarIcon.svg";
import {ReactComponent as ArrowDownBtnIcon} from "../../assets/arrowDownIcon.svg";

const DashBoardHeader = () => {
  return (
    <header className={styles.headerContainer}>
     <div className={styles.searchContainer}>
       <h1 className={styles.headerTitle}>Dashboard</h1>
       <div className={styles.secondaryInfoContainer}>
         <label>
           <input type='text' placeholder='Search...' className={styles.searchInput}/>
         </label>
         <div className={styles.vl}/>
         <div className={styles.userInfoContainer}>
           <div className={styles.bellsBg}>
             <Bell/>
           </div>
           <div className={styles.mainAvatarContainer}>
             <MainAvatar/>

           </div>
           <span className={styles.mainAvatarContainerName}>Elza Miller  <ArrowDownBtnIcon className={styles.arrowDownUserInfo}/></span>


         </div>

       </div>

     </div>



    </header>
  );
};


export default DashBoardHeader;
