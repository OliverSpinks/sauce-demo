import { ClientFunction } from 'testcafe';
import loginPage from "../pages/loginPage";
const URL = 'https://www.saucedemo.com/';
const getURL = ClientFunction(() => window.location.href);


fixture`Registration Fixture`
    .page(URL);




test('Assert home page', async t => {
    await t
    .expect(getURL()).eql(URL)
});

test ('Login Test',async t =>{
    await t
    .typeText(loginPage.userName,'locked_out_user')
    .typeText(loginPage.password,'secret_sauce')
    .click(loginPage.loginbutton)
    .expect(loginPage.lockedOutMessage.exists).ok()
    .selectText(loginPage.userName)
    .pressKey('delete')
    .typeText(loginPage.userName,'standard_user')
    .click(loginPage.loginbutton)
    .expect(loginPage.homePageHeader.exists).ok()
});
