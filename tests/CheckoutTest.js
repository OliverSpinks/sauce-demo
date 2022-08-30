import { ClientFunction } from 'testcafe';
import loginPage from "../pages/loginPage";
import ordersPage from "../pages/MyOrdersPage"
import checkoutpage from "../pages/CheckoutPage"
const URL = 'https://www.saucedemo.com/';
const getURL = ClientFunction(() => window.location.href);

fixture`Orders Fixture`
    .page(URL);

test('Place Orders Tests', async t => {
    await t
    .typeText(loginPage.userName,'standard_user')
    .typeText(loginPage.password,'secret_sauce')
    .click(loginPage.loginbutton)
    .expect(loginPage.homePageHeader.exists).ok()
    .click(ordersPage.productSorter)
    .click(ordersPage.productOptionHigh)
    .click(ordersPage.sauceLabsBackpack)
    await t
    .expect(getURL()).contains('inventory-item.html?id=4')
    .click(ordersPage.addToCart)
    .click(ordersPage.shoppingCart)
    await t 
    .expect(getURL()).contains('cart.html')
    .click(checkoutpage.checkoutButton)
    await t
    .expect(getURL()).contains('checkout-step-one.html')
    .typeText(checkoutpage.firstName, 'John')
    .typeText(checkoutpage.lastName, 'Doe')
    .typeText(checkoutpage.zipCode,'1234567')
    .click(checkoutpage.continueButton)
    await t
    .expect(getURL()).contains('checkout-step-two.html')
    .click(checkoutpage.finishButton)
    await t 
    .expect(checkoutpage.thankyouHeader.exists).ok()


});