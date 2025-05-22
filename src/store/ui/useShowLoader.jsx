import { useDispatch } from "react-redux";
import { uiActions } from "./slice";

export const useShowLoader = ()=>{
    const dispatch = useDispatch()
    return ({show:()=>{dispatch(uiActions.startLoading())}, hide:()=>{dispatch(uiActions.stopLoading())}})
}