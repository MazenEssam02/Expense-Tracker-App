import { Text,View,Pressable,StyleSheet } from "react-native";
import { Colors } from "../../constants/Color";
import { useNavigation } from '@react-navigation/native';
import {formatDate} from '../../util/formatDate';
function ExpencesListItem({itemData}){
  const navigation=useNavigation();
  function itemPressHandler(){
    navigation.navigate('ExpenseContol');
  }
  return(
    <Pressable style={styles.button} onPress={itemPressHandler}>

    <View style={styles.itemContainer}>
      <View>
        <Text style={styles.expenseItemText}>{itemData.item.title}</Text>
        <Text style={styles.expenseItemDate}>{formatDate(itemData.item.date)}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>{itemData.item.amount}</Text>
      </View>
    </View>
    </Pressable>
  );
}
export default ExpencesListItem;
const styles = StyleSheet.create({

  itemContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:12,
    backgroundColor:Colors.primaryColor600,
    margin:12,
  },
  expenseItemText:{
    color:'white',
    fontWeight:'bold',
    fontSize:16
  },
  expenseItemDate:{
    color:'white',
    fontSize:13
  },
  amountContainer:{
    backgroundColor:'white',
    borderRadius:8,
    padding:12,
    width:'20%',
  },
  amountText:{
    color:Colors.primaryColor600,
    textAlign:'center',
    fontWeight:'bold'
  }
  });