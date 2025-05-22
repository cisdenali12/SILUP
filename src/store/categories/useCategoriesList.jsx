import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export function useCategoriesList(){
    return useSelector(createSelector([s=>s.categories], categories=>Object.keys(categories).filter(v=>v!= 'units').map(c=>categories[c])))
}