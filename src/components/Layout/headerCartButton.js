import React, { useContext, useEffect , useState} from "react";
import CartIcon from "../Cart/cartIcon";
import classes from "./headerCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((currnum, item) => {
    return currnum + item.amount;
  }, 0);
  const cartIconClicked = () => {
    props.cartIconClicked();
  };

  const[btnHighlighted, setBtnHighlighted] = useState(false)
  const btnClasses = `${classes.button} ${ btnHighlighted ? classes.bump : ''}`;
const { items} = cartCtx;
  useEffect(() => {

    if(items.length === 0){
      return ;


    }
  setBtnHighlighted(true)

 const timer =  setTimeout(() => {
    setBtnHighlighted(false)
  }, 300)

  return () => {
clearTimeout(timer);
  }
  }, [items])
  return (
    <button className={btnClasses}>
      <span className={classes.icon} onClick={cartIconClicked}>
        <CartIcon />
      </span>
      <span>My cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
