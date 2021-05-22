import classes from "./ArtSupplyItem.module.css";
import ArtSupplyItemForm from './ArtSupplyItemForm';
import CartContext from '../../../store/cart-context';
import { useContext } from "react";

const ArtSupplyItem = (props) => {

  const cartCtx = useContext(CartContext);
  const price = `Rs.${props.price.toFixed(2)}`;

  const addTocartHandler = amount => {
    console.log('atc', props);
cartCtx.addItem({
  id: props.id,
  name: props.name,
  amount: amount,
  price: props.price,
});
  }
  return (
    <li className={classes.artSupply}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
     <ArtSupplyItemForm onAddToCart = {addTocartHandler}/>
      </div>
    </li>
  );
};

export default ArtSupplyItem;
