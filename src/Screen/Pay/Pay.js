import React from 'react';
import { Text ,TouchableOpacity,Image,View,ScrollView,BackHandler} from 'react-native';
import img4 from '../../../assets/tLogo.webp';
import img5 from '../../../assets/car_1.webp';
import img6 from '../../../assets/health_1.webp';
import img1 from '../../../assets/homeBanner1.webp';
import img2 from '../../../assets/jobStatus.webp';
import { swiperStyles,styles } from '../../style/Style';

export class Pay extends React.Component {

    render(){
    return (
        <ScrollView>
        
        <View style={[styles.my]}>
          <Image source={img4} />
          <Text style={[styles.myn]}>Hello,Hrushikesh </Text>
        
        </View>
        <View style={[styles.two]}>
        <Image source={img6} />
        </View>
        <View style={[styles.two]}>
        <Image source={img5} />
        </View>
        <View style={[styles.two]}>
        <Image style={[swiperStyles.itemImage1]}   source={img1} />
        </View>
        <View style={[styles.two]}>
        <Image style={[swiperStyles.itemImage1]}   source={img2} />
        </View>
        </ScrollView>
    
    )
    }
}
