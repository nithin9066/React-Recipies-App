import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCategories } from "../Redux/slicers/categorySlicer";
import Card from "../components/Card";

function Categories() {
  const { categories, isLoading } = useSelector(state => state.category)

  const dipact = useDispatch();

  useEffect(() => {
    dipact(getCategories())
  }, [dipact])
  return (
    <div className="p-8 bg-white rounded-lg shadow dark:bg-gray-800">
      <p className="text-3xl font-bold text-center text-gray-800 dark:text-white">
        Categories
      </p>
      <p className="mb-12 text-xl font-normal text-center text-gray-500 dark:text-gray-300">
        Discover Delicious Categories
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {
          isLoading ? <h4>Loading...</h4> : categories.map(cat => <Card type={'category'} key={cat.idCategory} data={cat}></Card>)
        }
      </div>
    </div>
  )
}

export default Categories
