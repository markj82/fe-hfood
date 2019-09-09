import React, { useState, useEffect } from 'react';
import { sendItemsToDB, getItems } from '../utils/axiosRequests'
import styles from './AdminPanel.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrashAlt,
    faEdit
  } from "@fortawesome/free-solid-svg-icons";


const AdminPanel = () => {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [img_url, setImg_url] = useState('');
    const [qty, setQty] = useState(0);

    const [allFood, setAllFood] = useState(null);

    useEffect(() => {
        getItems().then(data => {
            console.log('mulit call test');
            setAllFood(data)
        })
    }, [])
    
    const handleSubmit = e => {
        e.preventDefault()
        console.log("item added")
        sendItemsToDB({ name, type, img_url, qty })
    }

    const handleInputChange = e => {
        const { name } = e.target;
        const { value } = e.target;
        if (name === "name") {
            setName(value)
        }
        if (name === "type") {
            setType(value)
        }
        if (name === "img_url") {
            setImg_url(value)
        }
        if (name === "qty") {
            setQty(value)
        }
    }

    return ( 
        <div className={styles.main}>
            <h3>Add new item to database</h3>
            <form onSubmit={handleSubmit}>
                <label> Name:
                    <input type="text" name="name" onChange={handleInputChange}/>
                </label>
                <label> Type:
                    <select name="type" onChange={handleInputChange}>
                        <option disabled selected value>Select type</option>
                        <option value="fruit">Fruit</option>
                        <option value="vegetable">Vegetable</option>
                        <option value="bread">Bread</option>
                        <option value="oil">Oil</option>
                    </select>
                </label>
                <label>Image url:
                    <input type="text" name="img_url" onChange={handleInputChange}/>
                </label>
                <label>Quantity:
                    <input type="number" name="qty" onChange={handleInputChange}/>
                </label>
                <button>Add</button>
            </form>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>type</th>
                    <th>image</th>
                    <th>qty</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    allFood === null ? <div>Loading content...</div> :
                    allFood.map(oneFood => {
                    return (
                        <tr key={oneFood.id}>
                            <td>{oneFood.id}</td>
                            <td>{oneFood.name}</td>
                            <td>{oneFood.type}</td>
                            <td><img src={oneFood.img_url} className={styles.img}/></td>
                            <td>{oneFood.qty}</td>
                            <td><FontAwesomeIcon icon={faEdit} /></td>
                            <td><FontAwesomeIcon icon={faTrashAlt} /></td>
                        </tr>
                    )
                    })
                }
                </tbody>
            </table>
        </div>
     );
}
 
export default AdminPanel;