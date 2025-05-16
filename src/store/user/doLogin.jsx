function serverLogin (user, password){
    /** */

    // Successfull login payload
    return Promise.resolve({ success: true, id:1, email:'mario@gmail.com' })
    
    // Failed login payload
    return Promise.resolve({ success: false, errorMessage: 'We are working on it!' })
}

/**
 * @see typing-redux-thunks https://redux.js.org/tutorials/essentials/part-5-async-logic#typing-redux-thunks
 * 
 */
export default ({user,password}) => async (dispatch, getState)=>{
    try{
        const result = await serverLogin(user, password)

        if(result.success){
            // Login correcto
            dispatch( {type: 'user/received', payload:{id:result.id, email: result.email}})
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
