function serverLogin (user, password){
    /** */

    // Successfull login payload
    return Promise.resolve({ success: true, id:1, email:'mario@gmail.com' })
    
    // Failed login payload
    return Promise.resolve({ success: false, errorMessage: 'We are working on it!' })
}

export default ({user,password}) => async (dispatch, getState)=>{
    try{
        const result = await serverLogin(user, password)

        if(result.success){
            // Login correcto
            console.log('Despachando LOGIN')
            dispatch( {type: 'user/received', payload:{id:result.id, email: result.email}})
            dispatch( {type: 'user/loginSuccess' })
        } else {
            // Login fallido
            console.log('Despachando error')
            dispatch( {type: 'user/loginError' })
        }
    } catch(e){
        // Request fallida
        console.log('Despachando error')
        dispatch( {type: 'user/loginError' })
    }
}
