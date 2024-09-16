import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Color';
import ExpenceOutput from '../components/Expence/ExpenceOutput';

function RecentExpenseScreen() {
  return (
    <View style={styles.container}>
    <ExpenceOutput Period={'Last 7 Days'}/>
    </View>
  );
}
export default RecentExpenseScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor800,

  },
});
