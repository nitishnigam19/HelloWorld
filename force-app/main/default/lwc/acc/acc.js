import { LightningElement,track } from 'lwc';
import getAccounts from '@salesforce/apex/getRecordDataController.getAccounts';

const columns=[

    {label:'recordId',fieldName:'Id'},
    {label:'recordName',fieldName:'Name'},
    {label:'Account Number',fieldName:'AccountNumber'},
]


export default class CallApex extends LightningElement {
 @track err='';  
@track columns=columns;
@track data=[];

connectedCallback() {

    getAccounts()
    .then(result=>{

        this.data=result;
    })
     .catch(error=>{
                 console.log(error);
                 this.err = error;
     })
}
    
}