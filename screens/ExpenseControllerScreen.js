import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Color';
function ExpenseControllerScreen() {
  return (
    <View style={styles.container}>
      <Text>Controller</Text>
     
    </View>
  );
}
export default ExpenseControllerScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor800,
 
  },
});
