import { StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import apodsJson from '../src/data/apods.json';
import ApodListItem from '../src/components/ApodListItem';
import { useEffect, useState } from 'react';
import FullScreenImage from '../src/components/FullScreenImage';
import { Apod } from '../src/types';
import { fetchApods } from '../src/api/apods';

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
