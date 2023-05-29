import { Button } from "@mui/material";
import React from "react";
import '../pages/Register.css'
import { Link,useNavigate } from "react-router-dom";
import { useFormik} from 'formik';
import { signUpSchema } from "../schemas";

const initialValues= {
    fname:'',
    lname:'',
    email:'',
    pass:'',
    pass1:'',
}



function Register() {

    const navigate=useNavigate();

    const {values,errors,touched,handleBlur,handleChange,handleSubmit }=useFormik({
        initialValues:initialValues,
        validationSchema:signUpSchema,
        onSubmit:(values, action) => {
            console.log(values);
            action.resetForm();
            navigate('/login');
        }
        
    })
    console.log(errors)
    return(
    <>
    
    <div>
        <div className="home">
            <Button variant="text" disabled>Home</Button><span style={{ color: "red" }}> | </span>
            <Button variant="text" color="error"><Link to='/register'></Link>Create an account</Button>
        </div>
        <div className="row" style={{
            marginTop: "50px"
        }}>
            <h1 style={{
                fontSize:"32px",
                fontStyle: 'roboto'
            }}>Login or Create an Account</h1>
        </div>
        <div className="personal">
            <p className="prsnl">Personal Information</p><br/><hr/>
            <p className="info">Please enter the following information to create your account</p>
        </div>

    {/* form */}
    <form onSubmit={handleSubmit}>
        <div className="form">
            <div className="fname">
                <p>First Name*</p>
                <input type="text" name="fname" id="fname" value={values.fname}
                onChange={handleChange} onBlur={handleBlur}></input>
                {errors.fname && touched.fname?(<p className="form-error" style={{color:'red'}}>{errors.fname}</p>):null}
            </div>
            <div className="lname">
                <p>Last Name*</p>
                <input type="text" name="lname" id="lname" value={values.lname} onChange={handleChange} onBlur={handleBlur} ></input>
            </div>
            {errors.lname && touched.lname?(<p className="form-error" style={{color:'red'}}>{errors.lname}</p>):null}
            </div>    
            <div className="email">
                <p>Email Address*</p>
                <input type="email" name="email" id="email" 
                value={values.email} onChange={handleChange} onBlur={handleBlur}></input>
                {errors.email && touched.email?(<p className="form-error" style={{color:'red'}}>{errors.email}</p>):null}
            </div>
            <div className="login">
                <h2>Login Information</h2>
                <hr/>
                <div className="pass">
                    <div className="p1">
                        <p>Password*</p>
                        <input type="password" name="pass" id="pass" 
                        value={values.pass} onChange={handleChange} onBlur={handleBlur}/>
                        {errors.pass && touched.pass?(<p className="form-error" style={{color:'red'}}>{errors.pass}</p>):null}
                    </div>
                    <div className="p2">
                        <p>Confirm Password*</p>
                        <input type="password" name="pass1" id="pass" 
                        value={values.pass1} onChange={handleChange} onBlur={handleBlur}/>
                        {errors.pass1 && touched.pass1?(<p className="form-error" style={{color:'red'}}>{errors.pass1}</p>):null}
                    </div>
                </div>
            </div>
            

            
        
        
        
        
    
    <div className="btn">
                <Button  variant="contained" color="error" type="submit">Register</Button>
            </div>
            </form>
            </div>
    </>

    );
}

export default Register;