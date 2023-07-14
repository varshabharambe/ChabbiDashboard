import React from 'react';
import logo from '../../images/Logo.jpg';
import category from '../../images/Category.png'
import location from '../../images/Location.jpg'
import game from '../../images/Game.jpg'
import ticket from '../../images/Ticket Star.jpg'
import styles from './index.module.css';
import cn from 'classnames'

const SideMenu = () => {
    // const menuItems = [
    //     {src : {category}, items:"Dashboard"},
    //     {src : {category}, items:"Dashboard"},
    //     {src : {category}, items:"Dashboard"},
    //     {src : {category}, items:"Dashboard"},
    //     {src : {category}, items:"Dashboard"},
    //     {src : {category}, items:"Dashboard"}
    // ];
  return (
    <div className={styles.sideMenu}>
        <div className={styles.logo}><img src={logo} alt=""/></div>
        <div className={styles.menuBar}>
            {/* {menuItems.map((item) => {
                return <>
                   <menuItem/>
                </>
            })} */}
            {/* <menuItem imgSrc={category} val="Dashboard"/> */}
            <div className={cn(styles.menuItem, styles.background)}>
                <img src={category} alt="" width={25} height={25}/>
                <div>Dashboard</div>
            </div>
            <div className={cn(styles.menuItem)}>
                <img src={game} alt="" width={25} height={25}/>
                <div>Trainings</div>
            </div>
            <div className={cn(styles.menuItem)}>
                <img src={ticket} alt="" width={25} height={25}/>
                <div>Users</div>
            </div>
            <div className={cn(styles.menuItem)}>
                <img src={location} alt="" width={25} height={25}/>
                <div>Analytics</div>
            </div>
            <div className={cn(styles.menuItem)}>
                <img src={location} alt="" width={25} height={25}/>
                <div>My Account</div>
            </div>
            <div className={cn(styles.menuItem)}>
                <img src={location} alt="" width={25} height={25}/>
                <div>Support</div>
            </div>
        </div>
    </div>
  )
}

export default SideMenu;