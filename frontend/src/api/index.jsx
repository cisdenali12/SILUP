import axios from 'axios'
import { store } from '../store'

const axiosClient = axios.create({baseURL: 'http://localhost:3000'})


const setAuthorization = token => {
axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const client = {
    login:async({email, password})=>{
        try{
            console.log('Sending-> LOGIN')
            const response = await axiosClient.post('/login', {email, password})
            console.log('LOGIN')
            console.log(response)

            if(response.status == 200){
                const { user, token } = response.data

                // set the authorization header for the client
                setAuthorization(token)
                // Login correcto
                return { success:true, id:user.id, name: user.name, email:user.email }
            } else {
                // Login fallido
                return { success:false, error:response.status } 
            }
        } catch(e){
            // Request fallida
            return { success:false, error:e } 
        }
    },
    register:async({email, password, name})=>{
        try{
            console.log('Sending-> Register')
            const response = await axiosClient.post('/register', {email, password, name})
            console.log('Register')
            console.log(response)

            if(response.status == 201){
                const { user, token } = response.data
                // set the authorization header for the client
                setAuthorization(token)
                // correcto
                return { success:true, id:user.id, name: user.name, email:user.email }
            } else {
                // fallido
                return { success:false, error:response.status } 
            }
        } catch(e){
            // Request fallida
            return { success:false, error:e } 
        }
    },
    getAmountsByUnit:async({category})=>{
        try{
            console.log('Sending-> getAmountsByUnit')
            const userId = store.getState().user.id
            const response = await axiosClient.post('/category/amounts-by-unit', {category, userId})
            console.log('getAmountsByUnit')
            console.log(response)

            if(response.status == 200){
                // correcto
                return { success:true, category, amountsByUnit:response.data.amountsByUnit }
            } else {
                // fallido
                return { success:false, error:response.status } 
            }
        } catch(e){
            // Request fallida
            return { success:false, error:e } 
        }
    },
    getItems:async({category})=>{
        try{
            console.log('Sending-> getItems')
            const userId = store.getState().user.id
            const response = await axiosClient.post('/category/items', {category, userId})
            console.log('getItems')
            console.log(response)

            if(response.status == 200){
                // correcto
                return { success:true, category, items:response.data.items }
            } else {
                // fallido
                return { success:false, error:response.status } 
            }
        } catch(e){
            // Request fallida
            return { success:false, error:e } 
        }
    },
    createItem:async({category, item})=>{
        try{
            console.log('Sending-> createItem')
            const userId = store.getState().user.id
            const response = await axiosClient.post('/category/item', {category, userId, item})
            console.log('createItem')
            console.log(response)

            if(response.status == 201){
                // correcto
                return { success:true, category, item:response.data.item }
            } else {
                // fallido
                return { success:false, error:response.status } 
            }
        } catch(e){
            // Request fallida
            return { success:false, error:e } 
        }
    },
    deleteItem:async({category, itemId})=>{
        try{
            console.log('Sending-> deleteItem')
            const userId = store.getState().user.id
            const response = await axiosClient.delete('/category/item', {data:{category, userId, itemId}})
            console.log('deleteItem')
            console.log(response)

            if(response.status == 200){
                // correcto
                return { success:true, category, itemId:response.data.itemId }
            } else {
                // fallido
                return { success:false, error:response.status } 
            }
        } catch(e){
            // Request fallida
            return { success:false, error:e } 
        }
    },
    createItemTransaction:async({ category, itemId, amount, type })=>{
        try{
            console.log('Sending-> createItemTransaction')
            const userId = store.getState().user.id
            const response = await axiosClient.post('/category/item/transaction', {category, userId, itemId, amount, type})
            console.log('createItemTransaction')
            console.log(response)

            if(response.status == 201){
                // correcto
                return { success:true, category:response.data.category, item:response.data.item }
            } else {
                // fallido
                return { success:false, error:response.status } 
            }
        } catch(e){
            // Request fallida
            return { success:false, error:e } 
        }
    }
}
