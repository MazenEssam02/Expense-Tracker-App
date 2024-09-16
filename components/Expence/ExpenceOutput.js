import ExpencesList from './ExpensesList';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/Color';
import ExpenceSummary from './ExpenseSummary';
function ExpenceOutput({expenses,Period}) {
  const DummyExpenses=[
    {
      id:'e1',
      title:'Hello',
      amount:17.77,
      date:new Date('2021-06-06'),
    },
    
    {
      id:'e2',
      title:'Hello2',
      amount:17.1,
      date:new Date('2022-06-06'),
    },
    {
      id:'e3',
      title:'Hello3',
      amount:11.1,
      date:new Date('2022-07-06'),
    }
  ]
  return (
    <View>
      <ExpenceSummary Period={Period} expenses={DummyExpenses}/>
      <ExpencesList expenses={DummyExpenses}/>
    </View>
  
  );
}
export default ExpenceOutput;
const styles = StyleSheet.create({
 
});
