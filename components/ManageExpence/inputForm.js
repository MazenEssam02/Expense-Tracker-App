import { View ,StyleSheet,Text } from "react-native";
import Input from "./Input";
import { useState } from "react";
import { formatDate } from "../../util/formatDate";
function InputForm({inputText,inputTextHandler}){

return (
  <View>
    
    <View style={styles.rowContainer}>
    <Input label='Amount' style={styles.rowInput} inputConfig={{value:`${inputText.amount?inputText.amount:''}` ,keyboardType:'decimal-pad',onChangeText:inputTextHandler.bind(this,'amount')}}/>
    <Input label='Date'style={styles.rowInput} inputConfig={{value:inputText.date,onChangeText:inputTextHandler.bind(this,'date'),placeholder:'YYYY-MM-DD',placeholderTextColor:'white',maxLength:10}}/>
    </View>
    <Input label='Description' inputConfig={{value:inputText.description,
    onChangeText:inputTextHandler.bind(this,'description'),
    multiline:true}}/>
  </View>
);}
export default InputForm;

const styles=StyleSheet.create({
  rowContainer:{
    flexDirection:'row',

  },
  rowInput:{
    flex:1,
  }
});