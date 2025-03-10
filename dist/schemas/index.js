"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const typeDefs_categories_muscle_group_1 = require("./typeDefs_categories_muscle_group");
const typeDefs_categories_training_style_1 = require("./typeDefs_categories_training_style");
const merge_1 = require("@graphql-tools/merge");
exports.typeDefs = (0, merge_1.mergeTypeDefs)([typeDefs_categories_training_style_1.categoriesTrainingStyleTypeDefs, typeDefs_categories_muscle_group_1.categoriesMuscleGroupTypeDefs]);
