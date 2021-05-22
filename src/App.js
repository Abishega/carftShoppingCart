import React, { useState } from "react";
import CartProvider from "./store/CartProvider";

import Header from "./components/Layout/header";
import ArtSupplies from "./components/ArtSupplies/ArtSupplies";
import Cart from "./components/Cart/Cart";

function App() {
  const [isCartIconClicked, toggleCartIconButtonClicked] = useState(false);

  const cartIconClicked = () => {
    toggleCartIconButtonClicked(!isCartIconClicked);
  };
  const onClickingCloseButton = () => {
    toggleCartIconButtonClicked(!isCartIconClicked);
  };
  return (
    <CartProvider>
      {isCartIconClicked && (
        <Cart onClickingCloseButton={onClickingCloseButton} />
      )}

      <Header cartIconClicked={cartIconClicked} />
      <ArtSupplies />
    </CartProvider>
  );
}

export default App;
