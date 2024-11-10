import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const Bike = ({ item }) => {

const getImg = (src) => {
  // Kiểm tra xem src có phải là một URL hay không
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return { uri: src }; 
  } else {
    switch (src) {
      case '../Images/bitwo-removebg-preview.png':
        return require('../Images/bitwo-removebg-preview.png');
      case '../Images/bione-removebg-preview.png':
        return require('../Images/bione-removebg-preview.png');
      case '../Images/bithree_removebg-preview.png':
        return require('../Images/bithree_removebg-preview.png');
      case '../Images/bifour_-removebg-preview.png':
        return require('../Images/bifour_-removebg-preview.png');
    }
  }
};


  return (
    <TouchableOpacity
      style={{
        width: '44%',
        height: 230,
        backgroundColor: '#F7BA8326',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 12,
      }}>
      <View style={{ position: 'relative' }}>
        <View>
          <Text style={{ color: '#54545426', fontSize: 25, top: 5, left: -10 }}>
            ♥
          </Text>
        </View>
        <Image source={getImg(item.img)} style={{ width: 135, height: 127 }} />
      </View>
      <View>
        <Text
          style={{
            fontWeight: 400,
            fontSize: 20,
            fontFamily: 'Voltaire',
            color: '#00000099',
          }}>
          {item.name}
        </Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text
          style={{
            color: '#F7BA83',
            fontSize: 20,
            fontWeight: 400,
            fontFamily: 'Voltaire',
          }}>
          {'$'}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: 400, fontFamily: 'Voltaire' }}>
          {item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const renderItem = ({ item }) => {
  return <Bike item={item} />;
};

const BASE_URL = 'https://670b37c8ac6860a6c2cb6d2b.mockapi.io';

const Screen2 = ({ navigation }) => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetchBikes();
  }, []);

  const fetchBikes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/bike`);
      setBikes(response.data);
    } catch (error) {
      console.error('Failed to fetch bikes:', error);
    }
  };

  tmp_navigation = navigation;

  return (
    <View style={styles.container}>
      <View style={styles.c1}>
        <Text
          style={{
            fontFamily: 'Ubuntu',
            fontWeight: 700,
            fontSize: 25,
            lineHeight: 30,
            color: '#E94141',
          }}>
          {'The world’s Best Bike'}
        </Text>
      </View>
      <View style={styles.c2}>
        <TouchableOpacity style={styles.categorySelected}>
          <Text style={styles.categoryTextSelected}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryText}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryText}>Mountain</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.c3}>
        <SafeAreaView>
                  <FlatList
          data={bikes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  c1: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 12,
  },
  c2: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    width: '100%',
  },
  category: {
    borderColor: '#E9414187',
    borderRadius: 5,
    borderWidth: 2,
    width: 100,
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categorySelected: {
    borderColor: '#E94141',
    borderRadius: 5,
    borderWidth: 2,
    width: 100,
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    color: '#BEB6B6',
    fontSize: 20,
    fontWeight: 400,
    fontFamily: 'Voltaire',
  },
  categoryTextSelected: {
    color: '#E9414187',
    fontSize: 20,
    fontWeight: 400,
    fontFamily: 'Voltaire',
  },
  c3: {
    flex: 8.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default Screen2;
