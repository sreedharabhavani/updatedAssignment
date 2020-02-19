import Page from './page'
const config = require('../lib/config')
const fs = require('fs');
var jsonFile = fs.readFileSync('/Users/user/Desktop/wdio-testing-project/tests/testdata.json');
var userJSON_Data = JSON.parse(jsonFile);

class LoginPage extends Page {
    
    get lnkSignIn () { return $('*=Sign in') }
    get txtEmail () { return $('#email_create') }
    get btnCreateAnAccount () { return $("//form[@id='create-account_form']//span[1]") }
    
    /**
     * define or overwrite page methods
     */
    open () {
        super.open(config.baseUrl)
    }

    gotoSignIn() {
        lnkSignIn.waitForDisplayed()
        lnkSignIn.click()
    }

    /* reading from json file
     */
    
    readJson() {
    
    return userJSON_Data;
    }

    //SignUp for new user creation
    createUser(userData) {
        
        txtEmail.setValue(userJSON_Data)

    }
}

export default new LoginPage()