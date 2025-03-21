import { msCategoriesMuscleGroup } from "../api/ms_categories_muscle_group";

export const categoriesMuscleGroupResolvers = {
    Query: {
      getAllCategoriesMuscleGroup: () => msCategoriesMuscleGroup.getAllCategoriesMuscleGroup(),
      getCategoriesMuscleGroupById: ( _root: unknown, args: { id: string } ) => msCategoriesMuscleGroup.getCategorieMuscleGroupById( args.id )
    },
};