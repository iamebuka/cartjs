# cartjs
A simple javascript cart library


This is a light weight javascript library that can be used for single page application
it enables you create carts, add, remove items from carts and clear apps.


# Events

* ***OnCartChange***


This event is fired whenever an item is removed, added or any action is taken on your cart

```javascript
var cart = document.querySelector("#cart");
    cart.addEventListener('onCartChange',function(e){
    console.log("working: "+ JSON.stringify(e.detail))
    })
```
 
 
 it returns an array of object, which represent the current objects contained in the cart.
 
 
 # How To
 
 To use
 
 ```javascript
 let cart = new Cart({
        persistCart: false,
        elem:elem,
        });
        
 ```
 
 it accepts the following options
 
 * ***persistCart:***
 
 
 
 This option is True/False for if you want to save cart to browser
 
 
 * ***elem:***
 
 
 
 This option accepts an Html element which represents you html cart element 
 
 
 
 
 # What Next
 
 - Checkout option
 - Minor bug fixes
