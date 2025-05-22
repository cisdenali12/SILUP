import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export function useCategoryTitle({ category }){
    const selectTitle = createSelector([s=>s.categories[category]], c=>c.display)

    return useSelector(selectTitle)
}