/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      name
      photo {
        url
        publicId
        __typename
      }
      categories
      color
      description
      reviews {
        name
        rating
        comment
        user
        createdAt
        updatedAt
        __typename
      }
      rating
      numReviews
      price
      countInStock
      createdAt
      type
      updatedAt
      inOffer
      discountPercentage
      bestSellers
      id
      __typename
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      name
      photo {
        url
        publicId
        __typename
      }
      categories
      color
      description
      reviews {
        name
        rating
        comment
        user
        createdAt
        updatedAt
        __typename
      }
      rating
      numReviews
      price
      countInStock
      createdAt
      type
      updatedAt
      inOffer
      discountPercentage
      bestSellers
      id
      __typename
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      name
      photo {
        url
        publicId
        __typename
      }
      categories
      color
      description
      reviews {
        name
        rating
        comment
        user
        createdAt
        updatedAt
        __typename
      }
      rating
      numReviews
      price
      countInStock
      createdAt
      type
      updatedAt
      inOffer
      discountPercentage
      bestSellers
      id
      __typename
    }
  }
`;
export const createCategories = /* GraphQL */ `
  mutation CreateCategories(
    $input: CreateCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    createCategories(input: $input, condition: $condition) {
      id
      categoryName
      description
      photo {
        url
        publicId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCategories = /* GraphQL */ `
  mutation UpdateCategories(
    $input: UpdateCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    updateCategories(input: $input, condition: $condition) {
      id
      categoryName
      description
      photo {
        url
        publicId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCategories = /* GraphQL */ `
  mutation DeleteCategories(
    $input: DeleteCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    deleteCategories(input: $input, condition: $condition) {
      id
      categoryName
      description
      photo {
        url
        publicId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      fullName
      profilePicture
      email
      phoneNumber
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      fullName
      profilePicture
      email
      phoneNumber
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      fullName
      profilePicture
      email
      phoneNumber
      createdAt
      updatedAt
      __typename
    }
  }
`;
