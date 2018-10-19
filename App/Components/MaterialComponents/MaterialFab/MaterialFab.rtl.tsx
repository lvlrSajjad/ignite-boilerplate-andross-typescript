import * as React from "react";
import {MKButton,mdl} from 'react-native-material-kit';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import metrics from "../../../Themes/Metrics";
import {MaterialFabProps} from "./index";

export default (props : MaterialFabProps) => {
  return (
    <MKButton
      width={props.size}
      height={props.size}
      borderRadius={props.size / 2}
      backgroundColor={props.color}
      style={{alignItems:'center',justifyContent:'center'}}
      onPress={props.onPress}
    >
      {props.isLoading ?
        <mdl.Spinner
          strokeColor={props.iconColor}
        />
        :
        <MaterialCommunityIcons
          name={props.icon} size={metrics.regularMaterialFab.iconSize} color= {props.iconColor}
        />
        }

    </MKButton>
  );
}
