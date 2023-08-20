import { Text, View, Button, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, router } from 'expo-router'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { SafeAreaView } from 'react-native-safe-area-context'
import Lab from '@comp/Lab'
import Banner from '@comp/Banner'
import Blogs from '@comp/Blogs'

const loginPage = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getLabs() {
      const db = getFirestore()
      const querySnapshot = await getDocs(collection(db, 'pathologyLabs'))
      const dataArray = []
      querySnapshot.forEach(doc => {
        const labObject = {
          id: doc.id,
          data: doc.data()
        }
        dataArray.push(labObject)
        // console.log(doc.id, ' => ', doc.data())
      })
      console.log(dataArray)
      setData(dataArray)
    }

    getLabs()
  }, [])

  useEffect(() => {
    // console.log('data :')
    // console.log(data)
    setLoading(false)
  }, [data])

  return (
    <SafeAreaView>
      <View>
        <Banner />
        {!loading &&
          data.map(
            (element, index) => (
              console.log(element.data),
              (
                <Link href={`/mainScreens/labListing/${element.id}`} key={index} asChild>
                  <Pressable key={index}>
                    <View>
                      <Lab data={element.data} />
                    </View>
                  </Pressable>
                </Link>
              )
            )
          )}
        <Blogs />
      </View>
    </SafeAreaView>
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
    color: 'black' // Text color
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
