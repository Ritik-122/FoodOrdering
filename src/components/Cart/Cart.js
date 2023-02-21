import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";


export default function Cart(props) {
  const CartCtx = useContext(CartContext);
  const cartItemRemoveHandler = (id) => {
    CartCtx.removeItem(id);
  };
  const cartItemAddHandler=(item)=>{
    CartCtx.addItem({...item,quantity:1})
  }
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {CartCtx.items.map((item) => (
        <CartItem
        key={item.id}
          name={item.name}
          price={item.price}
          amount={item.quantity}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
        />
      ))}
    </ul>
  );
  let totalAmount = 0;
  let count=0
  CartCtx.items.forEach((item) => {
    totalAmount =totalAmount+ (item.quantity)*(item.price);
    count++
  });
  let hasItem=count>0?true:false
  console.log(hasItem,count)


  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
         {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}
