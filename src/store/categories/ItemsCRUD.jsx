const ITEMS = {

}

/**
 * @see typing-redux-thunks
 * 
 */
export const getItems = ({category}) => async (dispatch, getState)=>{
    try{
        /*** TODO server code  
         * read the items for the category
         * 
        */
        if(!ITEMS[category]){
            ITEMS[category] = {items: []}
        }
        const resultItems = ITEMS[category].items.concat() 
       // Successful 
       const result = await Promise.resolve({ success: true, category, items:resultItems })
       // Failed 
        // const result = Promise.resolve({ success: false })

        if(result.success){
            // Items
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
        /*** TODO server code  
         * 
         * 
        */
        if(!ITEMS[category]){
            ITEMS[category] = {items: []}
        }
        const itemResult = JSON.parse(JSON.stringify(item))
        ITEMS[category].items.push(itemResult)
       // Successful 
       const result = await Promise.resolve({ success: true, category, item: itemResult })
       // Failed 
        // const result = Promise.resolve({ success: false })

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
        /*** TODO server code  
         * 
         * 
        */
        if(!ITEMS[category]){
            ITEMS[category] = {items: []}
        }
        const index = ITEMS[category].items.findByIndex(i=>i.id === itemId)
        if(index >= 0){
            ITEMS[category].items.splice(index,1)
        }

       // Successful 
       const result = await Promise.resolve({ success: true, category, itemId })
       // Failed 
        // const result = Promise.resolve({ success: false })

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
        /*** TODO server code  
         * type:add (add amount)
         * type:substract (substract amount)
         * 
        */
        if(!ITEMS[category]){
            ITEMS[category] = {items: []}
        }
        const index = ITEMS[category].items.findByIndex(i=>i.id === itemId)
        let resultItem = {}
        if(index >= 0){
            ITEMS[category].items[index].amount += (type == 'add' ? amount:-amount)
            resultItem= JSON.parse(JSON.stringify(ITEMS[category].items[index]))
        }

       // Successful 
       const result = await Promise.resolve({ success: true, category, item:resultItem })
       // Failed 
        // const result = Promise.resolve({ success: false })

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
