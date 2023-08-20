// PathologyBanner.jsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Banner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Banner</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4511e',
    padding: 10,
    margin: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  }
})

export default Banner
