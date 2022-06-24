
import { LightningElement,track,wire } from 'lwc';
import getData from '@salesforce/apex/pinCodeCallout.getCalloutResponseContents';
export default class Modal extends LightningElement {
    //Boolean tracked variable to indicate if modal is open or not default value is false as modal is closed when page is loaded 
    @track isModalOpen = false;
    @track pin = 0;
    @track state = '';
    @track city = '';

    changeHandler(event){
        //alert('i am here');
       this.pin= event.target.value;
       //alert(pin);
        //this.state = contacts[0];
        //this.city = contacts[1];

    }
    openModal() {
        // to open modal set isModalOpen tarck value as true
        this.isModalOpen = true;
    }
    closeModal() {
        // to close modal set isModalOpen tarck value as false
        this.isModalOpen = false;
    }
    submitDetails() {
        // to close modal set isModalOpen tarck value as false
        //Add your code to call apex method or do some processing
        this.isModalOpen = false;
    }
    @wire(getData, {pinCodes:'$pin'}) 
    contacts(data,error){
       
        if(data){
            this.state = data[0];
            this.city = data[1];
        }
       
    }
   
}
