import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


 type Props = {
  title: string,
  onPress:()=> void,
  backgroundColor:string,
  textColor:string

 }

const Button = ({ title, onPress, backgroundColor = '#007BFF', textColor = '#FFFFFF' }:Props) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
