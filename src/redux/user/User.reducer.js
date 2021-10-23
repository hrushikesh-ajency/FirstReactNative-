import { SAVE_TOKEN,REMOVE_TOKEN} from './User.type';


const initialState = {
  token: '',
};

const UserReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SAVE_TOKEN:
      return {
        ...state,
        token: action.data,
      };
    case REMOVE_TOKEN:
      return {...state, token:false,};
  
    default:
      return state;
  }
};

export default UserReducer;
