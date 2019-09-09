import React from 'react';
import styles from './Checkout.module.css'
import { totalPrice } from '../utils/totalPrice'

const Checkout = props => {
    const { basket, removeItem} = props;
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
                            <h5>Item price: {item.price}£</h5>
                            <button onClick={() => removeItem(item.id)}>remove item</button>
                        </div>
                    )
                })
                
            }
            {
                basket.length === 0 ? <div></div> :
                <div>Total to pay: {totalPrice(basket)} <button>Buy</button></div>
            }
        </div>
     );
}
 
export default Checkout;