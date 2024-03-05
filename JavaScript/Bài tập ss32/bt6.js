const products = [
    {id:1, name:'Iphone 12', price: 20000000},
    {id:2, name:'Iphone 11', price: 10000000},
    {id:3, name:'Iphone 13', price: 50000000},
];
function sortProducts(products) {
   products.sort((a, b) => a.price - b.price);
   return products;
}
let sortedProducts = sortProducts(products);
console.log("Sản phẩm đã được sắp xếp:");
console.log(products);