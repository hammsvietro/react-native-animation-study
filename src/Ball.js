import React from 'react';
import { View } from 'react-native';

export default function Ball() {
  return (
    <View style={styles.ball} />
  );
}

const styles = {
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black'
  }
};
