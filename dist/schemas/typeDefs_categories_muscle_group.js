"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesMuscleGroupTypeDefs = void 0;
exports.categoriesMuscleGroupTypeDefs = `#graphql
    type CategoriesMuscleGroup {
        id: String
        name: String
        details: String
    }

    type Query {
        getAllCategoriesMuscleGroup: [CategoriesMuscleGroup]
    }
`;
