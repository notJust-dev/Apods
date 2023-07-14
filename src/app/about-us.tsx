import { View, Text } from 'react-native';
import React from 'react';
import Head from 'expo-router/head';

const AboutUs = () => {
  return (
    <View>
      <Head>
        <title>About us</title>
        <meta name="description" content="This is about us" />
      </Head>
      <Text>About Us</Text>
    </View>
  );
};

export default AboutUs;
