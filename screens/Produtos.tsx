import React from 'react';

import { View, Text, Image } from 'react-native';


export default function Produto({route, navigation}){
    const {produtos} = route.params
    return (
        <>
        <View>
            <Image
                source={{ uri: produtos.thumbnail }}
                style={{ width: 100, height: 100 }}
              />
            <Text>{produtos.title}</Text>
            <Text>{produtos.price}</Text>
            <Text>{produtos.description}</Text>
        </View>
        
        </>
    )
}