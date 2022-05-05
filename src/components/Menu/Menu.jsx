import React from 'react';
import styles from './Menu.module.scss'
import {ReactComponent as Logo} from "../../assets/dashLogo.svg";

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <nav>
        <a href='/'>
          <Logo/>
        </a>
        <div className={styles.mainMenuContainer}>
          <p className={styles.mainMenuTitle}>MAIN MENU</p>



        </div>
      </nav>


    </div>
  );
};


export default Menu;
