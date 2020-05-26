import React from 'react';

import { View, Text, Animated } from 'react-native';

import { Card, Button, Image } from 'react-native-elements'

export default function Deck({data}) {
  
  const renderCards = () => {
    return data.map((item) => (
      <Card
        key={item.id}
        title={item.text}
      >
        <Image source={{uri: item.uri}} resizeMode="cover" style={{width: 200, height: 200}} />
        <Text style={{ marginBottom: 10}}>OVO OVO OVO</Text>
        <Button icon={{name: 'code'}} backgroundColor="#03a9f4" title="View Now!" />

      </Card>
    ))
  };

  return(
    <View>{renderCards()}</View>
  )
}