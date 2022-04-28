const { products, categories, reviews } = require("../db");

exports.Query = {
  hello: () => {
    return null;
  },
  noOfAnimals: () => {
    return 45;
  },
  price: () => {
    return 15.6;
  },
  isCool: () => {
    return true;
  },
  apple: () => {
    return ["Hello", "Apple", "Ball", "pen"];
  },
  products: (parent,{filter},{products}) => {
      let filterProducts = products

      if(filter){ 
        const {onSale,avgRating} = filter
      if(onSale){
          if(filter.onSale === true)
          {
              filterProducts = filterProducts.filter(product =>product.onSale)
          }
      
      if([1,2,3,4,5].includes(avgRating)){
        filterProducts = filterProducts.filter(product =>{
          let sumRating =0;
          reviews.forEach(rewview =>{
            if(review.productId===product.id){sumRating +=review.rating;
              numberOfReviews++;
            }
          });

          const avgProductRating = sumRating/numberOfReviews

          return avgProductRating>=avgRating
        })
      }
    }
    }
    return filterProducts;
  },
  product: (parent, args, context) => {
    const productId = args.id;
    return products.find((product) => product.id === productId);
  },
  categories: () => {
    return categories;
  },
  category: (parent, args, context) => {
    const { id } = args;
    const categorie = categories.find((categorie) => categorie.id === id);
    if (!categorie) return null;
    return categorie;
  },
  reviews: ()=> {return reviews},
};
