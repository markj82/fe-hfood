import React, { useState, useEffect } from 'react';
import { getItems } from '../utils/axiosRequests'
import styles from './ShopFloor.module.css'
import Basket from './Basket'
import Popup from 'reactjs-popup';
import { Link } from '@reach/router'
import Checkout from './Checkout';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShoppingBasket
  } from "@fortawesome/free-solid-svg-icons";


const ShopFloor = () => {

    const [allFood, setAllFood] = useState(null);
    const [basket, setBasket] = useState([])

    useEffect(() => {
      getItems().then(data => {
        console.log('multi call tester')
        setAllFood(data)
      })
    }, [])

    const addToBasket = obj => {
      setBasket([obj, ...basket])
      console.log('added to basket, obj: ', obj)
    }
  
    const showBasket = () => {
      console.log(basket)
    }
    
    return (
        <>
        <div>
          <Popup trigger={<button className={styles.myButton}>Checkout</button>} modal>
            {close => (
              <Checkout basket={basket}/>
              )}
          </Popup>
          <Basket howMany={basket.length}/>
        </div>
        

        {/* <button onClick={showBasket}>Finish shopping, show basket(console)</button> */}
        <div className={styles.main}>
            {
              allFood === null ? <div>Loading content...</div> :
          
              allFood.map(oneFood => {
              return (
                <div className={styles.item} key={oneFood.id}>
                  <p className={styles.name}>{oneFood.name}</p>
                  <img src={oneFood.img_url} className={styles.image}/>
                  <p>{oneFood.desc}</p>
                  <p className={styles.category}>Category: {oneFood.type}</p>
                  <p className={styles.qty}>Available quantity: {oneFood.qty}</p>
                  <p>Price: {oneFood.price}£</p>
                  <button className={styles.basketButton} onClick={()=> addToBasket(oneFood)}>Add to basket <FontAwesomeIcon icon={faShoppingBasket} /></button>
                </div>
              )
              })
            }
        </div>
      </>
    )
  }
  
  export default ShopFloor;