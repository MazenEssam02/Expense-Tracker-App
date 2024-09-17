
import {  Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '../constants/Color';
import CustomButton from '../components/UI/CustomButton';
import { useContext, useState,useLayoutEffect } from 'react';
import { ExpensesContext } from '../store/Expence-context';
import InputForm from '../components/ManageExpence/inputForm';

function ExpenseControllerScreen({route,navigation}) {
  const {control,expence}=route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: control==='Update' ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, control]);
  function deleteHandler(){
    ExpenceCtx.deleteExpense(expence.itemId);
    cancelHandler();
  }
  function cancelHandler(){
    navigation.goBack();
  }
  function onSubmitHandler(){
    const expenceEntered={
      description:inputText.description,
      date:new Date(inputText.date),
      amount:+inputText.amount
    }
    const validAmount=!isNaN(expenceEntered.amount)&&expenceEntered.amount>0;
    const validDate=expenceEntered.date.toString()!=='Invalid Date';
    const validDescription=expenceEntered.description.length>0;
    if(!validAmount||!validDate||!validDescription){
      Alert.alert('Invalid Input','Please check your input values');
      return;
    }
    updateHandler(expenceEntered);
  }
  function updateHandler(expenceEntered){
    if (control==='Update'){
      ExpenceCtx.updateExpense(expence.itemId,expenceEntered);
    }
    else{
      ExpenceCtx.addExpense(expenceEntered);
    }
    navigation.goBack();
  }
  function inputTextHandler(inputPicker,inputNewText){
    setInputText((curInputText)=>{
      return{
        ...curInputText,
        [inputPicker]:inputNewText
      };
    });
    
  }
 
  const [inputText,setInputText]=useState({
    description:expence.description?expence.description:'',
    date:expence.date?expence.date:'',
    amount:expence.amount?expence.amount:'',
  });

  //----------------------------------------------
  // function inputTextHandler({inputPicker,inputNewText}){
  //   setInputText((curInputText)=>{
  //     return{
  //       ...curInputText,
  //       [inputPicker]:inputNewText
  //     }
  //   })
    
  // }
 
  // const [inputText,setInputText]=useState({
  //   description:expence.description,
  //   date:expence.date,
  //   amount:expence.amount
  // });
  // const [expenseDate,setExpenceDate]=useState(expence.date);
  // const [expenseAmount,setExpenceAmount]=useState(expence.amount);
  //---------------------------------------------------------------------
  const ExpenceCtx=useContext(ExpensesContext);

  return (
    <View style={styles.container}>
     <Text style={styles.AddTitle}>Your Expence</Text>
      <InputForm expence={expence} inputText={inputText} inputTextHandler={inputTextHandler}/>
      <View style={styles.controlButtonsContainer}>
      <CustomButton text={'Cancel'} color={'black'} backgroundColor={'white'} onPress={cancelHandler} />
      <CustomButton text={control==='Add'?'Add':'Update'} color={'white'} backgroundColor={Colors.primaryColor600} onPress={onSubmitHandler}/>
      </View>
      {control==='Update'&&<View style={styles.deleteContainer}>
        <CustomButton text={'Delete'} backgroundColor={'#ea2c2c'} color={'#f8d7d7'} onPress={deleteHandler}/>
        </View>}
    </View>
  );
}
export default ExpenseControllerScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor800,
    paddingHorizontal:25,
  },
  AddTitle:{
fontSize:24,
fontWeight:'bold',
color:'white',
textAlign:'center',
marginBottom:25,
marginTop:50,
  },
  deleteContainer:{
    alignItems:'center',
    margin:12,
    borderTopColor:Colors.primaryColor600,
    borderTopWidth:1,
    paddingTop:25
  },
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
  controlButtonsContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    // marginHorizontal:20,
    marginVertical:10,
   
  }
});
