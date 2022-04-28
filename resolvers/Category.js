// const {  products } = require("../db");

exports.Category = {
  products: ({ id:categoryId }, 
    {filter}, context) => {
    const products = context.products;
    // const categoryId = parent.id;
    const categoryProducts = products.filter((product) => product.categoryId === categoryId);
     let filterProducts = categoryProducts;
     if (filter) {
       if (filter.onSale === true) {
         filterProducts = filterProducts.filter((product) => product.onSale);
       }
     }
     return filterProducts;
  },
};
