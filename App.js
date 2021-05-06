import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import User from './Screens/User';




export default function App() {
  return (
    <View style={styles.container}>
     <User />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
