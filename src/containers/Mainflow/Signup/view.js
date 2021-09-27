import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

function Signup() {
  return (
    <View style={styles.signup_container}>
      <Image
        source={require('../../../assets/images/signup_title2.png')}
        style={{
          marginTop: height * 0.08,
          height: height * 0.08,
          width: width * 0.7,
          resizeMode: 'contain',
          marginLeft: width * 0.02,
        }}
      />
      <Image
        source={require('../../../assets/images/signup_title.png')}
        style={{
          height: height * 0.05,
          width: width * 0.7,
          resizeMode: 'contain',
          marginBottom: height * 0.02,
          marginLeft: width * 0.02,
        }}
      />
      {/* 약관 동의 */}
      <Image
        source={require('../../../assets/images/rectangle12.png')}
        style={{
          width: width * 0.9,
          height: height * 0.055,
          resizeMode: 'contain',
        }}
      />
      <Image
        source={require('../../../assets/images/rectangle13.png')}
        style={{
          width: width * 0.9,
          resizeMode: 'contain',
          height: height * 0.2087,
        }}
      />
      {/* 이메일 입력창 component화 ?*/}
      <Image
        source={require('../../../assets/images/email_input.png')}
        style={{
          marginTop: height * 0.035,
          width: width * 0.9,
          resizeMode: 'contain',
          height: height * 0.055,
        }}
      />
      <View style={styles.signup_code}>
        <Image
          source={require('../../../assets/images/input_codeo.png')}
          style={{
            width: width * 0.5,
            resizeMode: 'contain',
            height: height * 0.055,
          }}
        />
        <Image
          source={require('../../../assets/images/code_button.png')}
          style={{
            marginRight: width * 0.13,
            width: width * 0.3,
            resizeMode: 'contain',
            height: height * 0.055,
          }}
        />
      </View>
      <Image
        source={require('../../../assets/images/caution.png')}
        style={{
          width: width * 0.85,
          resizeMode: 'contain',
          height: height * 0.14,
          marginTop: height * 0.03,
        }}
      />
      <TouchableOpacity>
        <Image
          source={require('../../../assets/images/next_button.png')}
          style={{
            width: width * 0.85,
            resizeMode: 'contain',
            height: height * 0.06,
            marginTop: height * 0.03,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  signup_container: {
    width: width,
    height: height,
    marginLeft: width * 0.05,
  },
  signup_code: {
    marginTop: height * 0.035,
    width: width * 0.9,
    display: 'flex',
    flexDirection: 'row',
    width: width,
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'gray',
  },
});

export default Signup;
