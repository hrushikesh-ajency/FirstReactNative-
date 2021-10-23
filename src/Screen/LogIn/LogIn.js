import React from 'react';
import { swiperStyles, styles } from '../../style/Style';
import { Text, TouchableOpacity, Image, View, ScrollView, TextInput } from 'react-native';
import bannerIm from '../../../assets/bannerImage.webp';


class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { phone: "" }
  }

  validatePhone = () => {
    const { phone } = this.state;
    if (phone == "") {
      alert('please enter valid phone number')
    }
    else {
      this.props.navigation.navigate('OtpScreen',
        {
          name: "Hrushikesh", age: 20,
        }
      );
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

        <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>Create an Account or Sign In</Text>
        <Text style={{ color: 'silver', marginLeft: 20, fontSize: 15, marginTop: 13 }}>Phone Number</Text>

        <TextInput
          style={[styles.input]}
          placeholder='enter your phone number'
          onChangeText={(text) => { this.setState({ phone: text }) }}
          keyboardType="numeric"
          maxLength={10}
        >
        </TextInput>
        <Text style={{ color: 'silver', marginLeft: 20, fontSize: 12, }}>By continuing, you agree to our <Text style={{ color: 'green', marginLeft: 20, fontSize: 12, }} >terms & conditions</Text> </Text>

        <TouchableOpacity
          style={[styles.input]}
          style={{ marginTop: 110, marginLeft: 20 }}
          onPress={() => this.validatePhone()}
        >
          <Text style={{ marginBottom: 20, textAlign: 'center', textAlignVertical: 'center', margin: 20, height: 40, borderColor: 'green', borderRadius: 5, borderWidth: 1, backgroundColor: 'springgreen' }}
          >Continue</Text>
        </TouchableOpacity>

        <Text style={{ color: 'silver', marginLeft: 20, fontSize: 14, textAlign: 'center', textAlignVertical: 'center' }}>Need Help? call our Support</Text>
        <Text style={{ color: 'green', marginLeft: 20, fontSize: 13, textAlign: 'center', textAlignVertical: 'center' }}>1800 2** 7*7*</Text>

      </View>
    );
  }
}

export default LogIn;