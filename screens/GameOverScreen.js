import React from 'react'
import { View, StyleSheet, Button, Image } from 'react-native'

import BodyText from '../components/BodyText'
import ApplicationStyles from '../constants/ApplicationStyles'
import TitleText from '../components/TitleText'

const GameOverScreen = props => {
  return (
    <View style={ApplicationStyles.screen}>
      <TitleText>The game is over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/success.png')}
        />
      </View>
      <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button title='NEW GAME' onPress={props.onRestart} />
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30
  },
  image: {
    width: '100%',
    height: '100%',
  }
})

export default GameOverScreen