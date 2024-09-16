import { View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import { formatDate } from "../../util/formatDate";
function InputForm({inputText,inputTextHandler}){

return (
  <View>
    <Input label='Description' inputConfig={{value:inputText.description,
    onChangeText:inputTextHandler.bind(this,'description'),
    multiline:true}}/>
    <Input label='Date' inputConfig={{value:formatDate(inputText.date) ,onChangeText:inputTextHandler.bind(this,'date'),placeholder:'YYYY-MM-DD',placeholderTextColor:'white',maxLength:10}}/>
    <Input label='Amount' inputConfig={{value:`${inputText.amount?inputText.amount:''}` ,keyboardType:'decimal-pad',onChangeText:inputTextHandler.bind(this,'amount')}}/>
  </View>
);}
export default InputForm;