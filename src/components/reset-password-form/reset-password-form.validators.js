export const passwordValidator = (value, name) =>{
    if (!value){
        return {
            passedValidation: false,
            message:`*${name} can't be empty`
        } 
    }
    if (value.length < 8){
        return {
            passedValidation: false,
            message:`*${name} must contain at least 8 characters`
        } 
    }
    if (!/[A-Z]/.test(value)){
        return {
            passedValidation: false,
            message:`*${name} must contain least one uppercase letter`
        } 
    }
    if (!/[a-z]/.test(value)){
        return {
            passedValidation: false,
            message:`*${name} must contain least one lowercase letter`
        } 
    }
    if (!/[0-9]/.test(value)){
        return {
            passedValidation: false,
            message:`*${name} must contain at least one number`
        } 
    }
    // eslint-disable-next-line
    if (!/[\s~`!@#$%\^&*+=\-\[\]\\';,/|\\":\?()\._]/g.test(value)){
        return {
            passedValidation: false,
            message:`*${name} must contain at least one special character`
        } 
    }
    return {
        passedValidation: true,
        message: undefined
    } 
}

export const verifictionCodeValidator = (value, name) =>{
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
