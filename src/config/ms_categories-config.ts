import axios from 'axios';

export const host_ms_categories = process.env.HOST_MS_CATEGORIES;

export const msCategoriesConfig = axios.create({
    baseURL: host_ms_categories
});