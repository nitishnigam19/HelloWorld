import { LightningElement } from 'lwc';

export default class Arrowfuntion extends LightningElement {

myTitle='Salesforce';

handleClick()
{
  let callbackfuntion = myfunction(10 , 2);
  window.alert( "call my funtion by my arrow function" + callbackfuntion);
}

 myfunction=(dividend,divisor)=>{
  return(dividend/divisor);
 {


 }
 }
}