import React from 'react';
import {Button, Text, View} from 'react-native';

let age=23;
var email= 'anand@gmail.com';
const name = 'anand';

function fruit(){
  return('apple')
}

function App() {
  return (
    <View>
      <Text style={{fontSize: 30}}>Hello Text Component</Text>
      <Text style={{fontSize: 25}}>{name}</Text>
      <Text style={{fontSize: 20}}>{age}</Text>
      <Text style={{fontSize: 15}}>{email}</Text>
      <Button title="Press Here"></Button>
      <Button title="Press Here Too"></Button>
      <Text style={{fontSize: 15}}>{fruit()}</Text>
    </View>
  );
}

export default App;
