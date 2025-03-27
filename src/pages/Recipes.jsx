import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getRecipies } from "../Redux/slicers/RecipeSlicer";
import Card from "../components/Card";

export default function Recipes() {
  const { catName } = useParams();
  const dispatch = useDispatch();
  const { recipes, isLoading } = useSelector(state => state.recipe)
  const [filterData, setFilteredData] = useState([])
  useEffect(() => {
    dispatch(getRecipies(catName))
  }, [catName, dispatch])

  useEffect(() => {
    setFilteredData(recipes)
  }, [recipes])
  
  const filterRecipes = (e) => {
    const query = e.target.value.toLowerCase().trim();
    setFilteredData(() => {
      return recipes.filter(recipe => recipe.strMeal.toLowerCase().includes(query))
    })
  }

  return (
    <div className="p-8 bg-white rounded-lg shadow dark:bg-gray-800">
      <p className="text-3xl font-bold text-center text-gray-800 dark:text-white">
        Recepies
      </p>
      <p className="mb-10 text-xl font-normal text-center text-gray-500 dark:text-gray-300">
        Discover Delicious Recepies
      </p>
      <div className="text-center">
        <input onChange={filterRecipes} className="border px-4 py-2 mb-4 rounded-md w-full md:w-auto" type="search" name="search" placeholder="Search..." />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-6 bg-white dark:bg-gray-800">
        {
          isLoading ? <div className="text-center content-center h-[70dvh] col-span-full"><h4 className="text-gray-500 dark:text-gray-300">Loading...</h4></div> : filterData.map(recipie => <Card key={recipie.idMeal} data={recipie}></Card>)
        }
      </div>
    </div>
  )
}
