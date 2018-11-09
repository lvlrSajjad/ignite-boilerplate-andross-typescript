import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from "../../../Themes"

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    width:'100%',
    flexDirection:'row',
    height:56,
    alignItems:'center'
  },
  titleContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})
