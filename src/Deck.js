import React, { useEffect } from 'react';

import { View, Text, Animated, PanResponder, Dimensions } from 'react-native';

import { Card, Button, Image } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = SCREEN_WIDTH / 3;

export default function Deck({data}) {

  const position = new Animated.ValueXY();


  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => {
      return true;
    },
    onPanResponderMove: (event, gesture) => {
      position.setValue({x: gesture.dx, y: gesture.dy});
    },
    onPanResponderRelease: (event, gesture) => {
      if (gesture.dx > SWIPE_THRESHOLD) {
        forceSwipeRight();
      }
      else if (gesture.dx < -SWIPE_THRESHOLD) {
        forceSwipeLeft();
      }
      else
      resetPosition();
    },
  });

  const forceSwipeRight = () => {
    Animated.timing(position, {
      toValue: { x: SCREEN_WIDTH * 2, y: 0},
      duration: 0.5
    }).start();
  };

  const getCardStyle =() => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 2, 0, SCREEN_WIDTH * 2],
      outputRange: ['-120deg', '0deg', '120deg']
    });

    return {
      ...position.getLayout(),
      transform: [{rotate }]
    }
  };

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: {x: 0, y: 0}
    }).start();
  };



  const renderCards = () => {
    return data.map((item, index) => {
      
      if (index === 0) {
        return(
          <Animated.View
            key={item.id}
            {...panResponder.panHandlers}
            style={getCardStyle()}
          >
            <Card
              key={item.id}
              title={item.text}
            >
              <Image source={{uri: item.uri}} resizeMode="cover" style={{width: 200, height: 200}} />
              <Text style={{ marginBottom: 10}}>OVO OVO OVO</Text>
              <Button icon={{name: 'code'}} backgroundColor="#03a9f4" title="View Now!" />

            </Card>
          </Animated.View>
        );
      }
      return(
      <Card
        key={item.id}
        title={item.text}
      >
        <Image source={{uri: item.uri}} resizeMode="cover" style={{width: 250, height: 200}} />
        <Text style={{ marginBottom: 10}}>OVO OVO OVO</Text>
        <Button icon={{name: 'code'}} backgroundColor="#03a9f4" title="View Now!" />

      </Card>
    )})
  };


  useEffect(() => {
    Animated.timing(position, {
      useNativeDriver: true
    })
  },[]);
  return(
    <View>
      {renderCards()}
    </View>
  )
}