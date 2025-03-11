import { isAxiosError } from "axios";
import { msCategoriesConfig } from "../config/ms_categories-config"
import type { CategoriesTrainingStyle } from "../types/categories_training_style_type";

export class msCategoriesTrainingStyle {
    static getAllCategoriesTrainingStyle =  async () => {
        try {
            const { data } = await msCategoriesConfig.get<CategoriesTrainingStyle[]>('/categories_Training_style/all');
            return data;
        } catch (error) {
            if(isAxiosError(error))
                console.log(error.response);
            console.log(error);
        }
    }

    static getCategorieTrainingStyleById =  async ( id: string ) => {
        try {
            const { data } = await msCategoriesConfig.get<CategoriesTrainingStyle>(`/categories_Training_style?id=${id}`);
            return data;
        } catch (error) {
            if(isAxiosError(error))
                console.log(error.response);
            console.log(error);
        }
    }
} 