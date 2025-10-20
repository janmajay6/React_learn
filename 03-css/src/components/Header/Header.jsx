import React from 'react'
import styles from "./Header.module.css"
function Header() {
  return (
    <div className= {styles.header}>
        <h1>janmajay</h1>
        <button className='btn'>login</button>
    </div>
  )
}

export default Header