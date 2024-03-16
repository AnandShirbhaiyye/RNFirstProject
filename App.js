import React from 'react';
import {Button, Text, View} from 'react-native';

function App() {
  return (
    <View>
      <Text style={{fontSize: 30}}>Hello Text Component</Text>
      <UserData/>
      <UserData/>
      <UserData/>
    </View>
  );
}


function UserData(){
  return(
    <View>
       <Text style={{fontSize: 30}}>Name: Anand</Text>
       <Text style={{fontSize: 30}}>Age: 23</Text>
       <Text style={{fontSize: 30}}>Email: anand@gmail.com</Text>
    </View>
  )
}
export default App;
