import React from 'react';
import { Link } from '@reach/router'
import styles from './NavBar.module.css'

const NavBar = () => {
    return ( 
        <div className={styles.main}>
            <Link to="/" className={styles.home}>Healthy food</Link>
            <Link to="/admin" className={styles.admin}>Admin Panel</Link>
        </div>
     );
}
 
export default NavBar;