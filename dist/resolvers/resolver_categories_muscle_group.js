"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesMuscleGroupResolvers = void 0;
const ms_categories_muscle_group_1 = require("../api/ms_categories_muscle_group");
exports.categoriesMuscleGroupResolvers = {
    Query: {
        getAllCategoriesMuscleGroup: () => ms_categories_muscle_group_1.msCategoriesMuscleGroup.getAllCategoriesMuscleGroup(),
        getCategoriesMuscleGroupById: (_root, args) => ms_categories_muscle_group_1.msCategoriesMuscleGroup.getCategorieMuscleGroupById(args.id)
    },
};
