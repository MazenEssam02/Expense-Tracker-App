import ExpencesList from './ExpensesList';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/Color';
import ExpenceSummary from './ExpenseSummary';
function ExpenceOutput({expenses,Period}) {
 
  return (
    <View style={styles.container}>
      <ExpenceSummary Period={Period} expenses={expenses}/>
      <ExpencesList expenses={expenses}/>
    </View>
  
  );
}
export default ExpenceOutput;
const styles = StyleSheet.create({
  container: {
   flex:1,
    backgroundColor: Colors.primaryColor800,
  },
});
