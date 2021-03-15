import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from './Components/Themed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titlehead}>EATIE WIN A MOVIE TICKET OFFER</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>ABOUT THE OFFER</Text>
      <View style={styles.container3}>
      <Text style={styles.title1}>1.Get a chance of winning movie ticket free for a theater show in Palakollu for ordering food on EATIE.</Text>
      <Text style={styles.title1}>2.Offer Duration: 13-March-2021 to 19-March-2021.</Text>
      </View>
      <Text style={styles.title}>TERMS AND CONDITIONS</Text>
      <View style={styles.container3}>
      <Text style={styles.title1}>1.The orders that are placed in the specified date frame are only eligible for the offer.</Text>
      <Text style={styles.title1}>2.Movie will be decided by EATIE.</Text>
      <Text style={styles.title1}>3.Movie Show Date and timings will be decided by EATIE.</Text>
      <Text style={styles.title1}>4.Movie tickets are in limited numbers.</Text>
      <Text style={styles.title1}>5.In case the movie release is postponed, the offer will be valid upto 3 days.</Text>
      <Text style={styles.title1}>6.Offer will be rejected if the movie release is postponed for more than 3 days.</Text>
      <Text style={styles.title1}>7.Users who order more on the specified time frame will have a higher chance of winning ticket.</Text>
      <Text style={styles.title1}>8.Users will be notified if they won the ticket at the end of time frame.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:'1%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }, 
  container3: {
    margin:'1%',
    justifyContent: 'flex-start',
  },
  titlehead: {
    fontSize: '100%',
    fontWeight: 'bold',
    margin:'3%',
  },
  title: {
    fontSize: '110%',
    fontWeight: 'bold',
    margin:'1%',
  },
  title1: {
    fontSize: '100%',
  },
  separator: {
    marginVertical: '3%',
    height: 1,
    width: '100%'
  },
});
