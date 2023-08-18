// PathologyBanner.jsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PathologyBanner = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pathology Name: {data.pathologyName}</Text>
      <Text style={styles.text}>Pathology Rating: {data.Rating}</Text>
      {/* Other components and content */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
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

export default PathologyBanner
