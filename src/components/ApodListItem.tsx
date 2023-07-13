import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";
import { Apod } from "../types";
import { Link } from "expo-router";

type ApodListItemProps = {
  apod: Apod;
  onImagePress?: () => void;
};

const ApodListItem = ({ apod, onImagePress = () => {} }: ApodListItemProps) => {
  const { title, copyright, url, date } = apod;

  return (
    <View style={styles.item}>
      <Pressable onPress={onImagePress}>
        <Image source={{ uri: url }} style={styles.image} />
      </Pressable>
      <Text style={styles.date}>{date}</Text>

      <Link href={`/apod/${date}`} asChild>
        <Pressable style={styles.content}>
          <Text style={styles.title}>{title}</Text>

          {copyright && (
            <Text style={styles.copyright}>
              © {copyright?.trim()?.replaceAll("\n", "")}
            </Text>
          )}
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    elevation: 4,
    marginBottom: 16,
    overflow: "hidden",
    maxWidth: 500,
    width: "100%",
    alignSelf: "center",
  },
  date: {
    position: "absolute",
    top: 10,
    right: 10,
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "black",
    padding: 3,
    borderRadius: 3,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  copyright: {
    color: "gray",
  },
});

export default ApodListItem;
