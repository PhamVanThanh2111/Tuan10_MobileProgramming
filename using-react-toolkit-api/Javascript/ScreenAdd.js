import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const BASE_URL = 'https://670b37c8ac6860a6c2cb6d2b.mockapi.io';

const AddBikeScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');

  const addBike = async () => {
    try {
      await axios.post(`${BASE_URL}/bike`, { name, price: parseFloat(price), img });
      // Hiển thị thông báo thành công
      Alert.alert('Thành công', 'Thêm xe đạp thành công!');
      // Quay lại màn hình trước
      navigation.goBack();
    } catch (error) {
      console.error('Failed to add bike:', error);
      // Hiển thị thông báo lỗi
      Alert.alert('Lỗi', 'Không thể thêm xe đạp.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Tên Xe Đạp:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Nhập tên xe đạp"
      />
      <Text>Giá Xe Đạp:</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Nhập giá xe đạp"
        keyboardType="numeric"
      />
      <Text>Đường dẫn của ảnh:</Text>
      <TextInput
        style={styles.input}
        value={img}
        onChangeText={setImg}
        placeholder="Nhập đường dẫn"
      />
      <Button title="Thêm" onPress={addBike} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});

export default AddBikeScreen;
