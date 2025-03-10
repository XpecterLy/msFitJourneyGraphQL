import { categoriesMuscleGroupResolvers } from "./resolver_categories_muscle_group";
import { categoriesTrainingStyleTesolvers } from "./resolver_categories_training_style";
import { mergeResolvers } from '@graphql-tools/merge';

export const resolvers = mergeResolvers([categoriesTrainingStyleTesolvers, categoriesMuscleGroupResolvers]);
