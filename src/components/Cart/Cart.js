import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./cartItem";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item)
  }
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          name={cartItem.name}
          amount={cartItem.amount}
          price={cartItem.price}
          onRemove = {cartItemRemoveHandler.bind(null, cartItem.id)}
  
          onAdd = {cartItemAddHandler.bind(null, cartItem)}
        />
      ))}
    </ul>
  );
  console.log('cartitems', cartItems);
  return (
    <Modal onClickingBackdrop={props.onClickingCloseButton}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.onClickingCloseButton}
        >
          {" "}
          Close
        </button>
        {hasItems && <button className={classes.button}> Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
