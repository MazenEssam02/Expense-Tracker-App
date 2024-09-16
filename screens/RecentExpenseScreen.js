import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Color';
import ExpenceOutput from '../components/Expence/ExpenceOutput';
import { useContext } from 'react';
import { ExpensesContext } from '../store/Expence-context';
import { dateMinusDays } from '../util/formatDate';

function RecentExpenseScreen() {
  const ExpenceCtx=useContext(ExpensesContext);
  const Recent=ExpenceCtx.expenses.filter((expense)=>{
    const today=new Date();
    const date7DaysAgo=dateMinusDays(today,7);
    return expense.date>date7DaysAgo;
  })
  
  return (
  
    <ExpenceOutput Period={'Last 7 Days'} expenses={Recent}/>
    
  );
}
export default RecentExpenseScreen;
const styles = StyleSheet.create({

});
