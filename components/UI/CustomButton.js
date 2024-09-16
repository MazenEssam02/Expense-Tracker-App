import { Pressable, View ,Text,StyleSheet} from "react-native";
import { Colors } from "../../constants/Color";

function CustomButton({onPress,backgroundColor,text,color}){
  return(

  <Pressable onPress={onPress} android_ripple={'white'} style={({pressed})=>pressed?styles.press:null}>
  <View style={[styles.buttonContainer,{backgroundColor:backgroundColor}]}>
    <Text style={[styles.buttonText,{color:color}]}>
    {text}
    </Text>
  </View>
</Pressable>
);
}
export default CustomButton;
const styles=StyleSheet.create({
buttonContainer:{
 
  width:100,
  padding:15,
  borderRadius:8,
},
buttonText:{
//  fontWeight:'bold',
  textAlign:'center'
},
press:{
  opacity:0.8
}
});