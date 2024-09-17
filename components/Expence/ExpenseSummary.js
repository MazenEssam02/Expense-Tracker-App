import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/Color';
function ExpenceSummary({expenses,Period}) {
  const expenseSum=expenses.reduce((sum,expense)=> expense.amount+sum,0);
  return (
    
      <View style={styles.summary}>
        <Text style={styles.period}>{Period}</Text>
        <Text style={styles.price}> ${expenseSum.toFixed(2)} </Text>
      </View>
   
    
  
  );
}
export default ExpenceSummary;
const styles = StyleSheet.create({
  summary: {
    backgroundColor:Colors.secondaryColor200,
   flexDirection:'row',
   justifyContent:'space-between',
   padding:8,
  },
  period:{
    color:Colors.secondaryColor800,
  },
  price:{
    color:Colors.secondaryColor800,
    fontWeight:'bold'
  }
});