
import { LightningElement, track, wire } from 'lwc';

import getData from '@salesforce/apex/pinCodeCallout.getCalloutResponseContents';

export default class HelloWorld extends LightningElement {
 @track greeting;

   city;
   state;

  changeHandler(event) {
    console.log(event);
    this.greeting = event.target.value;
  }

  @wire(getData, {pinCodes:'$greeting'})list;


}

