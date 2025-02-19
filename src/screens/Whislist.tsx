import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/Slice/WishlistSlice';
import { addToCart } from '../redux/Slice/CartSlice';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const Wishlist = () => {
  const wishlistItems = useSelector((state: any) => state.wishlist.wishlist);
  const dispatch = useDispatch();

  const renderItem = ({ item }: any) => (
    <View style={styles.wishlistItem}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          onPress={() => dispatch(addToCart(item))}
          style={styles.addToCartButton}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => dispatch(removeFromWishlist(item.id))}
          style={styles.removeButton}
        >
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {wishlistItems.length === 0 ? (
        <Text style={styles.emptyWishlist}>Your wishlist is empty</Text>
      ) : (
        <FlatList
          data={wishlistItems}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
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
  wishlistItem: {
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
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addToCartButton: {
    backgroundColor: '#000',
    padding: 8,
    borderRadius: 5,
    marginRight: 5,
  },
  removeButton: {
    backgroundColor: '#82031c',
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    fontSize:responsiveFontSize(1.5),
    color: 'white',
    fontWeight: 'bold',
  },
  emptyWishlist: {
    textAlign: 'center',
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    marginTop: responsiveHeight(20),
    color: '#666',
  },
});

export default Wishlist;
