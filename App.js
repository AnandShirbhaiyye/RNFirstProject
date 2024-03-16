import React from 'react';
import {Button, Text, View} from 'react-native';

function App() {
  const fruit = (value) => {
    console.warn(value);
  };
  return (
    <View>
      <Text style={{fontSize: 30}}>Hello Text Component</Text>
      <Button
        title="On Press"
        onPress={() => fruit('Hello Anand')}
        color={'green'}></Button>
      <Button title="On Press2" onPress={fruit} color={'red'}></Button>
    </View>
  );
}

export default App;
