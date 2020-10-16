import React from 'react';

import styles from './MobileMenuBar.module.scss';



const menuItems = [
  {icon: '/assets/img/icons/search.png', href: '#'},
  {icon: '/assets/img/icons/faves.png', href: '#'},
  {icon: '/assets/img/icons/user.png', href: '#'},
  {icon: '/assets/img/icons/cart.png', href: '#'},
]

const MenuItem = ({ icon, href }) => {
  return(
   <a href={href}><div className={styles.menuBtn} style={{backgroundImage: `url(${icon})`}}></div></a>
  )
}


const MobileMenuBar = ({ open, setOpen }) => {
  return(
    <div className={styles.mobileBar}>
      <div 
      className={styles.menuOpenBtn} 
      onClick={() => setOpen(!open)}
      style={open ? {transform: 'rotateZ(90deg)'} : {transform: 'rotateZ(0deg)'}}
      ></div>
      <ul className={styles.menuItems}>
        {
          menuItems.map((item, key) => {
            return <MenuItem icon={item.icon} href={item.href} key={key}/>
          })
        }
      </ul>
    </div>
  )
}

export default MobileMenuBar