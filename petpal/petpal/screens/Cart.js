import React from 'react';
import {View, StyleSheet , Text,TouchableOpacity , ScrollView} from 'react-native';
import { useContext ,useState} from 'react';
import CartContext from '../CartContext';
import Cartcard from '../components/Cartcard';





const Cart = ({navigation}) => {
   
    // const { items, updateCartItemQuantity } = useContext(CartContext);
    // const {items,updatecart}=useContext(CartContext);
    const { items } = useContext(CartContext);
    
    console.log(items.length);
    const totalPrice = items.reduce((acc, item) => {
        return acc + item.quantity * item.price;

    }, 0);
    
   const isitems = items.length > 0;
   console.log(isitems);
  
    console.log(totalPrice);
    return (
      <>
      {isitems?(
        <ScrollView>
        <View>
        {

        
        items.map((cart)=>(
            <Cartcard 
                key={cart._id}
                id ={cart._id}
            image={cart.imageurl}
            name={cart.name}
            ratings={cart.rating}
            price={cart.price}
            quantity={cart.quantity}
            
          
            />
          
        ))

           
           }
           <View><Text>totalPrice: {totalPrice}</Text></View>
           <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText} >Proceed To Buy</Text>
      </TouchableOpacity>
        </View>
        </ScrollView>):(
          <View style={{height:"100%",justifyContent:"center",alignItems:"center"}}>
          <Text style={{fontSize:24}}>YOUR CART IS EMPTY</Text>
          </View>
        
        )
      }
      </>
       
    );
}


const styles = StyleSheet.create({
    button: {
    backgroundColor: "#F77A3B",
    padding: 10,
    borderRadius: 30,
    alignItems: "center",
    marginLeft: 25,
    width: "70%",
    marginBottom: 20,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  }
})

export default Cart;
