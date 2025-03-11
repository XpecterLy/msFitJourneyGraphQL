export const categoriesTrainingStyleTypeDefs = `#graphql
    type CategoriesTrainingStyle {
        id: String
        name: String
        details: String
    }

    type Query {
        getAllCategoriesTrainingStyle: [CategoriesTrainingStyle]
        getCategoriesTrainingStyleById(id: String!): CategoriesTrainingStyle
    }
`;