// Object property shorthand

const name = 'Jeff';
const userAge = 38;

const user = {
    name,
    age: userAge,
    location: 'Long Beach'
};

console.log(user);

// Object desctructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
    //rating: 4.2
};

// const label = product.label;
// const stock = product.stock;

// this creates variables label,price,stock,salePrice which we can use later
// Don't need to pull all values (as below), can just pull the ones you need to extract/destructure
//const {label, price, stock, salePrice, rating} = product;

// I can also rename the variables, changing 'label' property to 'productLabel' variable instead of a 'label' variable
//const {label:productLabel, price, stock, salePrice, rating} = product;

// I can also setup defaults. E.g. 'rating' does not exit, so it will take my default below, if rating did exist, it would take that instead of default
const {label:productLabel, price, stock, salePrice, rating = 5} = product;

//console.log(label);
console.log(productLabel);
console.log(price);
console.log(stock);
console.log(salePrice);
console.log(rating);    // there is no 'rating' variable in the object, so will get 'undefined' with this

// Destructure in the function
// const transaction = (type, myProduct) => {
//     const {label} = myProduct;
// };

// Can destructure right in the function's argument list
const transaction = (type, {label, stock}) => {
    console.log(type, label, stock);
};

transaction('order', product);