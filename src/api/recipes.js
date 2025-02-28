import axios from "axios"

const BASE_URL = 'www.themealdb.com/api/json/v1/1/';
axios.defaults.baseURL = BASE_URL;
export const fetchCategories = async () => {
    return await axios.get('www.themealdb.com/api/json/v1/1/categories.php')
}