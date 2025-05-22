import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export function useCategoriesSummary(){
    // [categories]
    const selectCategoriesArray = createSelector([s=>s.categories], categories=>Object.keys(categories).filter(v=>v!= 'units').map(c=>categories[c]))
    // [[items], [items]]
    const selectItems = createSelector([selectCategoriesArray], categories=>categories.map(c=>c.items))
    // [[amountsByUnit], [amountsByUnit]]
    const selectAmountsByUnit = createSelector([selectCategoriesArray], categories=>categories.map(c=>c.amountsByUnit))
    // result:number = Adding up the length of the items from each category 
    const itemsCountSelector = createSelector([selectItems], items=>items.reduce((count, current)=>count + current.length, 0))
    
    /**
     * Similar logic as the itemsCount but for each unit
     * [{unit, value}] The array will include all the units and the cummulated value
     */
    const amountsByUnitSelector = createSelector([selectAmountsByUnit], amounts =>{
        const amountsByUnit = {}

        amounts.forEach(list=>{
            list.forEach(({unit, value})=>{
            if(!amountsByUnit[unit]){
                amountsByUnit[unit] = {unit, value}
            } else {
                amountsByUnit[unit].value += value
            }
        })
        })

        return Object.keys(amountsByUnit).map(k=>({unit:k, value:amountsByUnit[k].value}))
    } )

    
        // Returnig for the component
        return { itemsCount: useSelector(itemsCountSelector), amountsByUnit: useSelector(amountsByUnitSelector) }
}