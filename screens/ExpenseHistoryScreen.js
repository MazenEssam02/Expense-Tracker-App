import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Color';

function ExpenseHistoryScreen() {
  return (
    <View style={styles.container}>
      <Text>History</Text>
     
    </View>
  );
}
export default ExpenseHistoryScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor800,
 
  },
});
