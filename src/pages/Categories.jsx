import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCategories } from "../Redux/slicers/categorySlicer";
import Card from "../components/Card";

function Categories() {
  const { categories, isLoading, error } = useSelector(state => state.category)
  const [filteredCats, setFilteredCats] = useState([]);
  const dipact = useDispatch();

  useEffect(() => {
    dipact(getCategories())
  }, [dipact])

  useEffect(() => {
    setFilteredCats(categories)
  }, [categories])

  const filterCats = (e) => {
    const query = e.target.value.toLowerCase().trim();
    setFilteredCats(() => {
      return categories.filter(cat => cat.strCategory.toLowerCase().includes(query))
    })
  }
  return (
    <div className="p-8 bg-white rounded-lg shadow dark:bg-gray-800">
      <p className="text-3xl font-bold text-center text-gray-800 dark:text-white">
        Categories
      </p>
      <p className="mb-10 text-xl font-normal text-center text-gray-500 dark:text-gray-300">
        Discover Delicious Categories
      </p>
      <div className="text-center">
        <input onChange={filterCats} className="border px-4 py-2 mb-4 rounded-md w-full md:w-auto" type="search" name="search" placeholder="Search..." />
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {
          error ? error : isLoading ? <div className="text-center content-center h-[70dvh] col-span-full"><h4>Loading...</h4></div> : filteredCats.map(cat => <Card type={'category'} key={cat.idCategory} data={cat}></Card>)
        }
      </div>
    </div>
  )
}

export default Categories
