import React from "react";
import classes from "../Layout/Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImg from "../../assets/meals.jpg";

export default function Header(props) {

  
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
       <HeaderCartButton onClick={props.onShowCart}/> 
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="cart" />
      </div>
    </React.Fragment>
  );
}
