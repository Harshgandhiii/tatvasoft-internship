import { Button,Stack,TextField } from "@mui/material";
import React from "react";
import { Link,useNavigate } from "react-router-dom";
import '../pages/Login.css'
import { Formik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import authService from "../service/authService";
import { loginSchema } from "../schemas";



function Login() {

    const initialValues={
        email:'',
        password:''
    }

    const nav =useNavigate();


    const onSubmit= (values) => {
        authService
        .login(values).then((res)=>{
            delete res._id;
            delete res.__v;
            setTimeout(()=>{
                toast.success("Successfully logged in");
            },2000);
            nav("/product-list");
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    

    return(
        <>
        <div className="home">
            <ToastContainer/>
                <Button variant="text" disabled>Home</Button><span style={{color:'red'}}> | </span>
                <Button variant="text"color="error"><Link to='/register'></Link>Login</Button>
            </div>
            <div className="roww" style={{
            marginTop: "50px"
        }}>
            <h1 style={{
                fontSize:"32px",
                fontStyle: 'roboto'
            }}>Login or Create an Account</h1>
        </div>

        <Stack direction='row' className="main">
            <Stack direction='column' className="left">
                <div className="login_heading">
                    <h3>New Customer</h3>
                    <p>Registration is free and easy</p>
                </div>
                <div className="left_list">
                    <ul>
                        <li>Faster Checkout</li>
                        <li>Save multiple shipping addresses</li>
                        <li>View and track orders and more</li>
                    </ul>
                </div>
                <div className="left_btn">
                    <Button variant="contained" color="error" sx={{width:150,height:60}} onClick={()=>nav('/register')}>Create an Account</Button>
                </div>

            </Stack>

            <Stack direction={"column"} className="left">
                <div className="login_heading">
                    <h3>Registered Customers</h3>
                    <p>If you have an account with us, please log in.</p>
                </div>

                
                <Formik
                initialValues={initialValues}
                validationSchema={loginSchema}
                onSubmit={onSubmit}>
                    {({values,errors,touched,handleChange,handleBlur,handleSubmit,}) => (
                <form onSubmit={handleSubmit}>
                <Stack direction={"column"} className="right_field">
                    <Stack direction={"column"} className="login_input_container">
                        <p>Email Address*</p>
                        <TextField
                            type="email"
                            required
                            name="email"
                            size='small'
                            placeholder="Enter your Email"
                            className="email_input"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                            {errors.email && touched.email? (<p className="form-erro" style={{color:'red'}}>{errors.email}</p>):null}
                    </Stack>

                    <Stack direction={"column"} className="login_input_container">
                        <p>Password*</p>
                        <TextField
                            type="password"
                            required
                            name="password"
                            size='small'
                            placeholder="Enter your Password"
                            className="email_input"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            
                            
                            />
                            {errors.password && touched.password? (<p className="form-erro" style={{color:'red'}}>{errors.password}</p>):null}
                    </Stack>

                    <Stack direction={"column"} className="login_right_btn">
                        <Button color="error" sx={{height:40}} variant="contained" className="login_right_btn" type="submit">
                            Login
                        </Button>
                    </Stack>
                </Stack>
                </form>
                    )}
                </Formik>

            </Stack>
        </Stack>

        

            
        </>
    )
}
export default Login;