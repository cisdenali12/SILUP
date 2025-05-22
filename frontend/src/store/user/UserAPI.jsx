import { client } from '../../api'

/**
 * @see typing-redux-thunks https://redux.js.org/tutorials/essentials/part-5-async-logic#typing-redux-thunks
 */
export const login = ({email,password}) => async (dispatch, getState)=>{
    try{
        // remote login
        const result = await client.login({email, password})

        if(result.success){
            // Login correcto
            dispatch( {type: 'user/received', payload:{id:result.id,name:result.name, email: result.email}})
            dispatch( {type: 'user/loginSuccess' })
        } else {
            // Login fallido
            dispatch( {type: 'user/loginError' })
        }
    } catch(e){
        // Request fallida
        dispatch( {type: 'user/loginError' })
    }
}


/**
 * @see typing-redux-thunks https://redux.js.org/tutorials/essentials/part-5-async-logic#typing-redux-thunks
 */
export const register = ({name, email, password}) => async (dispatch, getState)=>{
    try{
        const result = await client.register({name, email, password})
        if(result.success){
            // Registro correcto
            dispatch( {type: 'user/received', payload:{id:result.id,name:result.name, email: result.email}})
            dispatch( {type: 'user/registerSuccess' })
        } else {
            // Login fallido
            dispatch( {type: 'user/registerError' })
        }
    } catch(e){
        // Request fallida
        dispatch( {type: 'user/registerError' })
    }
}
