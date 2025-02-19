import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const ProfileScreen = () => {
  const user = useSelector((state: any) => state.auth.user); 
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Image 
          source={user?.image ? { uri: user.image } : require('../Assets/Images/images.jpg')} 
          style={styles.profileImage} 
        />
        <Text style={styles.userName}>{user?.name || 'Olivia'}</Text>
        <Text style={styles.userEmail}>{user?.email || 'olivia@.com'}</Text>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionItem}>
          <AntDesign name="profile" size={24} color="black" />
          <Text style={styles.optionText}>My Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <MaterialIcons name="payment" size={24} color="black" />
          <Text style={styles.optionText}>Payment Methods</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <AntDesign name="hearto" size={24} color="black" />
          <Text style={styles.optionText}>Wishlist</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <MaterialIcons name="settings" size={24} color="black" />
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.optionItem, styles.logoutButton]}>
          <AntDesign name="logout" size={24} color="red" />
          <Text style={[styles.optionText, { color: 'red' }]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f9f9f9',
    paddingVertical: 20,
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: responsiveWidth(90),
    elevation: 3,
  },
  profileImage: {
    width: responsiveWidth(25),
    height: responsiveWidth(25),
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: responsiveFontSize(2),
    color: '#666',
    marginBottom: 10,
  },
  editProfileButton: {
    backgroundColor: '#000',
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editProfileText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.8),
  },
  optionsContainer: {
    width: responsiveWidth(90),
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    padding: 15,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: responsiveFontSize(2),
    marginLeft: 15,
    color: '#333',
    fontWeight: '500',
  },
  logoutButton: {
    borderBottomWidth: 0,
    marginTop: 10,
  },
});

export default ProfileScreen;
