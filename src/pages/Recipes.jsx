import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getRecipies } from "../Redux/slicers/RecipeSlicer";
import Card from "../components/Card";

export default function Recipes() {
  const { catName } = useParams();
  const dispatch = useDispatch();
  const { recipes, isLoading } = useSelector(state => state.recipe)
console.log('recipies', recipes);

  useEffect(() => {
    dispatch(getRecipies(catName))
  }, [catName, dispatch])

  return (
    <div className="p-8 bg-white rounded-lg shadow dark:bg-gray-800">
      <p className="text-3xl font-bold text-center text-gray-800 dark:text-white">
        Recepies
      </p>
      <p className="mb-12 text-xl font-normal text-center text-gray-500 dark:text-gray-300">
        Discover Delicious Recepies
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {
          isLoading ? <h4>Loading...</h4> : recipes.map(recipie => <Card key={recipie.idMeal} data={recipie}></Card>)
        }
      </div>
    </div>
  )
}
