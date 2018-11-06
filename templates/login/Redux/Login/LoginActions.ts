
export const setUserName = (userName:string) => {
  return {
    type: 'set_user_name',
    payload:userName
  };
};


export const setPassword = (password:string) => {
  return {
    type: 'set_password',
    payload:password
  };
};
