import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [value, onChangeText] = React.useState('');

  function getSentiment(value) {
    var Sentiment = require('sentiment');
    var sentiment = new Sentiment();
    var result = sentiment.analyze(value);
    return getEmoji(result.score);
  }

  function getEmoji(score) {

    if (score < 0.0) {
      return '🙁';
    } else if (score <= 0.0) {
      return '😐';
    } else {
      return '😃';
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.info}>Devido a demora na aprovação do app no Twitter, tive de optar por uma simples verificação de frase, então para verificar o sentimento em uma frase, por favor preencha o campo abaixo com sua frase.</Text>
      <Text style={styles.infoSubtitle}> * A frase deve estar em inglês.</Text>
      <Text style={styles.sentiment}>{value.length > 0 ? getSentiment(value) : ''}</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D58CE',
    alignItems: 'center',
    paddingTop: 100,
  },
  info: {
    paddingHorizontal: 15,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  infoSubtitle: {
    paddingVertical: 15,
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  sentiment: {
    fontSize: 60
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 0.3,
    borderRadius: 30,
    width: 300,
    paddingHorizontal: 15,
    color: 'white',
  }
});
