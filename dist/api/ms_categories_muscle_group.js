"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.msCategoriesMuscleGroup = void 0;
const axios_1 = require("axios");
const ms_categories_config_1 = require("../config/ms_categories-config");
class msCategoriesMuscleGroup {
}
exports.msCategoriesMuscleGroup = msCategoriesMuscleGroup;
_a = msCategoriesMuscleGroup;
msCategoriesMuscleGroup.getAllCategoriesMuscleGroup = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield ms_categories_config_1.msCategoriesConfig.get('/categories_muscle_group/all');
        return data;
    }
    catch (error) {
        if ((0, axios_1.isAxiosError)(error))
            console.log(error.response);
        console.log(error);
    }
});
msCategoriesMuscleGroup.getCategorieMuscleGroupById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield ms_categories_config_1.msCategoriesConfig.get(`/categories_muscle_group?id=${id}`);
        return data;
    }
    catch (error) {
        if ((0, axios_1.isAxiosError)(error))
            console.log(error.response);
        console.log(error);
    }
});
