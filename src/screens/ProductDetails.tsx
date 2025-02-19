import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, ScrollView, StatusBar } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../redux/Slice/WishlistSlice';
import { addToCart } from '../redux/Slice/CartSlice';
import { RootState } from '../redux/store';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Snackbar from 'react-native-snackbar';
import Button from '../component/Button';

type Props = {
  route: any;
  navigation: any;
};

const ProductDetails = ({ route, navigation }: Props) => {
  const { product } = route.params;
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.wishlist);
  const isFavorite = wishlist.some(item => item.name === product.name);

  const toggleWishlist = () => {
    if (isFavorite) {
      dispatch(removeFromWishlist(product.name));
      Snackbar.show({
        text: 'Product removed from Wishlist',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#82031c',
        textColor: 'white',
      });
    } else {
      dispatch(addToWishlist(product));
      Snackbar.show({
        text: 'Product added to Wishlist',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#672ffb',
        textColor: 'white',
      });
    }
  };

  const onAddToCart = () => {
    dispatch(addToCart(product));
    Snackbar.show({
      text: 'Product added to cart',
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: '#672ffb',
      textColor: 'white',
    });
  };

  

  return (
    <ScrollView style={styles.container}>
      <StatusBar  backgroundColor="white" barStyle='dark-content'/>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleWishlist} style={styles.iconButton}>
          <AntDesign name={isFavorite ? 'heart' : 'hearto'} size={24} color={isFavorite ? '#82031c' : 'black'} />
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.productImage} resizeMode="contain" />
      </View>
      <FlatList
        data={product.relatedImages}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.relatedImagesContainer}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.relatedImageWrapper}>
            <Image source={item.image} style={styles.relatedImage} />
          </TouchableOpacity>
        )}
        style={{paddingBottom:5}}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productSize}>Size: M</Text>
        <Text style={styles.productDetails}>{product.details}</Text>
        <Text style={styles.productPrice}>{product.price}</Text>
       
        <Button 
        title='Add to Cart'
        onPress={onAddToCart}
        backgroundColor="#000"
        textColor='#fff'

        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: responsiveWidth(5),
    marginTop: responsiveHeight(3),
  },
  iconButton: {
    padding: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: responsiveHeight(2),
  },
  productImage: {
    width: responsiveWidth(80),
    height: responsiveHeight(40),
  },
  relatedImagesContainer: {
    paddingHorizontal: responsiveWidth(5),
    marginTop: responsiveHeight(2),
  },
  relatedImageWrapper: {
    backgroundColor: '#f9f9f9',
    padding: 4,
    borderRadius: 10,
    marginHorizontal: 5,
    elevation: 3,
  },
  relatedImage: {
    width: responsiveWidth(22),
    height: responsiveHeight(10),
    borderRadius: 10,
    resizeMode: 'contain',
  },
  detailsContainer: {
    paddingHorizontal: responsiveWidth(5),
    marginTop: responsiveHeight(3),
  },
  productName: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: 'black',
  },
  productSize: {
    fontSize: responsiveFontSize(2),
    color: 'gray',
    marginTop: 5,
  },
  productDetails: {
    fontSize: responsiveFontSize(2),
    color: 'black',
    marginTop: 10,
    lineHeight: 22,
  },
  productPrice: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: '#672ffb',
    marginVertical: responsiveHeight(2),
  },
  addToCartButton: {
    backgroundColor: '#000',
    paddingVertical: responsiveHeight(2),
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  addToCartText: {
    color: 'white',
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
  },
});

export default ProductDetails;
