import axios from "axios";
const url='https://react-native-course-7c2ca-default-rtdb.firebaseio.com';
export async function storeExpece(expenceData){
  const response=await axios.post(url+'/expences.json',expenceData)
  return response.data.name;
}
export async function fetchExpences(){
  const fetchedData=await axios.get(url+'/expences.json');
  let expences=[];
  for(const key in fetchedData.data){
    const expenceObj={
      id:key,
      amount:fetchedData.data[key].amount,
      date:new Date(fetchedData.data[key].date),
      description:fetchedData.data[key].description,
    }
    expences.push(expenceObj);
  }
  return expences;
}
export function updatedExpense(id,expenceData){
 return axios.put(url+`/expences/${id}.json`,expenceData);
}
export function deleteExpense(id){
  return axios.delete(url+`/expences/${id}.json`);
 }