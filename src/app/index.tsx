import { StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import apodsJson from '../data/apods.json';
import ApodListItem from '@comp/ApodListItem';
import { useEffect, useState } from 'react';
import FullScreenImage from '../components/FullScreenImage';
import { Apod } from '../types';
import { fetchApods } from '../api/apods';

export default function Page() {
  const [apods, setApods] = useState<Apod[]>(null);
  const [activePicture, setActivePicture] = useState<string>(null);

  useEffect(() => {
    fetchApods().then(setApods);
  }, []);

  if (!apods) {
    return <ActivityIndicator />;
  }

  return (
    <>
      <FlatList
        data={apods}
        renderItem={({ item }) => (
          <ApodListItem
            apod={item}
            onImagePress={() => setActivePicture(item.url)}
          />
        )}
      />
      <FullScreenImage
        url={activePicture}
        onClose={() => setActivePicture(null)}
      />
    </>
  );
}

const styles = StyleSheet.create({});
