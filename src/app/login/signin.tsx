import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, TextInput, Button } from 'react-native'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { router } from 'expo-router'

const signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const auth = getAuth()

  async function handleSignIn() {
    if (email === '' || password === '') {
      setError('Email and password are mandatory.')
      console.log('Email and password are mandatory.')
      return
    }
    try {
      await signInWithEmailAndPassword(auth, email, password).then(userCredential => {
        // Signed in
        const user = userCredential.user
        console.log(user)
        console.log('Signed in')
        router.push('/home')
      })
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!')
        setError('That email address is already in use!')
      }
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorMessage)
      setError(errorMessage)
      // alert user to try again
    }
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} value={password} onChangeText={setPassword} />
      <Button title="Sign Up" onPress={handleSignIn} />
    </View>
  )
}

const styles = StyleSheet.create({
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
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10
  }
})

export default signin
