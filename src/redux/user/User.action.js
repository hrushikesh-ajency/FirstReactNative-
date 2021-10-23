import { SAVE_TOKEN,REMOVE_TOKEN} from './User.type'


export const saveToken = () => {
  return {
    type: SAVE_TOKEN,
    data: 'xyz',
  };
};

export const removeToken = () => {
  return {
    type: REMOVE_TOKEN,
  };
};



