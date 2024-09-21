import { View,StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/Color";
export default function ErrorOverlay({message}){
  return(
<View style={styles.container}>
  <Text style={styles.errorText}>An error occured!</Text>
  <Text style={styles.errorText}>{message}</Text>
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
  },
  errorText:{
    color:'white',
    fontSize:14,
  }
})
