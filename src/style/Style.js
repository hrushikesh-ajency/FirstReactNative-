import { StyleSheet, StatusBar } from 'react-native';

const swiperStyles = StyleSheet.create({
   itemImage: {
      resizeMode: 'contain',
      marginLeft: 'auto',
      marginRight: 'auto',
      height: 300,
      width: 300,
   },
   itemImage1: {
      resizeMode: 'contain',
      marginLeft: 'auto',
      marginRight: 'auto',
      height: 100,
      width: 300,
   },
});

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   my: {
      display: 'flex',
      flexDirection: 'row',
      height: 70,  
      borderBottomColor: 'silver',
      borderBottomWidth:1,
      borderRadius: 5,
      marginBottom: 20,
      marginTop: 10,
   },
   myn: {
      textAlignVertical: 'center',
      marginLeft: 10,
   },
   input: {
      margin: 20,
      height: 50,
      borderColor: 'silver',
      borderRadius: 5,
      borderWidth: 1
   },
   three: {
      margin: 20,
      height: 80,
      borderRadius: 5,
      borderWidth: 1,
      backgroundColor: 'white',
      shadowColor: 'black',
      shadowOpacity: 1,
      shadowRadius: 10,
   },
   new: {
      margin: 30,
      height: 80,
      borderRadius: 25,
      backgroundColor: 'papayawhip',
      shadowColor: 'black',
      shadowOpacity: 1,
      shadowRadius: 10,
   },
   two: {
      margin: 20,
      height: 180,
      borderColor: 'silver',
      borderRadius: 5,
      borderWidth: 1,
      padding: 30,

   },
   twoo: {
      margin: 20,
      height: 180,
      borderColor: 'silver',
      borderRadius: 5,
      borderWidth: 1,
      padding: 30,
      backgroundColor: "lightblue",
   },
   submitButton1: {
      backgroundColor: 'yellowgreen',
      width: 90,
      borderRadius: 20,
      textAlign: 'center',
      textAlignVertical: 'center',
      marginLeft: 150,
      height: 30,
      color: "white"
   },
   submitButton3: {
      backgroundColor: 'green',
      width: 90,
      borderRadius: 3,
      textAlign: 'center',
      textAlignVertical: 'center',
      marginLeft: 150,
      height: 40,
      color: "white",
      marginTop:15,
   },
   submitButton: {
      backgroundColor: 'red',
      width: 130,
      borderRadius: 20,
      textAlign: 'center',
      textAlignVertical: 'center',
      marginLeft: 210,
      height: 30,
      color: "white"
   },
   submitButtonText: {
      color: 'white'
   }
})



export { swiperStyles, styles };