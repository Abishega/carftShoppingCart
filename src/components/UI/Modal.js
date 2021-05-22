import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
    console.log('modal>>>>>', props.children);
  const BackDrop = (props) => {
    return <div  onClick = {props.onClickingBackdrop} className={classes.backdrop}></div>;
  };

  const ModalOverlay = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop  onClickingBackdrop = {props.onClickingBackdrop}/>,
        document.getElementById("backdrop-modal-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};

export default Modal;
