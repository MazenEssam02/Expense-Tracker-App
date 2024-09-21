import ExpencesList from './ExpensesList';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/Color';
import ExpenceSummary from './ExpenseSummary';
function ExpenceOutput({expenses,Period}) {
  return (
    <View style={styles.container}>
      <ExpenceSummary Period={Period} expenses={expenses}/>
      {expenses.length? <ExpencesList expenses={expenses}/>:<Text style={styles.textStyle}>There are no Expences in {Period}</Text>}
     
    </View>
  
  );
}
export default ExpenceOutput;
const styles = StyleSheet.create({
  container: {
   flex:1,
    backgroundColor: Colors.primaryColor800,
  },
  textStyle:{
    color:'white',
    fontSize:14,
    textAlign:'center',
    paddingTop:15,
  }
});
