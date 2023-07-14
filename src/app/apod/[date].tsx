import ApodListItem from '@comp/ApodListItem';
import { fetchApod } from 'api/apods';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { Apod } from 'types';

const ApodDetails = () => {
  const { date } = useLocalSearchParams(); // prev: useSearchParams()

  const [apod, setApod] = useState<Apod>(null);

  useEffect(() => {
    fetchApod(date).then(setApod);
  }, [date]);

  if (!apod) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView>
      <ApodListItem apod={apod} />
      <Text
        style={{
          padding: 15,
          backgroundColor: 'white',
          lineHeight: 22,
          fontSize: 16,
          maxWidth: 500,
          width: '100%',
          alignSelf: 'center',
        }}
      >
        {apod.explanation}
      </Text>
    </ScrollView>
  );
};

export default ApodDetails;

export async function generateStaticParams(): Promise<
  Record<string, string>[]
> {
  const dates = ['2023-07-12', '2023-07-13', '2023-07-14'];

  return dates.map((date) => ({ date: date }));
}
