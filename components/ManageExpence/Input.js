import { View,StyleSheet,Text,TextInput } from "react-native";
import { Colors } from "../../constants/Color";

function Input({label,inputConfig}){
  let inputStyle=[styles.inputItem]
  if(inputConfig&&inputConfig.multiline){
    inputStyle.push(styles.inputMultiLine)
  }
return(
      <View style={styles.itemContainer}>
        <Text style={styles.Label}>{label}</Text>
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
    fontSize:16,
    fontWeight:'bold'
  },

  inputItem:{
    backgroundColor:Colors.primaryColor600,
    color:'white',
    padding:12,
    margin:10,
    
  },
  inputMultiLine:{
    textAlignVertical:'bottom',
    minHeight:100,
  }
});
