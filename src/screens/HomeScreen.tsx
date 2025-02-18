import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, StatusBar, TouchableOpacity, Text, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import ProductCard from '../component/ProductCard/ProductCard';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loadWishlist } from '../redux/Slice/WishlistSlice';

type Props = {
  navigation: any;
};

const HomeScreen = ({ navigation }: Props) => {
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    { 
      name: "Nike Air Max 270",
       price: "$96", 
       details: "Comfortable and stylish sneaker.", 
       image: require("../Assets/Images/shoes3.png") 
      },
    { name: "Converse Chuck Taylor", 
      price: "$85.5", 
      details: "Classic and durable.", 
      image: require("../Assets/Images/shoes4.png") 
    },
    { name: "Adidas Ultraboost", 
      price: "$196", 
      details: "Responsive cushioning.", 
      image: require("../Assets/Images/shoes2.png") 
    },
    { name: "Puma RS-X3", 
      price: "$115", 
      details: "Superior cushioning and support.", 
      image: require("../Assets/Images/shoes1.png") 
    },
    { 
      name: "New Balance 990v5",
       price: "$115", 
       details: "Premium materials.", 
       image: require("../Assets/Images/shoes2.png") 
      },
    { 
      name: "Reebok Club C 85", 
      price: "$115", 
      details: "Vintage style.", 
      image: require("../Assets/Images/shoes7.png") 
    },
    {
       name: "Vans Old Skool", 
       price: "$115", 
       details: "Durable canvas upper.", 
       image: require("../Assets/Images/shoes3.png") 
      },
    { 
      name: "Asics Gel-Kayano 28",
       price: "$115",
        details: "Excellent stability.", 
        image: require("../Assets/Images/shoes4.png") 
      },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );





  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#f0f0f0" barStyle="dark-content" />
      <View style={styles.headerStyle}>
        <TouchableOpacity>
          <Feather name="menu" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="gray" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            placeholderTextColor="gray"
            value={searchQuery}
            onChangeText={setSearchQuery} 
          />
        </View>
      </View>

      <View style={[styles.headerStyle, { marginTop: responsiveHeight(3) }]}>
        <View style={{ width: '70%' }}>
          <Text style={styles.titleStyle}>Sneakers</Text>
          <Text style={styles.subTextStyle}>{filteredProducts.length} products found</Text>
        </View>
        <Entypo name="select-arrows" color="black" size={30} />
        <AntDesign name="filter" size={35} color="black" />
      </View>

      <FlatList
        data={filteredProducts}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ marginTop: responsiveHeight(2) }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: responsiveWidth(5),
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: responsiveHeight(5),
    width: responsiveWidth(80),
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    color: 'black',
  },
  titleStyle: {
    fontSize: responsiveFontSize(3),
    color: 'black',
    fontWeight: 'bold',
  },
  subTextStyle: {
    fontSize: responsiveFontSize(1.8),
    color: 'gray',
    marginTop: responsiveHeight(0.5),
  },
});

export default HomeScreen;
