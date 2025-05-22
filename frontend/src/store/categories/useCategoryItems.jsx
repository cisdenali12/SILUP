import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export function useCategoryItems({category}){
    const selectItems = createSelector([s=>s.categories[category]], c=>c.items)
    return useSelector(selectItems)
}