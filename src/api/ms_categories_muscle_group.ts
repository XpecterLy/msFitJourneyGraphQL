import { isAxiosError } from "axios";
import { msCategoriesConfig } from "../config/ms_categories-config"
import type { CategoriesMuscleGroup } from "../types/categories_training_muscle_group";

export class msCategoriesMuscleGroup {
    static getAllCategoriesMuscleGroup =  async () => {
        try {
            const { data } = await msCategoriesConfig.get<CategoriesMuscleGroup[]>('/categories_muscle_group/all');
            return data;
        } catch (error) {
            if(isAxiosError(error))
                console.log(error.response);
            console.log(error);
        }
    }
    
    static getCategorieMuscleGroupById =  async ( id: string ) => {
        try {
            const { data } = await msCategoriesConfig.get<CategoriesMuscleGroup>(`/categories_muscle_group?id=${id}`);
            return data;
        } catch (error) {
            if(isAxiosError(error))
                console.log(error.response);
            console.log(error);
        }
    }
} 