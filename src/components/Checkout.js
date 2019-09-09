import React from 'react';
import styles from './Checkout.module.css'

const Checkout = props => {
    const { basket } = props;
    return ( 
        <div className={styles.main}>
            <p className={styles.checkout}>Checkout</p>
            {
                basket.length === 0 ? <p>Your basket is empty</p> :
                basket.map(item => {
                    return (
                        <div className={styles.oneItem}>
                            <h3>{item.name}</h3>
                            <img src={item.img_url} className={styles.image}/>
                            <h5>{item.type}</h5>
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default Checkout;