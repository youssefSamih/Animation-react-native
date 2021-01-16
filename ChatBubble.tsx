import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Animated, {Extrapolate, interpolate} from 'react-native-reanimated';

interface ChatBubbleProps {
  progress: Animated.Value<number>;
}
const {width: wWidth} = Dimensions.get('window');
const width = wWidth * 0.8;
const size = 32;
const ChatBubble = ({progress}: ChatBubbleProps) => {
  const bubbles = [0, 1, 2];
  const delta = 1 / bubbles.length;
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        {bubbles.map((i) => {
          const start = i * delta;
          const end = start + delta;
          const opacity = interpolate(progress, {
            inputRange: [start, end],
            outputRange: [0.5, 1],
            extrapolate: Extrapolate.CLAMP,
          });
          const scale = interpolate(progress, {
            inputRange: [start, end],
            outputRange: [1, 1.5],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View
              key={i}
              style={[styles.bubble, {opacity, transform: [{scale}]}]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: width,
    width,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    borderTopLeftRadius: width / 2,
    borderTopRightRadius: width / 2,
    borderBottomLeftRadius: width / 2,
  },
  bubble: {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: '#3884ff',
  },
});

export default ChatBubble;
