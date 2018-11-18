import Immutable from "seamless-immutable";
import {Reducer} from "redux";
import {LoginState} from "./Types";


export const INITIAL_STATE = Immutable({
  userName: '',
  password:''
});


export const reducer: Reducer<LoginState> = (state: LoginState = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'set_password':
      return {...state, password:action.payload};
    case 'set_user_name':
      return {...state, userName:action.payload};
    default:
      return {...state};
  }
};
