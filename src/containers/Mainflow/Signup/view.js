import React, {useState} from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

function Signup(navigation) {
  const [allagree, setAllagree] = useState(false);
  const [ser_agree, setSer_agree] = useState(false);
  const [per_agree, setPer_agree] = useState(false);
  const [mark_agree, setMark_agree] = useState(false);
  const [email, onChangeEmail] = React.useState('');
  const [code, onChangeCode] = React.useState('');

  const chg_ser = () => {
    setSer_agree(!ser_agree);
  };
  const chg_per = () => {
    setPer_agree(!per_agree);
  };
  const chg_mark = () => {
    setMark_agree(!mark_agree);
  };
  const chg_all = () => {
    setSer_agree(true);
    setPer_agree(true);
    setMark_agree(true);
  };
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
      {/* <Button onPress={chg_all} title="test button" /> */}
      {/* 약관 동의 */}
      <ImageBackground
        source={require('../../../assets/images/rectangle12.png')}
        // onPress={chg_all}
        style={{
          width: width * 0.9,
          height: height * 0.055,
          resizeMode: 'contain',
          flexDirection: 'row',
        }}>
        {allagree ? (
          <TouchableOpacity onPress={chg_all}>
            <Image
              source={require('../../../assets/images/chk_square.png')}
              styles={{
                width: width * 0.001,
                height: height * 0.001,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={chg_all}>
            <Image
              source={require('../../../assets/images/square.png')}
              styles={{
                width: width * 0.001,
                height: height * 0.001,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        )}

        <Image
          source={require('../../../assets/images/nobutton.png')}
          styles={{
            width: width * 0.001,
            height: height * 0.001,
            resizeMode: 'contain',
          }}
        />
      </ImageBackground>
      <ImageBackground
        source={require('../../../assets/images/rectangle13.png')}
        style={{
          width: width * 0.9,
          resizeMode: 'contain',
          height: height * 0.2087,
        }}>
        {ser_agree ? (
          <TouchableOpacity onPress={chg_ser}>
            <Image
              source={require('../../../assets/images/chk_square.png')}
              styles={{
                width: width * 0.001,
                height: height * 0.001,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={chg_ser}>
            <Image
              source={require('../../../assets/images/square.png')}
              styles={{
                width: width * 0.001,
                height: height * 0.001,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        )}
        {per_agree ? (
          <TouchableOpacity onPress={chg_per}>
            <Image
              source={require('../../../assets/images/chk_square.png')}
              styles={{
                width: width * 0.001,
                height: height * 0.001,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={chg_per}>
            <Image
              source={require('../../../assets/images/square.png')}
              styles={{
                width: width * 0.001,
                height: height * 0.001,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        )}
        {mark_agree ? (
          <TouchableOpacity onPress={chg_mark}>
            <Image
              source={require('../../../assets/images/chk_square.png')}
              styles={{
                width: width * 0.001,
                height: height * 0.001,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={chg_mark}>
            <Image
              source={require('../../../assets/images/square.png')}
              styles={{
                width: width * 0.001,
                height: height * 0.001,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        )}
      </ImageBackground>
      {/* 이메일 입력창 component화 ?*/}
      <ImageBackground
        source={require('../../../assets/images/email_inputn.png')}
        style={{
          marginTop: height * 0.035,
          width: width * 0.86,
          resizeMode: 'contain',
          height: height * 0.055,
        }}>
        <TextInput
          onChangeText={onChangeEmail}
          value={email}
          placeholder="이메일 주소"
          keyboardType="email-address"
        />
      </ImageBackground>
      {/* 비교 */}
      {/* <Image
        source={require('../../../assets/images/email_input.png')}
        style={{
          marginTop: height * 0.035,
          width: width * 0.9,
          resizeMode: 'contain',
          height: height * 0.055,
        }}
      /> */}
      {/* 인증번호 입력창 */}
      <View style={styles.signup_code}>
        <ImageBackground
          source={require('../../../assets/images/input_coden.png')}
          style={{
            width: width * 0.5,
            resizeMode: 'contain',
            height: height * 0.055,
          }}>
          <TextInput
            onChangeText={onChangeCode}
            value={code}
            placeholder="인증코드 입력"
            keyboardType="numeric"
          />
        </ImageBackground>
        {/* 비교 */}
        {/* <Image
          source={require('../../../assets/images/input_codeo.png')}
          style={{
            width: width * 0.5,
            resizeMode: 'contain',
            height: height * 0.055,
          }}
        /> */}
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
      {/* <TouchableOpacity onPress={() => navigation.navigate('Intro1')}> */}
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
