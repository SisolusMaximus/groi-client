export const usernameValidator = (value, name) =>{
    if (!value){
        return {
            passedValidation: false,
            message:`*${name} can't be empty`
        } 
    }
    return {
        passedValidation: true,
        message: undefined
    } 
}

export const emailValidator = (value, name) =>{
    if (!value){
        return {
            passedValidation: false,
            message:`*${name} can't be empty`
        } 
    }
    // eslint-disable-next-line
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)){
        return(
            {
                passedValidation: false,
                message:`*Invalid email format`
            } 
        )
    }
    return {
        passedValidation: true,
        message: undefined
    } 
}