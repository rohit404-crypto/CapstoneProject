import React from "react";
import { View, StyleSheet,  ScrollView, Text,TouchableOpacity} from "react-native";
import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { useContext } from "react";
import CartContext from "../CartContext";
import { Icon } from "@rneui/base";

const Home = ({navigation}) => {
  const [Prod, setProd] = useState([]);

  // add these
  const { addToWish, addToCart, removeFromWish, items ,list} = useContext(CartContext);
  const [wishlistStatus, setWishlistStatus] = useState({});



  useEffect(() => {
    fetch(`http://192.168.1.9:3000/api/petproducts`)
      .then((res) => res.json())
      .then((data) => setProd(data));
  }, []);


  // add from this to
  const toggleWishlist = (itemId) => {
    setWishlistStatus((prevStatus) => {
      const updatedStatus = { ...prevStatus };
      updatedStatus[itemId] = !updatedStatus[itemId];
      return updatedStatus;
    });

    const item = Prod.find((item) => item._id === itemId);

    if (wishlistStatus[itemId]) {
      removeFromWish(itemId);
    } else {
      addToWish(item);
    }


  };
  
  useEffect(() => {
    setWishlistStatus((prevStatus) => {
      const updatedStatus = { ...prevStatus };

      // Clear the status for items that are not in the wishlist
      Object.keys(updatedStatus).forEach((itemId) => {
        if (!list.find((item) => item._id === itemId)) {
          delete updatedStatus[itemId];
        }
      });

      return updatedStatus;
    });
  }, [list]);


  // This

  return (
    <ScrollView>

    <Text onPress={()=>{navigation.navigate("Cart")}}>Cart</Text>
    {/* add this */}
    <Text onPress={()=>{navigation.navigate("Wish")}}>Wish</Text>
    <View style={styles.container}>

      <View style={styles.row}>
        {Prod.map((item) => (
          <ProductCard
          key={item._id}       
            image={item.imageurl}
            name={item.name}
            ratings={item.rating}
            price={item.price}
            handleCart={() => addToCart(item)}

            // add from  this to
            actionButton={{
                icon: (
                  <TouchableOpacity onPress={() => toggleWishlist(item._id)}>
                    <Icon
                      name={wishlistStatus[item._id] ? "heart" : "hearto"}
                      type="antdesign"
                      color={wishlistStatus[item._id] ? "red" : "black"}
                      size={20}
                    />
                  </TouchableOpacity>
                ),
              }}

              // this
         />
          
        ))}
       
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
      justifyContent: "space-around",
    flexWrap: "wrap",
  },
  cartButton: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    margin: 16,
  },
  cartButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Home;
