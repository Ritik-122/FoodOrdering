import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from '../Layout/HeaderCartButton.module.css'

export default function HeaderCartButton() {
  return (
    <React.Fragment>
        <button className={classes.button}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    </React.Fragment>
  )
}
