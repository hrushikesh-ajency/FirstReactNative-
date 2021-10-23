import React, {Component, Fragment} from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from '../redux/store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import NativeRoutes from './NativeRoutes';
import {StatusBar} from 'react-native';


export class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <StatusBar  />
        <Provider store={store}>
          <PersistGate persistor={persistor}>
              <NativeRoutes />
          </PersistGate>
        </Provider>
      </Fragment>
    );
  }
}

export default Routes;
