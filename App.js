import { StatusBar } from 'expo-status-bar';
import RecentExpenseScreen from './screens/RecentExpenseScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExpenseHistoryScreen from './screens/ExpenseHistoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from './constants/Color';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExpenseControllerScreen from './screens/ExpenseControllerScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function App() {
  function ExpenseTrackerTabs(){
    return(
      <Tab.Navigator screenOptions={{
      headerStyle:{backgroundColor:Colors.primaryColor600},
      headerTintColor:'white',
      tabBarStyle:{backgroundColor:Colors.primaryColor600},
      tabBarActiveTintColor:Colors.accentColor,
      tabBarInactiveTintColor:'white'
      }}>
      <Tab.Screen name="Recent" component={RecentExpenseScreen} options={{
        title:"Recent Expenses",
        tabBarLabel:"Recent",
        tabBarIcon:({color,size})=><Ionicons name='hourglass-outline' size={size} color={color} />}}
        />
      <Tab.Screen name="AllExpenses" component={ExpenseHistoryScreen} options={{
          title:"All Expenses",
          tabBarLabel:"All Expenses",
        tabBarIcon:({color,size})=><Ionicons name='calendar-outline' size={size} color={color}  />}}
        />
    </Tab.Navigator>
    );
  }
  const Tab = createBottomTabNavigator();
  const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TrackerTabs" component={ExpenseTrackerTabs} options={{headerShown:false } }/>
        <Stack.Screen name="ExpenseContol" component={ExpenseControllerScreen}/>
      </Stack.Navigator>
   
    </NavigationContainer>
  );
}


