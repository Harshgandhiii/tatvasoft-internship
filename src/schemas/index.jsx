import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    fname:Yup.string().min(2).max(25).required("Please enter your first name"),
    lname:Yup.string().min(2).max(25).required("Please enter your last name"),
    email:Yup.string().email().required("Please enter your Email"),
    pass:Yup.string().min(6).required("Please enter your password"),
    pass1:Yup.string().required().oneOf([Yup.ref('pass'),null],"Password must match"),
    
    
    
})

export const loginSchema =Yup.object({
    Email:Yup.string().min(2).max(25).required("Please enter your Email"),
    Password:Yup.string().min(2).max(25).required("Please enter your Password"),
})