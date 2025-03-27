import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Card({ data, type }) {
    const isCategory = type === "category";
    const title = isCategory ? data.strCategory : data.strMeal
    const toUrl = isCategory ? `/recipies/${data.strCategory}` : `/recipie/${data.idMeal}`;
    const imageUrl = isCategory ? data.strCategoryThumb : data.strMealThumb
    return (
        <div className="p-4">
            <div className={`${isCategory ? 'flex-col justify-center' : 'flex-row'} flex items-center`}>
                <div className="flex-shrink-0">
                    <Link to={toUrl} className="relative block">
                        <LazyLoadImage alt="profil" loading="lazy" src={imageUrl} className={`mx-auto object-cover rounded-${isCategory ? 'full' : 'md'} h-20 w-20 `} />
                    </Link>
                </div>
                <div className="mt-2 text-center flex flex-col w-full">
                    <p className="text-lg font-medium text-gray-600 dark:text-white">
                        {title}
                    </p>
                </div>
            </div>
        </div>

    )
}