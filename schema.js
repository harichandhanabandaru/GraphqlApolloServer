const { ApolloServer, gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hello: String
    noOfAnimals: Int
    price: Float
    isCool: Boolean
    apple: [String]
    products(filter: ProductsFilterInput): [Product!]!
    product(id: ID!): Product!
    categories: [Category]!
    category(id: ID!): Category
    reviews: [Review!]!
  }

  type Mutation {
    addCategory(input: AddCategoryInput!): Category!
    addProduct(input: AddProductInput!): Product!
    addReview(input: AddReviewInput!): Review!
    deleteCategory(input: DeleteCategoryInput!): Boolean!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    image: String!
    categoryId: String!
    category: Category
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }
  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }

  input AddCategoryInput {
    name: String!
  }

  input AddProductInput {
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    categoryId: String!
  }

  input AddReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int
    productId: String!
  }
  input DeleteCategoryInput{
    id:ID!
  }
`;