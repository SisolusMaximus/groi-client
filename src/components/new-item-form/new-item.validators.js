export const nameValidator = (value, name) =>{
    if (!value){
        return {
            passedValidation: false,
            message:`*${name} can't be empty`
        } 
    } else if (value.length > 50){
        return {
            passedValidation: false,
            message:`*${name} can't have more than 50 characters`
        }
    } else {
        return {
            passedValidation: true,
            message: undefined
        }
    }
}


export const priceValidator = (value, name) =>{
    if (!value){
        return {
            passedValidation: false,
            message:`*${name} can't be empty`
        }
    } else if (isNaN(value)){
        return {
            passedValidation: false,
            message: `*${name} must be a number`
        }
    } else if ( value < 0){
        return {
            passedValidation: false,
            message: `*${name} must be positive`
        }
    }else{ 
        return {
            passedValidation: true,
            message: undefined
        }
    }
}

export const descriptionValidator = (value, name) =>{
    if (!value){
        return {
            passedValidation: false,
            message:`*${name} can't be empty`
        } 
    }else {
        return {
            passedValidation: true,
            message: undefined
        }
    }
}

export const imageValidator = (value, name) =>{
    if (!value){
        return {
            passedValidation: false,
            message:`${name} can't be empty`
        } 
    } else if (value.length > 5){
        return {
            passedValidation: false,
            message:`${name} you can't upload more than 5 images`
        }
    } else {
        return {
            passedValidation: true,
            message: undefined
        }
    }
}

export const currencyValidator = (value, name) =>{
    if (!value){
        return {
            passedValidation: false,
            message:`${name} can't be empty`
        } 
    } else if (value.length > 3){
        return {
            passedValidation: false,
            message:`${name} must contain three letter currency code. `
        }
    } else {
        return {
            passedValidation: true,
            message: undefined
        }
    }
}

export const categoryValidator = (value, name) =>{
    if (!value){
        return {
            passedValidation: false,
            message:`*You have to choose most appropriate option`
        } 
    }else {
        return {
            passedValidation: true,
            message: undefined
        }
    }
}