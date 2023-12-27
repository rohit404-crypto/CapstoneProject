import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Linking, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import open, { createOpenLink } from 'react-native-open-maps';

import openMap from 'react-native-open-maps'

const VetCard = ({ image, name, rating, phone, location, Latitude, Longitude, address }) => {
    console.log('Longitude:', Longitude);

    const place = {
      latitude: Latitude,
      longitude: Longitude,
    };
  
    const handleLocation = createOpenLink({
      query: `${name}, ${location}`,
      ...place,
      zoom: 16,
    });

  const handleCallPress = () => {
    const phoneUrl = `tel:${phone}`;

    Linking.canOpenURL(phoneUrl)
      .then((supported) => {
        if (supported) {
          Linking.openURL(phoneUrl);
        } else {
          console.error(`Phone number ${phone} is not supported`);
        }
      })
      .catch((error) => {
        console.error('An error occurred while opening the phone app:', error);
      });
  };

  return (
    <View style={styles.productCard}>
      <View style={styles.imagecard}>
        <Image source={image} style={styles.productImage} />
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{name}</Text>
        <View style={styles.productcontact}>
          <TouchableOpacity style={styles.location} onPress={handleLocation}>
            <Text>
             <Icon name="location" type="entypo" color="green" size={13} /> {location}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.phrat} onPress={handleCallPress}>
            <Text style={styles.button}>
              <Text style={{ textAlign: 'center' }}>
                <Icon name="phone" type="Feather" color="white" size={14} style={{ marginTop: 0}} />
              </Text>{' '}
              <Text style={{ color: 'white' }}>{phone}</Text>
            </Text>
          </TouchableOpacity>
          <Text style={styles.rating}>
            Ratings : <Icon name="star" type="entypo" color="green" size={13} /> {rating}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    width: '90%',
    marginLeft: 20,
    height: 150,
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
    borderRadius: 10,
  },
  productName: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  productDetails: {
    width: '60%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imagecard: {
    width: '40%',
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'green',
    padding: 3,
    borderRadius: 10,
    height: 30,
    width: '70%',
    textAlign: 'center',
  },
  productcontact: {
    width: '90%',
    rowGap: 10,
    marginBottom: 30,
  },
});

export default VetCard;
