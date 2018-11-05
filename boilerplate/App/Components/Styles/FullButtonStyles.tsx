import { StyleSheet } from "react-native";
import { Fonts, Colors } from "../../Themes";

export default StyleSheet.create({
  button: {
    marginVertical: 5,
    borderTopColor: Colors.fire,
    borderBottomColor: Colors.bloodOrange,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: Colors.ember
  },
  buttonText: {
    alignSelf: 'center',
    margin: 18,
    color: Colors.snow,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold
  }
});
