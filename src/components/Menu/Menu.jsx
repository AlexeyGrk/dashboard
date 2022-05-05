import React from 'react';
import styles from './Menu.module.scss'
import {ReactComponent as Logo} from "../../assets/dashLogo.svg";

const Menu = () => {
  return (
    <aside className={styles.menuContainer}>
      <Logo/>
    </aside>
  );
};


export default Menu;
