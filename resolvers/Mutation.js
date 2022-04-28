const {v4:uuid} =require("uuid")

exports.Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    const { name } = input;
    const newCategory = {
      id: uuid(),
      name,
    };

    categories.push(newCategory);

    return newCategory;
  },

  addReview: (parent, { input }, { reviews }) => {
    const { date, title, comment, rating, productId } = input;

    const newReview = {
      id: uuid(),
      date,
      title,
      comment,
      rating,
      productId,
    };

    reviews.push(newReview);
    return newReview;
  },

  addProduct: (parent, { input }, { products }) => {
    const { name, description, quantity, image, price, onSale, categoryId } =
      input;

    const newProduct = {
      id: uuid(),
      name,
      description,
      image,
      price,
      onSale,
      categoryId,
    };

    products.push(newProduct);

    return newProduct;
  },
  deleteCategory:(parent, {input}, { categories,products})=>{

    const {id} = input;

    categories = categories.filter((category) => category.id !== id);
   products = products.map(product =>{
       if(product.categoryId === id) {
           return
       {
           product
           categoryId:null
       }
    }
       else{
                return product
       }
   })

   console.log(categories)
   console.log(products)
   return true
  }
};