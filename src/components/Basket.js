import React from 'react';
import styles from './Basket.module.css'

const Basket = props => {
    const { howMany } = props;
    return (
        <div className={styles.main}>
            <p className={styles.basket}>Your basket ({howMany})</p>
        </div> 
     );
}
 
export default Basket;