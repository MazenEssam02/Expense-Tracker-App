import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Color';
function RecentExpenseScreen() {
  return (
    <View style={styles.container}>
      <Text>Recents</Text>
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
