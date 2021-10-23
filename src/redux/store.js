import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import rootReducer from '../redux/root_reducer';


const initialState ={};
const middlewares = [thunk]

export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
);

export const persistor = persistStore(store);
export default {persistor,store};