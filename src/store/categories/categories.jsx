import { createSlice } from '@reduxjs/toolkit'
import state from './state'
import { consumeItemAmount, addItemAmount, createItem, deleteItem, getItems, getAmountsByUnit } from './ItemsAPI'

/**
 * {
 *  fridge:{ name:string, display:string, amountsByUnit:[{unit:string, value:number}], items:[{id:number, name:string, category:string, amount:number, unit:string }] },
 *  groceries:{ ...same as above...},
 *  produce:{ ...same as above...},
 *  freezer:{ ...same as above...},
 *  units:[string]
 * }
 */
const initialState = state

export const categoriesActions = {
    /**
     * [LOCAL]
     * state[category].items = items
     * @param {category, items}
     * @returns 
     */
    setItems:({category, items})=>({ payload:{category, items}, type: 'categories/setItems'}),
    /**
     * [LOCAL]
     * state[category].items[item] = item
     * @param {category, item}
     * @returns 
     */
    updateItem:({ category, item })=>({ payload:{ category, item }, type: 'categories/updateItem'}),
    /**
     * [LOCAL]
     * delete => state[category].items[itemId]
     * @param {category, itemId}
     * @returns 
     */
    removeItem:({ category, itemId })=>({ payload:{ category, itemId }, type: 'categories/removeItem'}),
    /**
     * [LOCAL]
     * state[category].items.push(item)
     * @param {category, item}
     * @returns 
     */
    addItem:({ category, item })=>({ payload:{ category, item }, type: 'categories/addItem'}),
    /**
     * [REMOTE] 
     * The server removes from an item
     * @param {category, itemId, amount} 
     * @returns 
     */
    consumeItemAmount:({category, itemId, amount})=>consumeItemAmount({category, itemId, amount}),
    /**
     * [REMOTE] 
     * The server adds to an item
     * @param {category, itemId, amount} 
     * @returns 
     */
    addItemAmount:({category, itemId, amount})=>addItemAmount({category, itemId, amount}),
    /**
     * [REMOTE]
     * Tells the server to create a new item in the specified category
     * @param {category, item}
     * @returns 
     */
    createItem:({category, item})=>createItem({category, item}),
    /**
     * [REMOTE]
     * Tells the server to delete an item in the specified category
     * @param {category, itemId}
     * @returns 
     */
    deleteItem:({category, itemId})=>deleteItem({category, itemId}),
    /**
     * [REMOTE]
     * Tells the server to get the items list from a category
     * @param {category}
     * @returns 
     */
    getItems:({category})=>getItems({category}),
    /**
     * [REMOTE]
     * Tells the server to get the items list from a category
     * @param {category}
     * @returns 
     */
    getAmountsByUnit:({category})=>getAmountsByUnit({category})
}

export const categoriesSlice = createSlice({
    name:'categories',
    initialState,
    reducers:{
        /**
         * [LOCAL]
         * @param {*} state 
         * @param {*} action { payload:{category, amountsByUnit}, type: 'categories/setAmountsByUnit'}
         */
        setAmountsByUnit:(state, action)=>{
            state[action.payload.category].amountsByUnit = action.payload.amountsByUnit
        },
        /**
         * [LOCAL]
         * @param {*} state 
         * @param {*} action { payload:{category, items}, type: 'categories/setItems'}
         */
        setItems: (state, action)=>{
            state[action.payload.category].items = action.payload.items
        },
        /**
         * [LOCAL]
         * @param {*} state 
         * @param {*} action { payload:{ category, item }, type: 'categories/updateItem'}
         */
        updateItem:(state, action)=>{
            const itemIndex = state[action.payload.category].items.findIndex(i=>i.id === action.payload.item.id)

            if(itemIndex >= 0){
                state[action.payload.category].items[itemIndex] = action.payload.item
            } else {
                state[action.payload.category].items.push(action.payload.item)
            }
        },
        /**
         * [LOCAL]
         * @param {*} state 
         * @param {*} action { payload:{ category, itemId }, type: 'categories/removeItem'}
         */
        removeItem:(state, action)=>{
            const itemIndex = state[action.payload.category].items.findIndex(i=>i.id === action.payload.itemId)
            if(itemIndex >= 0){
                state[action.payload.category].items.splice(itemIndex,1)
            }
        },
        /**
         * [LOCAL]
         * @param {*} state 
         * @param {*} action { payload:{ category, item }, type: 'categories/addItem'}
         */
        addItem:(state, action)=>{
            state[action.payload.category].items.push(action.payload.item)
        }
    }
})