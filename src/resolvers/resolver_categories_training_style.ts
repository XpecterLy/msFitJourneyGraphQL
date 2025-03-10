import { msCategoriesTrainingStyle } from "../api/ms_categories_training_style";

export const categoriesTrainingStyleTesolvers = {
    Query: {
      getAllCategoriesTrainingStyle: () => msCategoriesTrainingStyle.getAllCategoriesTrainingStyle(),
    },
};