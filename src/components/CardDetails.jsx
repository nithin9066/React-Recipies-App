import { useEffect, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function CardDetails({ data }) {

    const [ingradients, setIngradients] = useState([]);

    useEffect(() => {
        let ingradientsData = [];
        for (let i = 1; i <= 20; i++) {
            if (data[`strIngredient${i}`]) {
                ingradientsData.push({
                    ingradientName: data[`strIngredient${i}`],
                    measure: data[`strMeasure${i}`]
                })
            }
        }
        setIngradients(ingradientsData)
    }, [data])
    return (

        <>
            <LazyLoadImage alt="blog photo" loading="lazy" src={data.strMealThumb} className="object-cover w-full" />
            <div className="w-full p-4 bg-white dark:bg-gray-800">
                <p className="font-medium text-indigo-500 text-md">
                    {data.strCategory}
                </p>
                <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                    {data.strMeal}
                </p>
                <h3 className="mb-2 mt-5 text-xl font-bold text-gray-800 dark:text-white uppercase">Ingradients</h3>
                {
                    ingradients.map((ingradient, inx) => {
                        return (
                            <div key={inx} className="mt-4">
                                <div className="flex flex-col justify-between ml-4 text-sm">
                                    <p className="text-gray-800 dark:text-white flex justify-between">
                                        <span>{ingradient.ingradientName}</span> <span>{ingradient.measure}</span>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>

    )
}