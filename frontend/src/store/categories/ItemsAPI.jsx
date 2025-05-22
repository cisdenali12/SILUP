import { client } from '../../api'

/**
 * @see typing-redux-thunks
 * 
 */
export const getAmountsByUnit = ({category}) => async (dispatch, getState)=>{
    try{
        const result = await client.getAmountsByUnit({category})
        if(result.success){
            dispatch( {type: 'categories/setAmountsByUnit', payload:{ category:result.category, amountsByUnit: result.amountsByUnit }} )
        } else {
            // Failed
        }
    } catch(e){
        // Request failed
    }
}

/**
 * @see typing-redux-thunks
 * 
 */
export const getItems = ({category}) => async (dispatch, getState)=>{
    try{
        const result = await client.getItems({category})
        if(result.success){
            dispatch( {type: 'categories/setItems', payload:{ category:result.category, items: result.items }} )
        } else {
            // Failed
        }
    } catch(e){
        // Request failed
    }
}

/**
 * @see typing-redux-thunks
 * 
 */
export const createItem = ({category, item}) => async (dispatch, getState)=>{
    try{
        const result = await client.createItem({category, item})
        if(result.success){
            // Created
            dispatch( {type: 'categories/addItem', payload:{ category:result.category, item: result.item }} )
        } else {
            // Failed
        }
    } catch(e){
        // Request failed
    }
}

/**
 * @see typing-redux-thunks
 * 
 */
export const deleteItem = ({category, itemId}) => async (dispatch, getState)=>{
    try{
        const result = await client.deleteItem({category, itemId})
        if(result.success){
            // Deleted
            dispatch( {type: 'categories/removeItem', payload:{ category:result.category, itemId: result.itemId }} )
        } else {
            // Failed
        }
    } catch(e){
        // Request failed
    }
}

/**
 * @see typing-redux-thunks
 * 
 */
export const createItemTransaction = ({ category, itemId, amount, type })=> async (dispatch, getState)=>{
    try{
        const result = await client.createItemTransaction({ category, itemId, amount, type })
        if(result.success){
            // Created
            dispatch( {type: 'categories/updateItem', payload:{ category:result.category, item: result.item }} )
        } else {
            // Failed
        }
    } catch(e){
        // Request failed
    }
}

/**
 * @see typing-redux-thunks
 * 
 */
export const addItemAmount = ({ category, itemId, amount })=> createItemTransaction({type:'add', category, itemId, amount})
export const consumeItemAmount = ({ category, itemId, amount })=> createItemTransaction({type:'substract', category, itemId, amount})
