import React from 'react'
import styles from './index.module.css';

const Card = () => {
  return (
    <div className={styles.card}>
        <div className={styles.cardHeading}>heading heading heading</div>
        <div className={styles.cardBody}>
            <div>5647</div>
            <div>chart</div>
        </div>
    </div>
  )
}

export default Card;