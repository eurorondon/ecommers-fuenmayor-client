/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProductListFuenmayor = /* GraphQL */ `
  query GetProductListFuenmayor($id: ID!) {
    getProductListFuenmayor(id: $id) {
      id
      nombre
      departamento
      unidad
      costo
      existencia
      precioMax
      precioMaxBs
      utilidad
      precioOferta
      precioOfertaBs
      utilidad2
      precioMayor
      precioMayorBs
      utilidad3
      precioMin
      precionMinBs
      util4
      link1
      link2
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProductListFuenmayors = /* GraphQL */ `
  query ListProductListFuenmayors(
    $filter: ModelProductListFuenmayorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductListFuenmayors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nombre
        departamento
        unidad
        costo
        existencia
        precioMax
        precioMaxBs
        utilidad
        precioOferta
        precioOfertaBs
        utilidad2
        precioMayor
        precioMayorBs
        utilidad3
        precioMin
        precionMinBs
        util4
        link1
        link2
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
