/**
 * 
 * @param {title:string, itemsCount:number, byUnitData:[{unit:string, value:number}]}  
 * @returns 
 */
export function CategoryCard({className, title="", itemsCount= 0, byUnitData=[{ unit:'kg', value:4.85 }, { unit:'lt', value:9 }], onClick}){
    return (
<div className={`${className} grid grid-cols-[30%_1fr] grid-rows-[16%_1fr_24%] rounded-xl`}>
    <span className="row-1 col-span-2 bg-red-900 text-white">{title}</span>
    <div className="col-1 row-2 row-span-2 bg-green-900 text-white">{title}</div>
    <div className="col-2 row-2 bg-orange-600">
        <ul className="text-left ml-2">
            <li key="prd"><span>Productos: <span className="font-bold">{itemsCount}</span></span></li>
            {byUnitData.map((d)=><li key={d.unit}>{d.unit}:<span className="font-bold">{d.value}</span></li>)}
        </ul>
    </div>
    <div className="col-2 row-3 bg-sky-200 flex flex-row-reverse p-1">
        <button className="min-w-1/3 min-w-full bg-sky-600 " onClick={onClick}>Ver más</button>
    </div>
</div>
        )
}