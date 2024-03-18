import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

function App() {
  const [name, setName] = useState('Anand');
  let data = 'Raju';

  function userName() {
    setName('Ujwal');
    data = 'kiran';
  }

  return (
    <View>
      <Text style={{fontSize: 30, color: 'red'}}>Hello {name}</Text>
      <Text style={{fontSize: 30, color: 'red'}}>Hello {data}</Text>
      <Button title="On Press" onPress={userName} color={'red'}></Button>
    </View>
  );
}

export default App;
