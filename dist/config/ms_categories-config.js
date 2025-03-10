"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.msCategoriesConfig = exports.host_ms_categories = void 0;
const axios_1 = __importDefault(require("axios"));
exports.host_ms_categories = process.env.HOST_MS_CATEGORIES;
exports.msCategoriesConfig = axios_1.default.create({
    baseURL: exports.host_ms_categories
});
