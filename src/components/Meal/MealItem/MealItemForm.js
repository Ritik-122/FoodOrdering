import React, { useContext } from "react";
import classes from "../MealItem/MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";

export default function MealItemForm(props) {

 
  const cartCtx=useContext(CartContext) 
  const addItemToCart=(e)=>{
    e.preventDefault()
   
    const quantity=document.getElementById("amount_"+props.id).value
    cartCtx.addItem({...props.item,quantity: quantity}) 

  }

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_"+props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+Add</button>
    </form>
  );
}
