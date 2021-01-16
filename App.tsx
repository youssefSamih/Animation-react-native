import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './Components/Button';
import ChatBubble from './ChatBubble';
import {
  and,
  block,
  Clock,
  clockRunning,
  cond,
  Easing,
  eq,
  not,
  set,
  startClock,
  stopClock,
  timing,
  useCode,
  Value,
} from 'react-native-reanimated';

const runTiming = (clock: Clock) => {
  const state = {
    time: new Value(0),
    frameTime: new Value(0),
    finished: new Value(0),
    position: new Value(0),
  };
  const config = {
    toValue: new Value(1),
    duration: 3000,
    easing: Easing.inOut(Easing.ease),
  };
  return block([
    cond(
      not(clockRunning(clock)),
      set(state.time, 0),
      timing(clock, state, config),
    ),
    cond(eq(state.finished, 1), [
      set(state.finished, 0),
      set(state.frameTime, 0),
      set(state.time, 0),
      set(config.toValue, not(state.position)),
    ]),
    state.position,
  ]);
};
const App = () => {
  const [play, setplay] = useState(false);
  const progress = new Value(0);
  const clock = new Clock();
  const isPlaying = new Value(0);
  useCode(() => set(isPlaying, play ? 1 : 0), [play]);
  useCode(
    () => [
      cond(and(isPlaying, not(clockRunning(clock))), startClock(clock)),
      cond(and(not(isPlaying), clockRunning(clock)), stopClock(clock)),
      set(progress, runTiming(clock)),
    ],
    [],
  );
  return (
    <View style={styles.container}>
      <ChatBubble {...{progress}} />
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
