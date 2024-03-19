import React, {useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

function App() {
  const [name, setName] = useState('Anand');
  let data = 'Raju';

  function userName() {
    setName('Ujwal');
    data = 'kiran';
  }

  return (
    <View>
      <Text style={{fontSize: 15, color: 'pink'}}>Style in Recat native</Text>
      <Text style={styles.textBox}>Hello {name}</Text>
      <Text style={styles.textBox}>Hello {data}</Text>
      <Text style={styles.textBox}>hey Im Anand...Full Stack developer</Text>
      <Button title="On Press" onPress={userName} color={'red'}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  textBox: {
    color: 'white',
    fontSize: 20,
    backgroundColor: 'gray',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    height: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderColor: 'red',
    borderWidth: 2,
  },
});

export default App;
