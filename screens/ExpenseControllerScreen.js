
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
      description:inputText.description.value,
      date:new Date(inputText.date.value),
      amount:+inputText.amount.value
    }

    const validAmount=!isNaN(expenceEntered.amount)&&expenceEntered.amount>0;
    const validDate=expenceEntered.date.toString()!=='Invalid Date';
    const validDescription=expenceEntered.description.length>0;
    if(!validAmount||!validDate||!validDescription){
      // Alert.alert('Invalid Input','Please check your input values');
      setInputText((curInputText)=>{
        return{
          amount:{value:curInputText.amount.value,isValid:validAmount},
          date:{value:curInputText.date.value,isValid:validDate},
          description:{value:curInputText.description.value,isValid:validDescription}
        };
      });
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
        [inputPicker]:{value:inputNewText, isValid:true}
      };
    });

    
  }
 
  const [inputText,setInputText]=useState({
      description:{
        value:expence.description?expence.description:'',
        isValid:true
      },
      date:
        {
          value:expence.date?expence.date:'',
        isValid:true},
      amount:
      {
        value:expence.amount?expence.amount:'', 
        isValid:true},
  });
const formIsValid=!inputText.amount.isValid||!inputText.description.isValid||!inputText.date.isValid
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
      {formIsValid&& <Text style={styles.invalidText}>Invalid Input - Please check your input values</Text>}
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
   
  },
  invalidText:{
    color:'red',
    fontSize:14,
    textAlign:'center'
  }
});
