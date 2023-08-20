import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, Redirect } from 'expo-router'
import '../../../config/firebase'
import { useAuthentication } from '../../../config/utils/useAuthentication'
import { getAuth } from 'firebase/auth'

const cart = () => {
  const user = getAuth().currentUser
  console.log('user')
  console.log(user)

  return (
    <SafeAreaView>
      <View>
        {!user && (
          <Link href={`../login`}>
            <Pressable>
              <View>
                <Text>login</Text>
              </View>
            </Pressable>
          </Link>
        )}
        <Text>cart</Text>
      </View>
    </SafeAreaView>
  )
}

export default cart
