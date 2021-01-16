import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

const {width: wWidth} = Dimensions.get('window');
const width = wWidth * 0.8;
const size = 32;
const ChatBubble = () => {
  const bubbles = [0, 1, 2];
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        {bubbles.map((i) => {
          return <View key={i} style={styles.bubble} />;
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
