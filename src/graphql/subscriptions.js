/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onCreateCategories = /* GraphQL */ `
  subscription OnCreateCategories(
    $filter: ModelSubscriptionCategoriesFilterInput
  ) {
    onCreateCategories(filter: $filter) {
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
export const onUpdateCategories = /* GraphQL */ `
  subscription OnUpdateCategories(
    $filter: ModelSubscriptionCategoriesFilterInput
  ) {
    onUpdateCategories(filter: $filter) {
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
export const onDeleteCategories = /* GraphQL */ `
  subscription OnDeleteCategories(
    $filter: ModelSubscriptionCategoriesFilterInput
  ) {
    onDeleteCategories(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
      idUserFilter
      user {
        id
        name
        email
        phoneNumber
        __typename
      }
      orderItems {
        name
        qty
        image
        price
        id
        __typename
      }
      shippingAddress {
        address
        city
        postalCode
        country
        __typename
      }
      paymentMethod
      paymentResult {
        id
        status
        updateTime
        emailAddress
        __typename
      }
      taxPrice
      shippingPrice
      totalPrice
      isPaid
      paidAt
      isDelivered
      deliveredAt
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
      idUserFilter
      user {
        id
        name
        email
        phoneNumber
        __typename
      }
      orderItems {
        name
        qty
        image
        price
        id
        __typename
      }
      shippingAddress {
        address
        city
        postalCode
        country
        __typename
      }
      paymentMethod
      paymentResult {
        id
        status
        updateTime
        emailAddress
        __typename
      }
      taxPrice
      shippingPrice
      totalPrice
      isPaid
      paidAt
      isDelivered
      deliveredAt
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
      idUserFilter
      user {
        id
        name
        email
        phoneNumber
        __typename
      }
      orderItems {
        name
        qty
        image
        price
        id
        __typename
      }
      shippingAddress {
        address
        city
        postalCode
        country
        __typename
      }
      paymentMethod
      paymentResult {
        id
        status
        updateTime
        emailAddress
        __typename
      }
      taxPrice
      shippingPrice
      totalPrice
      isPaid
      paidAt
      isDelivered
      deliveredAt
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
