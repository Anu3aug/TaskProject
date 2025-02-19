import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/Slice/CartSlice';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const CartScreen = () => {
  const cartItems = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();

  const renderItem = ({ item }: any) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => dispatch(decreaseQuantity(item.id))} style={styles.quantityButton}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.quantity}>{item.quantity}</Text>

          <TouchableOpacity onPress={() => dispatch(increaseQuantity(item.id))} style={styles.quantityButton}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={() => dispatch(removeFromCart(item.id))} style={styles.removeButton}>
        <Text style={styles.removeText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCart}>Your cart is empty</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}

      {cartItems.length > 0 && (
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  image: {
    width: responsiveWidth(20),
    height: responsiveHeight(10),
    borderRadius: 8,
    resizeMode: 'contain',
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: responsiveFontSize(2),
    color: '#000',
    marginVertical: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityButton: {
    backgroundColor: '#000',
    borderRadius: 5,
    marginHorizontal:8,
    height:30,
    width:30,
    justifyContent:'center',
    alignItems:'center'
  },
  quantityText: {
    color: '#fff',
    fontSize: responsiveFontSize(2.5),
  },
  quantity: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  removeButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#82031c',
  },
  removeText: {
    color: 'white',
    fontWeight: 'bold',
  },
  emptyCart: {
    textAlign: 'center',
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    marginTop: responsiveHeight(20),
    color: '#666',
  },
  checkoutButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  checkoutText: {
    color: 'white',
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
  },
});

export default CartScreen;
