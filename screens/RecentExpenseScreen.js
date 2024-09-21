import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Color';
import ExpenceOutput from '../components/Expence/ExpenceOutput';
import { useContext, useEffect, useState } from 'react';
import { ExpensesContext } from '../store/Expence-context';
import { dateMinusDays } from '../util/formatDate';
import { fetchExpences } from '../util/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ErrorOverlay from '../components/UI/ErrorOverlay';

function RecentExpenseScreen() {
  const[isFetching,setIsFetching]=useState(true);
  const[error,setError]=useState();
  useEffect(()=>{
    async function getExpences() {
      try{
        setIsFetching(true);
        const expences=await fetchExpences();
        ExpenceCtx.setExpence(expences);
      }catch(error){
        setError('Error in Fetching Data- Please Try again later');
      }
      setIsFetching(false);  
   
    }
    getExpences();
  },[])
  const ExpenceCtx=useContext(ExpensesContext);
  const Recent=ExpenceCtx.expenses.filter((expense)=>{
    const today=new Date();
    const date7DaysAgo=dateMinusDays(today,7);
    return expense.date>date7DaysAgo;
  })
  if(error&&!isFetching){
   return <ErrorOverlay message={error}/>
  }
  if(isFetching) {
    return <LoadingOverlay/>
} 
  return (
  
    <ExpenceOutput Period={'Last 7 Days'} expenses={Recent}/>
    
  );
}
export default RecentExpenseScreen;
const styles = StyleSheet.create({

});
