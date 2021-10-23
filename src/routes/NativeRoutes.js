import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pay } from '../Screen/Pay/Pay';
import { Spay } from '../Screen/Spay/Spay';
import LogIn from '../Screen/LogIn/LogIn';
import { connect } from 'react-redux';
import OtpScreen from '../Screen/OtpScreen/OtpScreen';
import MyHome from '../Screen/MyHome/MyHome';

const Stack = createNativeStackNavigator();

class NativeRoutes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialRouteName: '',
        };
    }



    setRoute = () => {
        if (this.props.save.token == 'xyz') {
            return 'MyHome'
        }
        else {
            return 'LogIn'
        }
    }




    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName={this.setRoute()}>
                    <Stack.Screen name="LogIn" component={LogIn} options={{
                        headerShown: false
                    }} />
                    <Stack.Screen name="OtpScreen" component={OtpScreen} options={{
                        headerShown: false,
                    }} />
                    <Stack.Screen name="MyHome" component={MyHome} options={{
                        headerShown: false
                    }} />
                    <Stack.Screen name="Pay" component={Pay} options={{
                    }} />
                    <Stack.Screen name="Spay" component={Spay} options={{
                    }} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

const mapStateToProps = (props) => {
    return {
        save: props.save,
    }
}


export default connect(mapStateToProps)(NativeRoutes);

