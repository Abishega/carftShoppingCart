import Input from "../../UI/input";
import React, { useRef , useState } from "react";
import classes from "./ArtSupplyItemForm.module.css";

const ArtSupplyItemForm = (props) => {

 const[amountIsValid, setAmountIsValid]  = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false)
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button> + ADD</button>
      {!amountIsValid && <p>Please Enter a Valid Amount</p>}
    </form>
  );
};
export default ArtSupplyItemForm;
