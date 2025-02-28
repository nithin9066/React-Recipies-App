import { call, put, takeEvery } from "redux-saga/effects";
import { fetchCategories, setLoading } from "../Redux/slicers/categorySlicer";
import axios from "axios";
import { fetchRecipe, fetchRecipies } from "../Redux/slicers/RecipeSlicer";

function* categories() {
    yield put(setLoading(true))
    const cats = yield call(() => axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')); 
    yield put(fetchCategories(cats.data.categories));
    yield put(setLoading(false))  
}

function* getRecipes(action) {    
    const recipies = yield call(() => axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${action.payload}`))    
    yield put(fetchRecipies(recipies.data.meals))
}

function* loadRecipe(action) {
    const response = yield call(() => axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${action.payload}`))    
    yield put(fetchRecipe(response.data.meals?.[0]))
}

function* mySaga() {
    yield takeEvery('category/getCategories', categories);
    yield takeEvery('recipe/getRecipies', getRecipes);
    yield takeEvery('recipe/loadRecipe', loadRecipe);


}

export default mySaga