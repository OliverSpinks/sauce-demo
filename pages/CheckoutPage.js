import { Selector } from "testcafe";

class checkOutPage{
    constructor(){

    this.checkoutButton = Selector('button#checkout.btn.btn_action.btn_medium.checkout_button')
    this.firstName = Selector('input#first-name.input_error.form_input')
    this.lastName = Selector('input#last-name.input_error.form_input')
    this.zipCode = Selector('input#postal-code.input_error.form_input')
    this.finishButton = Selector('button#finish.btn.btn_action.btn_medium.cart_button')
    this.continueButton = Selector('input#continue.submit-button.btn.btn_primary.cart_button.btn_action')
    this.thankyouHeader = Selector('h2.complete-header')


    }
}

export default new checkOutPage();