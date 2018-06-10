/**
 * 
*/

function Cart(){
    this.cart =[];
    this.onChange = onChange
}
function onChange(){
    console.group
    console.table(this.cart);
    console.groupEnd
}
Cart.prototype.addCartItem =function(cartItem){
    if(typeof cartItem !== "object") return;
    this.cart.push(cartItem);
     onChange();
}
Cart.prototype.removeCartItem =function(cartItemIndex){
    this.cart.map((value, index)=> !index);
    onChange();
    
}

Cart.prototype.increaseCartItemQuantity =function(cartItemIndex){
this.cart[cartItemIndex].quantity + 1;
onChange();
}

Cart.prototype.decreseCartItemQuantity =function(cartItemIndex){
    this.cart[cartItemIndex].quantity - 1;
    onChange();
}


let cart = new Cart();
cart.addCartItem({
    name: "vegetable",
    quantity: 1,
    price:300
})

