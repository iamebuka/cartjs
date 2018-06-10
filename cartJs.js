/**
 * 
*/

function Cart(config){
    if (typeof config != "object") throw "cartItem parameter of type object required"
      this.cart =[];
      this.config = Object.assign({},config,{persistCart: false});
      this.onChange = function(){
         this.config.elem.dispatchEvent(new CustomEvent('onCartChange', { bubbles: true, detail: JSON.stringify({cart: this.cart, 
                                                                                                            total: this.total
                                                                                                      })}));
        };
      
      
    }
         
  Cart.prototype.addCartItem =function(cartItem){
      if(typeof cartItem !== "object") throw "cartItem of type Object required";
       
      cartItem = Object.assign({},cartItem,{subtotal: function() {
         return cartItem.price * cartItem.quantity
       }()});
    
      this.cart.push(cartItem);
      this.onChange();
      
  }
  
  Cart.prototype.removeCartItem =function(cartItemIndex){
      this.cart.splice(cartItemIndex,1);
      this.onChange();
      
  }
  
  Cart.prototype.increaseCartItemQuantity =function(cartItemIndex){
    this.cart[cartItemIndex].quantity += 1;
    this.cart[cartItemIndex].subtotal = this.cart[cartItemIndex].price * this.cart[cartItemIndex].quantity; 
    this.onChange();
  }
  
  Cart.prototype.decreseCartItemQuantity =function(cartItemIndex){
      this.cart[cartItemIndex].quantity -= 1;
      this.onChange();
  }
  
  Cart.prototype.total = function(){
    let items = this.cart;
    let total = 0;
    items.forEach(function(item, index){
      total += item.price * item.quantity;
    })
    return total;
  }
  
  Cart.prototype.clear =function(){
    this.cart = [];
    this.onChange();
  }
  
  
  