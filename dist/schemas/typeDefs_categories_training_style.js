"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesTrainingStyleTypeDefs = void 0;
exports.categoriesTrainingStyleTypeDefs = `#graphql
    type CategoriesTrainingStyle {
        id: String
        name: String
        details: String
    }

    type Query {
        getAllCategoriesTrainingStyle: [CategoriesTrainingStyle]
    }
`;
