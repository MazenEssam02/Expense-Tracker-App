import { View,StyleSheet,Text,TextInput } from "react-native";
import { Colors } from "../../constants/Color";

function Input({label,inputConfig,style,isValid}){

  let inputStyle=[styles.inputItem,!isValid&&styles.invalidInput]
  if(inputConfig&&inputConfig.multiline){
    inputStyle.push(styles.inputMultiLine)
  }
return(
      <View style={[styles.itemContainer,style]}>
        <Text style={[styles.Label,!isValid&&styles.invalidInputLabel]}>{label}</Text>
        <TextInput style={inputStyle} {...inputConfig}   />
      </View>
      );
}
export default Input;
const styles = StyleSheet.create({

  itemContainer:{
    marginVertical:8
  },
  Label:{
    color:'white',
    fontSize:15,
    // fontWeight:'bold'
  },

  inputItem:{
    backgroundColor:Colors.primaryColor600,
    color:'white',
    padding:12,
    margin:10,
    borderRadius:12,
  
    
  },
  inputMultiLine:{
    textAlignVertical:'bottom',
    minHeight:100,
  },
  invalidInputLabel:{
    color:Colors.invalidColor600,
  },
  invalidInput:{
      backgroundColor:Colors.invalidColor200
  }
});
