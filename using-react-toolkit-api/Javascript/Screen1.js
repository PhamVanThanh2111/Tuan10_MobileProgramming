import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import { useFonts, VT323_400Regular } from '@expo-google-fonts/vt323';
import {
  useFonts as useUbuntuFonts,
  Ubuntu_400Regular,
} from '@expo-google-fonts/ubuntu';

const Screen1 = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    VT323: VT323_400Regular,
  });

  let [ubuntuFontsLoaded] = useUbuntuFonts({
    Ubuntu: Ubuntu_400Regular,
  });

  // Nếu font chưa tải xong, hiển thị AppLoading
  if (!fontsLoaded || !ubuntuFontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.c1}>
        <Text
          style={{
            fontFamily: 'VT323',
            fontWeight: 400,
            lineHeight: 26,
            fontSize: 26,
            textAlign: 'center',
          }}>
          {'A premium online store for\nsporter and their stylish choice'}
        </Text>
      </View>
      <View style={styles.c2}>
        <Image
          source={require('../Images/bifour_-removebg-preview.png')}
          style={{ width: 292, height: 270 }}
        />
      </View>
      <View style={styles.c3}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: 700,
            lineHeight: 30,
            fontFamily: 'Ubuntu',
          }}>
          {'POWER BIKE SHOP'}
        </Text>
      </View>
      <View style={styles.c4}>
        <TouchableOpacity
          style={{
            width: '90%',
            height: 60,
            backgroundColor: '#E94141',
            borderRadius: 30,
          }}
          onPress={() => {navigation.navigate('Screen2')}}>
          <Text
            style={{
              fontSize: 27,
              lineHeight: 60,
              fontWeight: 400,
              fontFamily: 'VT323',
              textAlign: 'center',
              color: 'white',
            }}>
            {'Get Started'}
          </Text>
        </TouchableOpacity>
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
    alignItems: 'center',
  },
  c2: {
    flex: 4,
    backgroundColor: '#E941411A',
    margin: 12,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  c3: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  c4: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default Screen1;
