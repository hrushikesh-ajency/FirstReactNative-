import * as React from 'react';
import { View, Text, TouchableOpacity, Button, Image, TextInput, StyleSheet } from 'react-native';
import { styles } from '../../style/Style';
import bannerIm from '../../../assets/bannerImage.webp';
import { swiperStyles } from '../../style/Style';
import { connect } from 'react-redux';
import { saveToken } from '../../redux/user/User.action';


class OtpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
    }
  }

  noBack = () => {
    this.props.navigation.reset({
      index: 0,
      routes: [
        {
          name: 'MyHome'
        }
      ]
    });
  };


  validateOtp = () => {
    const { otp } = this.state;


    if (otp == '1234') {
      this.props.SaveToken()
      this.noBack();
      alert("log in successful")
    } else if (otp == "") {
      alert("please enter otp")
    }
    else {
      alert("invalid otp")
    }
  }



  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1, }}>
        <Text style={{ color: 'green', fontSize: 20, marginLeft: 20, marginTop: 20 }} >24/7 access</Text>
        <Text style={{ fontSize: 20, marginLeft: 20 }} >to all your Insurance policies</Text>
        <View>
          <Image style={[swiperStyles.itemImage]} source={bannerIm} />
        </View>

        <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>Enter OTP to sign in</Text>
        <Text style={{ color: 'silver', marginLeft: 20, fontSize: 15, marginTop: 13 }}>4 digit OTP</Text>
        <TextInput
          style={[styles.input]}
          keyboardType="numeric"
          maxLength={4}
          onChangeText={(value) => this.setState({ otp: value })}
          placeholder='enter your OTP!'

        >
        </TextInput>
        <Text style={{ color: 'silver', marginLeft: 20, fontSize: 12, }}>Didn't receive OTP? <Text style={{ color: 'green', marginLeft: 20, fontSize: 12, }} >Resend in ** seconds</Text> </Text>


        <TouchableOpacity
          style={[styles.input]}
          style={{ marginTop: 110, marginLeft: 20 }}
          onPress={() => this.validateOtp()}
        >
          <Text style={{ marginBottom: 20, textAlign: 'center', textAlignVertical: 'center', margin: 20, height: 40, borderColor: 'green', borderRadius: 5, borderWidth: 1, backgroundColor: 'springgreen' }}
          >Verify</Text>
        </TouchableOpacity>

        <Text style={{ color: 'silver', marginLeft: 20, fontSize: 14, textAlign: 'center', textAlignVertical: 'center' }}>Need Help? call our Support</Text>
        <Text style={{ color: 'green', marginLeft: 20, fontSize: 13, textAlign: 'center', textAlignVertical: 'center' }}>1800 2** 7*7*</Text>

      </View>
    )
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    SaveToken: () => dispatch(saveToken()),
  }
}

export default connect({}, mapDispatchToProps)(OtpScreen)