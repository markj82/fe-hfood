import React from 'react';
import NavBar from './NavBar'
import AdminPanel from './AdminPanel'
import ShopFloor from './ShopFloor'
import styles from './App.module.css';
import { Router } from '@reach/router'

const App = () => {

  return (
    <div className={styles.main}>
      <NavBar />
      <Router>
        <ShopFloor path="/" />
        <AdminPanel path="/admin" />
      </Router>
    </div>
  )
}

export default App;
