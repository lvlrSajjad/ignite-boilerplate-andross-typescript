import Immutable from "seamless-immutable";
import {Reducer} from "redux";
import {LoginState} from "./Types";


export const INITIAL_STATE = Immutable({
  step: 1,
  phoneNumber: '',
  varCode: '',
  prefixNumber: '+98',
  userName: ''
});


export const reducer: Reducer<LoginState> = (state: LoginState = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'login_step':
      return {...state, step:action.payload};
    case 'set_phone_number':
      return {...state, phoneNumber:action.payload};
    case 'set_verify_code':
      return {...state, prefixNumber:action.payload};
    case 'set_user_name':
      return {...state, userName:action.payload};
    default:
      return {...state};
  }
};
