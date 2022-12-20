import * as yup from 'yup';



const formSchema = yup.object().shape({

    
    username: yup
    .string()
    .trim()
    .required('Username is required')
    .min(3, 'Username must e 3 characters long!'),
    email: yup
        .string()
        .email('Must be valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .required('A password is required')
        .min(6, 'Password must be atleast 6 Characters'),
    tos: yup
        .boolean()
        .oneOf([true], 'Must Accept terms and conditions to continue')
})

export default formSchema