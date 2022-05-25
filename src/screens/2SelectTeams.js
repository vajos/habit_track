import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Button, TouchableHighlight, Dimensions,
} from 'react-native';
import Orientation from "react-native-orientation-locker";

const Teams = function({navigation,route}) {

  const {drawing_boolean} = route.params;
  const {speaking_boolean} = route.params;
  const {pantomime_boolean} = route.params;


  function redirect() {
    navigation.navigate('ActualGame', {drawing_boolean, speaking_boolean, pantomime_boolean});
  }

  function OnPressPlus() {

  }

  function OnPressMinus() {

  }

  return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <TouchableHighlight activeOpacity={0.5}
                              underlayColor="none" style={styles.touch} onPress={null}>
            <Image
                style={styles.image1}
                source={require('../../assets/pictures/bleistift.png')}
            />
          </TouchableHighlight>

          <TouchableHighlight activeOpacity={0.5}
                              underlayColor="none" onPress={null} style={styles.touch}>
            <Image
                style={styles.image1}
                source={require('../../assets/pictures/pantomime.png')}
            />
          </TouchableHighlight>
        </View>

        <View style={styles.rowContainer}>
          <TouchableHighlight activeOpacity={0.5}
                              underlayColor="none" style={styles.touch} onPress={null}>
            <Image
                style={styles.image1}
                source={require('../../assets/pictures/bleistift.png')}
            />
          </TouchableHighlight>

          <TouchableHighlight activeOpacity={0.5}
                              underlayColor="none" onPress={null} style={styles.touch}>
            <Image
                style={styles.image1}
                source={require('../../assets/pictures/pantomime.png')}
            />
          </TouchableHighlight>
        </View>

        <View style={styles.rowContainer}>

          <TouchableOpacity activeOpacity={0.5}
                            underlayColor="none" style={styles.minus_button}
                            onPress={OnPressMinus}>
            <Text style={styles.text}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.5}
                            underlayColor="none" style={styles.button1 }
                            onPress={redirect}>
            <Text style={styles.text}>Weiter</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.5}
                            underlayColor="none" style={styles.plus_button}
                            onPress={OnPressPlus}>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>


        </View>


      </View>
  );
};

//anzahl der Teams
var anzahl;

const screen_dimensions = Dimensions.get('window');

const styles = StyleSheet.create({
  button1: {
    backgroundColor: 'rgb(255, 66, 132)',
    width: screen_dimensions.width * 0.50,
    height: screen_dimensions.height * 0.10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderBottomColor: 'black',
    //TODO Keine ahnung wie andere das hier machen hab flex-End gemacht bei Container damit es ganz unten anfängt
    // dann -20 weil ich bei Container paddingbottom 20 nehme und nochmal
    // paar minus wegen dem header oben und minus height von diesem Button so das ich die mitte erwische
    marginTop: screen_dimensions.height / 2 - (screen_dimensions.height * 0.10) - 70,

  },
  text: {
    color: 'rgb(255, 255, 255)',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Rotunda Medium',
  },
  image1: {
    width: screen_dimensions.width / 3 - 3 * 5,
    height: screen_dimensions.height / 6,
    borderRadius: Math.round(screen_dimensions.width + screen_dimensions.height) / 2,

  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
    backgroundColor: 'rgb(240, 240, 255)',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  touch: {

    paddingHorizontal: 5,
  },
  minus_button: {
    backgroundColor: 'rgb(255, 66, 132)',
    width: screen_dimensions.width * 0.10,
    height: screen_dimensions.height * 0.10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Math.round(screen_dimensions.width + screen_dimensions.height) / 2,
    marginTop: screen_dimensions.height / 2 - (screen_dimensions.height * 0.10) - 70,

  },
  plus_button:{
    backgroundColor: 'rgb(255, 66, 132)',
    width: screen_dimensions.width * 0.10,
    height: screen_dimensions.height * 0.10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Math.round(screen_dimensions.width + screen_dimensions.height) / 2,
    marginTop: screen_dimensions.height / 2 - (screen_dimensions.height * 0.10) - 70,

  }

});

export default Teams;
