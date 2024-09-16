import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '../constants/Color';
import CustomButton from '../components/UI/CustomButton';
import { useContext, useState } from 'react';
import { ExpensesContext } from '../store/Expence-context';
function ExpenseControllerScreen({route,navigation}) {
  const {itemId,description,date,amount}=route.params;
  function deleteHandler(){
    ExpenceCtx.deleteExpense(itemId);
    cancelHandler();
  }
  function cancelHandler(){
    navigation.goBack();
  }
  function updateHandler(){
    ExpenceCtx.updateExpense(itemId,{description:expenseDescription,amount:expenseAmount,date:new Date(expenseDate)});
    navigation.goBack();
  }
  function descUpdateHandler(text){
    setExpenceDescription(text)
    
  }
  function dateUpdateHandler(text){
    setExpenceDate(text)
  }
  function amountUpdateHandler(text){
    setExpenceAmount(text)
  }
  const ExpenceCtx=useContext(ExpensesContext);
  const [expenseDescription,setExpenceDescription]=useState(description);
  const [expenseDate,setExpenceDate]=useState(date);
  const [expenseAmount,setExpenceAmount]=useState(amount);
  return (
    <View style={styles.container}>
      <View style={styles.deleteContainer}>
      <CustomButton text={'Delete'} backgroundColor={'#fc9898'} color={'#ae0000'} onPress={deleteHandler}/>
      </View>
     
      <View style={styles.itemContainer}>
        <Text style={styles.Label}>Description</Text>
        <TextInput style={styles.inputItem} value={expenseDescription} onChangeText={descUpdateHandler}/>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.Label}>Date</Text>
        <TextInput style={styles.inputItem}  value={expenseDate} onChangeText={dateUpdateHandler}/>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.Label}>Amount</Text>
        <TextInput style={styles.inputItem} value={`$${expenseAmount}`} onChangeText={amountUpdateHandler}/>
        
      </View>
      <View style={styles.controlButtonsContainer}>
      <CustomButton text={'Cancel'} color={'black'} backgroundColor={'white'} onPress={cancelHandler} />
      <CustomButton text={'Update'} color={'white'} backgroundColor={Colors.primaryColor600} onPress={updateHandler}/>
      </View>
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
  deleteContainer:{
    alignItems:'center',
    margin:12
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
    marginTop:10,
  }
});
