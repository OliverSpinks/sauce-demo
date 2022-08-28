import { ClientFunction } from 'testcafe';
import loginPage from "../pages/loginPage";
import ordersPage from "../pages/MyOrdersPage"
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
    .click(ordersPage.sideMenu)
    .click(ordersPage.allProducts)
    await t
    .expect(getURL()).contains('inventory.html')
    .click(ordersPage.productSorter)
    .click(ordersPage.productOptionLow)
    .click(ordersPage.sauceLabsOnesie)
    await t 
    .expect(getURL()).contains('inventory-item.html?id=2')
    .click(ordersPage.shoppingCart)
    await t 
    .expect(getURL()).contains('cart.html')
});