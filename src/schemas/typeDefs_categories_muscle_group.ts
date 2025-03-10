export const categoriesMuscleGroupTypeDefs = `#graphql
    type CategoriesMuscleGroup {
        id: String
        name: String
        details: String
    }

    type Query {
        getAllCategoriesMuscleGroup: [CategoriesMuscleGroup]
    }
`;