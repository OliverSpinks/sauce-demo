import { Selector } from "testcafe";

class ordersPage{
    constructor(){
    this.productSorter = Selector ('select.product_sort_container')
    this.productOptionHigh = Selector ('option') .withText ('Price (high to low)')
    this.productOptionLow = Selector ('option') .withText ('Price (low to high)')
    this.sauceLabsOnesie = Selector ('div.inventory_item_name') .withText ('Sauce Labs Onesie')
    this.sauceLabsBackpack = Selector ('div.inventory_item_name') .withText ('Sauce Labs Backpack')
    this.addToCart = Selector ('button#add-to-cart-sauce-labs-backpack.btn.btn_primary.btn_small.btn_inventory')
    this.backToProducts = Selector ('button') .withText ('Back to products')
    this.sideMenu = Selector ('button#react-burger-menu-btn')
    this.allProducts = Selector ('a#inventory_sidebar_link.bm-item.menu-item')
    this.shoppingCart = Selector ('a.shopping_cart_link')

    }
}

export default new ordersPage();