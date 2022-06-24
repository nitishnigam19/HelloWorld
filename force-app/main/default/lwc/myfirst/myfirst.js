import { LightningElement } from 'lwc';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class Myfirst extends LightningElement {

    mytitle="nitish";

    handleClick()
        {
       
        this.showToast();
    }

    showToast()
    {
        const event= new ShowToastEvent({
        title:'show toast demo',
        message:'Want to display toast Example',
        variant:'error' ,   
    });
    this.dispatchEvent(event);
}
}

