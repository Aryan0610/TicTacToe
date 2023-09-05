import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Grid from './components/Grid';
import Bottompanel from './components/Bottompanel';

export default function App() {
  const [XTurn, setXTurn] = useState(true)
  const [GridComponent, setGridComponent] = useState(Array(9).fill(''))
  const [GameEnd, setGameEnd] = useState(false)
  const [Score, setScore] = useState({XWins: 0, OWins: 0, Draws: 0})

  function ResetFunction(Component) {
    if (Component === 'Grid') {
      setGridComponent(Array(9).fill(''))
    }
  }

  return (
    <SafeAreaView style={AppStyles.container}>
      <Header/>
      <Grid XTurn={XTurn} setXTurn={setXTurn} GridComponent={GridComponent} setGridComponent={setGridComponent} Score={Score} setScore={setScore} ResetFunction={ResetFunction} GameEnd={GameEnd} setGameEnd={setGameEnd}/>
      <Bottompanel  Score={Score} ResetFunction={ResetFunction} GameEnd={GameEnd} setGameEnd={setGameEnd} XTurn={XTurn}/>
    </SafeAreaView>      
  );
}

function Header() {
  return (
    <View style={HeaderStyles.container}>
      <Text style={HeaderStyles.text}>Tic Tac Toe</Text>
    </View>
  )
}

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E3FDFD'
  }
})

const HeaderStyles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: '#71C9CE',
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    paddingTop: 40,
    alignSelf: 'center',
    color: '#E3FDFD'
  }
});
