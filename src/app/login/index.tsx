import { Text, View, Button, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

// import backgroundImage from './your-image-path.jpg'; // Replace with your image path

const loginPage = () => {
  return (
    // <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to our App</Text>
      <View style={styles.buttonContainer}>
        <Link href="/login/signin" asChild>
          <Pressable>
            <Text>SignIn</Text>
          </Pressable>
        </Link>
        <Link href={'/login/signup'} asChild>
          <Pressable>
            <Text>SignUp</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent background
    padding: 20,
    borderRadius: 10
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white' // Text color
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
  }
})

export default loginPage
