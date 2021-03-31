describe("Cart", function () {
    const Cart = require('C:/Users/asus/Downloads/web_SAD/src/models/cart.js')
    let cart
    let id = 999

    beforeEach(() => {
        cart = new Cart({})
        // console.log(cart)
        cart.add({
            salePrice: 100000,
            price: 80000
        }, id)
    })

    it("should them an item in the cart", () => {
        let currentItemAmount = cart.totalQty
        cart.add({
            salePrice: 100000,
            price: 80000
        }, id+1)
        expect(cart.totalQty).toEqual(currentItemAmount + 1)
    });


    it("should recognize the item", () => {
        let item = cart.items[id]
        expect(item).not.toBeFalsy()
    });

    it("should be possible to delete", () => {

        let currentItemAmount = cart.totalQty
        cart.remove({
            salePrice: 100000,
            price: 80000
        }, id)
        expect(cart.totalQty).toEqual(currentItemAmount - 1)
    })


    
    it("should generate a valid array", () => {
        expect(cart.generateArray().length)
            .toEqual(Object.keys(cart.items).length)
    })

});
