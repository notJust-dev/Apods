import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const labListing = () => {
  const { labId } = useLocalSearchParams()
  return (
    <SafeAreaView>
      <View>
        <Text>labListing for {labId}</Text>
      </View>
    </SafeAreaView>
  )
}

export default labListing
