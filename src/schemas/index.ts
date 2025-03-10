import { categoriesMuscleGroupTypeDefs } from "./typeDefs_categories_muscle_group";
import { categoriesTrainingStyleTypeDefs } from "./typeDefs_categories_training_style";
import { mergeTypeDefs } from '@graphql-tools/merge';

export const typeDefs = mergeTypeDefs([categoriesTrainingStyleTypeDefs, categoriesMuscleGroupTypeDefs]);