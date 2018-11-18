import * as React from "react";
import Ltr from "./PhoneNumberForm.ltr";
import Rtl from "./PhoneNumberForm.rtl";

export interface PhoneNumberFormProps {
  prefixNumber: string,
  onTextChange?(text:string): void,
  phoneNumber: string,
  isLoading?: boolean,
  onPress?(): void,
  isDarkMode?: boolean,
  isRtl?: boolean
}

export default (props:PhoneNumberFormProps) => props.isRtl ? <Rtl {...props} /> : <Ltr {...props}/>;
