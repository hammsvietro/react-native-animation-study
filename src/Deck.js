import React from 'react';

import { View, Text, Animated } from 'react-native';

export default function Deck({data}) {
  
  const renderCards = () => {
    return data.map((item) => <Text key={item.id}>{item.text}</Text>)
  };

  return(
    <View>{renderCards()}</View>
  )
}