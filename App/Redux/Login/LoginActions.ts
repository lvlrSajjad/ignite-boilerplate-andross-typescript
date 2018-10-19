export const loginStep = (step:number) => {
  return {
    type: 'login_step',
    payload:step
  };
};

export const setPhoneNumber = (phoneNumber:string) => {
  return {
    type: 'set_phone_number',
    payload:phoneNumber
  };
};

export const setVerifyCode = (verifyCode:string) => {
  return {
    type: 'set_verify_code',
    payload:verifyCode
  };
};

export const setUserName = (userName:string) => {
  return {
    type: 'set_user_name',
    payload:userName
  };
};
