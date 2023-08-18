import { Stack, Tabs } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        headerShown: false
      }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="cart" />
      <Tabs.Screen
        name="labListing"
        options={{
          // This tab will no longer show up in the tab bar.
          href: null
        }}
      />
    </Tabs>
  )
}
