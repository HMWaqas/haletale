import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import GradientBackground from '../components/GradientBackground';
import * as navigators from '../constants/navigators';

const IMG_URI = '../../assets/logo/haletale.png';

const StartupScreen = props => {
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0));
  const [nextScreen, setNextScreen] = useState(navigators.LOGIN_SCREEN);
  const {navigation} = props;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    }).start(() => navigation.reset({index: 0, routes: [{name: nextScreen}]}));
  });

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Animated.Image
          source={require(IMG_URI)}
          style={[styles.logo(fadeAnim)]}
        />
      </View>
    </GradientBackground>
  );
};
export default StartupScreen;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  logo: value => ({
    alignSelf: 'center',
    opacity: value,
  }),
});
