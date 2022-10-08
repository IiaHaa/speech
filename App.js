import React, { useState } from 'react';
import { StyleSheet,View, TextInput, Button } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {

  const [text, setText] = useState("");

  const speak = () => {
    Speech.speak(text);
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} />
        <View style={{ flexDirection: 'row', marginTop: 10}}>
          <View style={{ marginRight: 10}}>
            <Button onPress={speak} title="Press to hear text" />
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20%'
  },
  input: {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 5
  }
});