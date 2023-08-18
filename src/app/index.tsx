import React from 'react'
import { Redirect } from 'expo-router'
import '../../config/firebase'
import { useAuthentication } from '../../config/utils/useAuthentication'
import { getAuth } from 'firebase/auth'

const index = () => {
  const user = getAuth().currentUser
  console.log('user')
  console.log(user)
  return user ? <Redirect href="/mainScreens" /> : <Redirect href="/login" />
}

export default index
