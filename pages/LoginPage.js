import { Selector } from "testcafe";

class loginPage{
    constructor(){
        this.userName = Selector ("input#user-name.input_error.form_input")
        this.password = Selector ("input#password.input_error.form_input")
        this.loginbutton = Selector ('input#login-button.submit-button.btn_action')
        this.lockedOutPassword = Selector ('#lockedOutPassword')
        this.homePageHeader = Selector ("div.app_logo")
        this.lockedOutMessage = Selector ('h3') .withText('Epic sadface: Sorry, this user has been locked out.')
    }
}

export default new loginPage();