import { View, Pressable, StyleSheet, Image } from 'react-native';
import React from 'react';
import { BlurView } from 'expo-blur';

type FullScreenImageProps = {
  url?: string | null;
  onClose: () => void;
};

const FullScreenImage = ({ url, onClose }: FullScreenImageProps) => {
  if (!url) {
    return null;
  }

  return (
    <Pressable onPress={onClose} style={StyleSheet.absoluteFill}>
      <BlurView
        intensity={50}
        style={{
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <Image
          source={{ uri: url }}
          style={{ width: '100%', aspectRatio: 16 / 9 }}
        />
      </BlurView>
    </Pressable>
  );
};

export default FullScreenImage;
