import createSagaMiddleware from 'redux-saga';
import recipeReducer from './slicers/RecipeSlicer'
import categoryReducer from './slicers/categorySlicer'
import mySaga from '../middleware/mySaga';
import { configureStore } from '@reduxjs/toolkit';

const saga = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        recipe: recipeReducer,
        category: categoryReducer
    },
    middleware: () => [saga]
})
saga.run(mySaga)