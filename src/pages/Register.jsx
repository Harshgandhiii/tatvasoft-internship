import { Button, Select, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import '../pages/Register.css'
import { Link, useNavigate } from "react-router-dom";
import { Formik } from 'formik';
import { signUpSchema } from "../schemas";
import { toast, ToastContainer } from "react-toastify";
import userService from "../service/userService";
import authService from "../service/authService";





function Register() {

    const navigate = useNavigate();

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        roleId: [],
        password: '',
        confirmPassword: '',
    }

    const onSubmit = (values) => {
        delete values.confirmPassword;
        authService.create(values).then((res) => {
            toast.success("Successfully Registered");
            navigate("/login");
        })
            .catch((err) => {
                console.log(err);
            })
    }
    const [roleList, setRoleList] = useState();

    const getRoles = () => {
        userService.getAllRoles().then((res) => {
            setRoleList(res);
        })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getRoles();
    }, [])
    console.log(roleList);

    return (
        <>

            <div>
                <div className="home">
                    <ToastContainer />
                    <Button variant="text" disabled>Home</Button><span style={{ color: "red" }}> | </span>
                    <Button variant="text" color="error"><Link to='/register'></Link>Create an account</Button>
                </div>
                <div className="row" style={{
                    marginTop: "50px"
                }}>
                    <h1 style={{
                        fontSize: "32px",
                        fontStyle: 'roboto'
                    }}>Login or Create an Account</h1>
                </div>
                <div className="personal">
                    <p className="prsnl">Personal Information</p><br /><hr />
                    <p className="info">Please enter the following information to create your account</p>
                </div>

                {/* form */}
                <Formik initialValues={initialValues} validationSchema={signUpSchema} onSubmit={onSubmit}>{({ values, errors, touched, handleChange, handleBlur, handleSubmit, }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="form">
                            <div className="fname">
                                <p>First Name*</p>
                                <input type="text" name="firstName" id="fname" value={values.firstName}
                                    onChange={handleChange} onBlur={handleBlur}></input>
                                {errors.firstName && touched.firstName ? (<p className="form-error" style={{ color: 'red' }}>{errors.firstName}</p>) : null}
                            </div>
                            <div className="lname">
                                <p>Last Name*</p>
                                <input type="text" name="lastName" id="lname" value={values.lastName} onChange={handleChange} onBlur={handleBlur} ></input>
                            </div>
                            {errors.lastName && touched.lastName ? (<p className="form-error" style={{ color: 'red' }}>{errors.lastName}</p>) : null}
                        </div>
                        <div className="email">
                            <p>Email Address*</p>
                            <input type="email" name="email" id="email"
                                value={values.email} onChange={handleChange} onBlur={handleBlur}></input>
                            {errors.email && touched.email ? (<p className="form-error" style={{ color: 'red' }}>{errors.email}</p>) : null}
                        </div>

                        <div className="roleId">
                            <p>Role*</p>
                            <Select type="email" name="roleId" id="email"
                                value={values.roleId} onChange={handleChange} onBlur={handleBlur}>
                                    {roleList.length > 0 & roleList.map((role) => (
                                        <MenuItem value={role.id} key={"name" + role.id}>
                                            {role.name}
                                        </MenuItem>
                                    ))}</Select>
                            {errors.roleId && touched.roleId ? (<p className="form-error" style={{ color: 'red' }}>{errors.roleId}</p>) : null}
                        </div>

                        <div className="login">
                            <h2>Login Information</h2>
                            <hr />
                            <div className="pass">
                                <div className="p1">
                                    <p>Password*</p>
                                    <input type="password" name="pass" id="pass"
                                        value={values.pass} onChange={handleChange} onBlur={handleBlur} />
                                    {errors.pass && touched.pass ? (<p className="form-error" style={{ color: 'red' }}>{errors.pass}</p>) : null}
                                </div>
                                <div className="p2">
                                    <p>Confirm Password*</p>
                                    <input type="password" name="pass1" id="pass"
                                        value={values.pass1} onChange={handleChange} onBlur={handleBlur} />
                                    {errors.pass1 && touched.pass1 ? (<p className="form-error" style={{ color: 'red' }}>{errors.pass1}</p>) : null}
                                </div>
                            </div>
                        </div>








                        <div className="btn">
                            <Button variant="contained" color="error" type="submit">Register</Button>
                        </div>
                    </form>
                )}
                </Formik>
            </div>
        </>

    );
}

export default Register;