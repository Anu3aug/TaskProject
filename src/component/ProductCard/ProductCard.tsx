import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons'; 


type Props = {
    product : any
}

const ProductCard = ({ product }:Props) => {
  return (
    <View style={styles.card}>
      <Image source={product.image} style={styles.image} />
      <TouchableOpacity style={styles.wishlistIcon}>
        <Icon name="favorite-border" size={24} color="#000000" />
      </TouchableOpacity>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productDetails} numberOfLines={2} ellipsizeMode='tail'>{product.details}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: responsiveWidth(42),
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    margin: 8,
    padding: 15,
    overflow: 'hidden',

  },
  image: {
    width: '80%',
    height: responsiveHeight(10),
    borderRadius: 8,
    resizeMode:'contain'
  },
  wishlistIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  productPrice: {
    fontSize:responsiveFontSize(2),
    fontWeight:'bold',
    color: '#000',
    marginVertical: 5,
  },
  productDetails: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
});

export default ProductCard;
