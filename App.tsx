import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './Components/Button';
import ChatBubble from './ChatBubble';

const App = () => {
  const [play, setplay] = useState(false);
  return (
    <View style={styles.container}>
      <ChatBubble />
      <Button
        label={play ? 'Pause' : 'Play'}
        primary
        onPress={() => setplay((prev) => !prev)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default App;
