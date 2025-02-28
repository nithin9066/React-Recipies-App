import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { loadRecipe } from "../Redux/slicers/RecipeSlicer";
import CardDetails from "../components/CardDetails";

export default function RecipeDetails() {
    const { mealId } = useParams()
    const dispatch = useDispatch();
    const recipe = useSelector(state => state.recipe.selectedRecipe)
    console.log('recipe', recipe);
    
    useEffect(() => {
        dispatch(loadRecipe(mealId))
    }, [dispatch, mealId]) 
    return (
        <CardDetails data={recipe} />
    )
}
