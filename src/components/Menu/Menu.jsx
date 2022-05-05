import React from 'react';
import styles from './Menu.module.scss'
import {ReactComponent as Logo} from "../../assets/dashLogo.svg";
import {ReactComponent as DashboardIcon} from "../../assets/Chart_fill.svg";
import {ReactComponent as ChatIcon} from "../../assets/Chat.svg";
import {ReactComponent as AccountsIcon} from "../../assets/User_box.svg";
import {ReactComponent as ScheduleIcon} from "../../assets/Calendar.svg";
import {ReactComponent as SearchIcon} from "../../assets/Search_alt.svg";
import {ReactComponent as AnalyticsLine} from "../../assets/Chart_alt.svg";
import {ReactComponent as FolderIcon} from "../../assets/Folder_alt.svg";
import {ReactComponent as SettingsIcon} from "../../assets/Setting_alt_line.svg";
import {ReactComponent as CirleIcon} from "../../assets/bx_bxs-help-circle.svg";
import {NavLink} from "react-router-dom";
import {ReactComponent as LeftArrowBtn} from "../../assets/arrowLeftButton.svg";


const Menu = ({setIsShowMenu}) => {
  return (
    <div className={styles.menuContainer}>
      <nav>
        <NavLink
          to="/"
          className={styles.mainMenuLogoItem}
        >
          <Logo className={styles.headerLogo}/>
        </NavLink>
        <LeftArrowBtn onClick={()=>setIsShowMenu(prev=>!prev)}  className={styles.headerContainerLeftBtn}/>
        <div className={styles.mainMenuContainer}>
          <p className={styles.mainMenuTitle}>MAIN MENU</p>
          <NavLink
            to="/"
          className={styles.mainMenuNavItem}
          >
            <div className={styles.mainMenuItem}>
              <DashboardIcon className={styles.mainMenuItemDashboardIcon}/>
              <span className={styles.mainMenuItemText}>Dashboard</span>
            </div>

          </NavLink>
          <NavLink
            to="/"
            className={styles.mainMenuNavItem}
          >
            <div className={styles.mainMenuItem}>
              <ChatIcon className={styles.mainMenuItemDashboardIcon}/>
              <span className={styles.mainMenuItemText}>Inbox</span>
            </div>

          </NavLink>

        </div>
        <div className={styles.secondaryMenuContainer}>
          <p className={styles.mainMenuTitle}>Workspace</p>
          <NavLink
            to="/"
            className={styles.mainMenuNavItem}
          >
            <div className={styles.mainMenuItem}>
              <AccountsIcon className={styles.mainMenuItemDashboardIcon}/>
              <span className={styles.mainMenuItemText}>Accounts</span>
            </div>

          </NavLink>
          <NavLink
            to="/"
            className={styles.mainMenuNavItem}
          >
            <div className={styles.mainMenuItem}>
              <ScheduleIcon className={styles.mainMenuItemDashboardIcon}/>
              <span className={styles.mainMenuItemText}>Schedule Post</span>
            </div>

          </NavLink>
          <NavLink
            to="/"
            className={styles.mainMenuNavItem}
          >
            <div className={styles.mainMenuItem}>
              <SearchIcon className={styles.mainMenuItemDashboardIcon}/>
              <span className={styles.mainMenuItemText}>Communities</span>
            </div>

          </NavLink>
          <NavLink
            to="/"
            className={styles.mainMenuNavItem}
          >
            <div className={styles.mainMenuItem}>
              <AnalyticsLine className={styles.mainMenuItemDashboardIcon}/>
              <span className={styles.mainMenuItemText}> Analytics</span>
            </div>

          </NavLink>

        </div>
        <div className={styles.thirdMenuContainer}>
          <p className={styles.mainMenuTitle}>General</p>
          <NavLink
            to="/"
            className={styles.mainMenuNavItem}
          >
            <div className={styles.mainMenuItem}>
              <FolderIcon className={styles.mainMenuItemDashboardIcon}/>
              <span className={styles.mainMenuItemText}>File & Folders</span>
            </div>

          </NavLink>
          <NavLink
            to="/"
            className={styles.mainMenuNavItem}
          >
            <div className={styles.mainMenuItem}>
              <SettingsIcon className={styles.mainMenuItemDashboardIcon}/>
              <span className={styles.mainMenuItemText}>Settings</span>
            </div>
          </NavLink>
        </div>

      </nav>

      <div className={styles.helpSectionContainer}>
        <div className={styles.circleBg}>
             <CirleIcon/>
        </div>

        <p className={styles.helpSectionTitle}> Need Help with <span className={styles.helpSectionBoldWord}>Dash</span>?</p>

        <button className={styles.helpSectionButton}>
          Go to help center
        </button>

      </div>


    </div>
  );
};


export default Menu;
