import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import UserReducer from './user/User.reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [ 'user'],
};

const rootReducer = combineReducers({ 
  save: UserReducer,
});

export default persistReducer(persistConfig, rootReducer);
