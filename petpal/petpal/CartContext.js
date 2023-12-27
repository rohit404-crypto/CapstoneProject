import { createContext, useContext , useState } from "react";


const CartContext=createContext();

export function CartProvider({children}){
  const [items,setItems]=useState([]);
  
  const addToCart = (item)=>{
    const existingItem=items.find((cartItem)=>cartItem._id===item._id);
    if (!existingItem) {
      // If the item is not in the cart, add it with quantity 1
      setItems([...items, { ...item, quantity: 1 }]);
  } else {
      // If the item is already in the cart, update its quantity
      setItems(
          items.map((cartItem) =>
              cartItem.id === item.id
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
          )
      );
  }
 
  };
  // Update cart item quantity
  const updateCartItemQuantity = (itemId, newQuantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item._id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

   // Calculate total price
   const getTotalPrice = () => {
    return items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  const removeFromCart = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
  };
  return(
    <CartContext.Provider value={{items,addToCart,updateCartItemQuantity, getTotalPrice,removeFromCart }}>{children}</CartContext.Provider>
  )
}

export default CartContext;