import React from "react";
import { CategoryCard } from "../components/category/CategoryCard";
import { useCategoriesSummary, useCategoriesList } from "../store";
import { useNavigate } from "react-router";


export function Dashboard (){
        const { itemsCount, amountsByUnit:byUnitData } = useCategoriesSummary()
        const categories = useCategoriesList()
        const navigate = useNavigate()

        const handleClickCategory = navigate
        console.log('categories',categories)
        console.log('itemsCount',itemsCount, 'amountsByUnit', byUnitData)
    return  (  
        <div className="flex flex-col h-full justify-between text-neutral-600 text-left">
            <span className="text-2xl pl-2">
                Resumen
                <br/>
                <span className="ml-2 text-sm px-4">El resumen es una suma de los valores en cada categoria</span>
            </span>
            
            <ul className="ml-3">
                <li key="prd"><span className="">Productos:<span className="font-bold">{ itemsCount }</span></span></li>
                {byUnitData.map(d=><li key={d.unit}>{d.unit}:<span className="font-bold">{d.value}</span><span className="text-xs">{d.unit}</span></li>)}
            </ul>
            <div className="flex basis-1/2 flex-wrap justify-around items-center bg-white min-h-[65%]">
                {categories.map(c=>(
                    <CategoryCard 
                        key={c.name} 
                        title={c.display} 
                        itemsCount={c.items.length}
                        byUnitData={c.amountsByUnit}
                        onClick={()=>handleClickCategory(c.name)}
                        className="bg-red-100 h-[45%] w-[45%]"
                    />
                ))}
            </div>
        </div>
    );
        
    }
