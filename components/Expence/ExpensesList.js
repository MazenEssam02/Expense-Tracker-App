
import { FlatList, StyleSheet, View ,Text} from 'react-native';
import { Colors } from '../../constants/Color';
import ExpencesListItem from './ExpenceListItem';
function ExpencesList({expenses}) {
  function renderList(itemData){
    return <ExpencesListItem itemData={itemData}/>
   
    }
  return (
    
      <FlatList data={expenses} renderItem={renderList} keyExtractor={(item)=>item.id} />
    
 
  
  
  );
}
export default ExpencesList;
const styles = StyleSheet.create({

});
