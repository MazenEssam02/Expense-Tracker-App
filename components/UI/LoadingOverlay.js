import { View,StyleSheet, ActivityIndicator } from "react-native";
import { Colors } from "../../constants/Color";
export default function LoadingOverlay(){
  return(
<View style={styles.container}>
  <ActivityIndicator size={'large'} color={'white'} />
</View>
  );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    padding:24,
    backgroundColor:Colors.primaryColor800
  }
})
