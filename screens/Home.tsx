import React,{ useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import axiosConfig from '../config/axios';
import { useNavigation } from '@react-navigation/native';
export default function Home ({ navigation}) {
  const [produtos, setProdutos] = useState([])


  useEffect(() => {
    axiosConfig.get('/products').then((response) => {
      setProdutos(response.data.products)
    })
  }, [])

  const navigateToDetail = (produtos) => {
    navigation.navigate('Produtos', { produtos});
  };

  return (
    <View>
      <Text>Lista de Produtos:</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToDetail(item)}>
            <View>
            <Image
                source={{ uri: item.thumbnail }}
                style={{ width: 100, height: 100 }}
              />
              <Text>Nome: {item.title}</Text>
              <Text>Preço: ${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );

}