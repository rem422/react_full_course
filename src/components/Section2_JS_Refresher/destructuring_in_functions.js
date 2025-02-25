let storedOrder = (order) => {
    localStorage.setItem('order', order.id);
    localStorage.setItem('currency', order.currency);
}

/*
Instead of accessing the order properties via the "dot notation" inside the storeOrder function body, you could use destructuring like this:
 */

let storedOrder = ({id, currency}) => { // destructured parameters
    localStorage.setItem('id', id);
    localStorage.setItem('currency', currency);
}

/*
The destructuring syntax is the same as taught in the previous lecture - just without creating a constant or variable manually.

Instead, id and currency are "pulled out" of the incoming object (i.e., the object passed as an argument to storeOrder).

It's very important to understand, that storeOrder still only takes one parameter in this example! It does not accept two parameters. Instead, it's one single parameter - an object which then just is destructured internally.

The function would still be called like this:
 */

storeOrder({id: 5, currency: 'USD', amount: 15.99}); // one argument / value!