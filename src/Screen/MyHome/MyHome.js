import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Button, Image, } from 'react-native';
import { styles } from '../../style/Style';
import img1 from '../../../assets/homeBanner1.webp';
import img2 from '../../../assets/jobStatus.webp';
import img3 from '../../../assets/tLogo.webp';
import { swiperStyles } from '../../style/Style';
import { connect } from 'react-redux';
import { removeToken } from '../../redux/user/User.action'



class MyHome extends React.Component {

  doLogout = () => {
    this.props.removeToken();
    this.props.navigation.reset({
      index: 1,
      routes: [
        {
          name: 'LogIn'
        }
      ]
    });
  };

  render() {
    return (
      <ScrollView>
        <View style={[styles.my]}
        >
          <Image source={img3} />
          <Text style={[styles.myn]}>Hello,Hrushikesh </Text>
          <TouchableOpacity
            onPress={() => this.doLogout()}
          >
            <Text style={[styles.submitButton3]}>
              LogOut
            </Text>
          </TouchableOpacity>

        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }} >
          <Text style={{ color: 'silver', marginLeft: 20 }}>things to do </Text>
          <Text style={{ color: 'green', marginLeft: 280 }}>View All</Text>
        </View>
        <View style={[styles.three]}>
          <Text style={{ marginLeft: 20, paddingVertical: 10 }}>pay registration fe for your car</Text>
          <TouchableOpacity onPress={() => { this.props.navigation.push('Pay') }} ><Text style={[styles.submitButton]}>Pay Now</Text></TouchableOpacity>
        </View>
        <View style={[styles.three]}>
          <Text style={{ marginLeft: 20, paddingVertical: 10 }}>Insurance renewal for your car</Text>
          <TouchableOpacity onPress={() => { this.props.navigation.push('Spay') }} ><Text style={[styles.submitButton]}>Pay Now</Text></TouchableOpacity>
        </View>
        <View style={[styles.new]}>
          <Text style={{ marginLeft: 20, paddingVertical: 10, color: 'green', textAlign: 'center' }}>Update your assets</Text>
          <TouchableOpacity><Text style={[styles.submitButton1]}>Click Here!!</Text></TouchableOpacity>

        </View>
        <View style={[styles.two]}>
          <Image style={[swiperStyles.itemImage1]} source={img1} />
          <Text>Hey, taking care of your family is half the job done, Protecting their future completes it.</Text>
        </View>
        <View style={[styles.twoo]}>
          <Image style={[swiperStyles.itemImage1]} source={img2} />

        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (props) => {
  return {
    save: props.save,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeToken: () => dispatch(removeToken()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyHome)
