export  function formatDate(Date){
return `${Date.getFullYear()}-${Date.getMonth()+1}-${Date.getDate()}`
}
export function dateMinusDays(date,days){
  return new Date(date.getFullYear(),date.getMonth(),date.getDate()-days);
}