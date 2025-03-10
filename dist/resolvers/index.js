"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const resolver_categories_muscle_group_1 = require("./resolver_categories_muscle_group");
const resolver_categories_training_style_1 = require("./resolver_categories_training_style");
const merge_1 = require("@graphql-tools/merge");
exports.resolvers = (0, merge_1.mergeResolvers)([resolver_categories_training_style_1.categoriesTrainingStyleTesolvers, resolver_categories_muscle_group_1.categoriesMuscleGroupResolvers]);
