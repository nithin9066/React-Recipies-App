import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/store.js'
import Categories from './pages/Categories.jsx'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Recipes from './pages/Recipes.jsx'
import RecipeDetails from './pages/RecipeDetails.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route index element={<Categories />} />
        <Route path='recipies/:catName' element={<Recipes />} />
        <Route path='recipie/:mealId' element={<RecipeDetails />} />

      </Routes>
    </HashRouter>
  </Provider>,
)
