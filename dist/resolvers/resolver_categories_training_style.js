"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesTrainingStyleTesolvers = void 0;
const ms_categories_training_style_1 = require("../api/ms_categories_training_style");
exports.categoriesTrainingStyleTesolvers = {
    Query: {
        getAllCategoriesTrainingStyle: () => ms_categories_training_style_1.msCategoriesTrainingStyle.getAllCategoriesTrainingStyle(),
        getCategoriesTrainingStyleById: (_root, args) => ms_categories_training_style_1.msCategoriesTrainingStyle.getCategorieTrainingStyleById(args.id)
    },
};
