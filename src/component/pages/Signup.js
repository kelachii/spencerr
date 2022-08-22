import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


const SignUp = (setUser) => {
    // const [userName, setUserName] = useState("")
    // const [email, setEmail] = useState("")
    // const [firstName, setFirstName] = useState("")
    // const [middleName, setMiddleName] = useState("")
    // const [lastName, setLastName] = useState("")
    // const [mobile, setMobile] = useState("")
    // const [dob, setDOB] = useState("")
    // const [city, setCity] = useState("")
    // const [password, setPassword] = useState("")
    // const [conPassword, setConPassword] = useState("")
    const [formValue, setFormValue] = useState({
        username: "",
        email: "",
        firstName: "",
        middleName: "",
        lastName: "",
        mobile: "",
        dob: "",
        city: "",
        password: "",
        conPassword: "",
        gender: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValue((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };
    const handleSubmit = (e) => {

    }

    const { username, email, firstName, middleName, lastName, mobile, dob, city, password, conPassword, gender } = formValue;

    return (
        <form className='signup' onSubmit={handleSubmit}>

            <div className='signup-banner'>
                <h1>Sign Up</h1>
                <div className='signup_banner'>

                    <div className='signup-inner'>
                        <p><label name='name' className='label'>User-Name</label>
                            <input type='text' name='name' placeholder='Enter User-Name' required onChange={handleChange} value={username}></input></p>

                        <p><label name='name' className='label'>Email</label>
                            <input type='email' name='name' placeholder='Enter Email' required onChange={handleChange} value={email}></input></p>

                        <p><label name='name' className='label'>Firstname</label>
                            <input type='text' name='name' placeholder='Enter First-name' required onChange={handleChange} value={firstName}></input></p>

                        <p><label name='name' className='label'>Middlename</label>
                            <input type='text' name='name' placeholder='Enter Middle-name optional' onChange={handleChange} value={middleName}></input></p>

                        <p><label name='name' className='label'>Lastname</label>
                            <input type='text' name='name' placeholder='Enter Last-name' required onChange={handleChange} value={lastName}></input></p>

                        <p><label name='number' className='label'>Mobile</label>
                            <input type='tel' name='number' placeholder='Enter Mobile Number' required onChange={handleChange} value={mobile}></input></p >

                        <p><label name='DOB' className='label'>DOB</label>
                            <input type='date' name='DOB' placeholder='Enter DOB' required onChange={handleChange} value={dob}></input></p >

                        <p><label name='city' className='label'>City</label>
                            <input type='text' name='city' placeholder='Enter Your City' required onChange={handleChange} value={city}></input></p >

                        <p><label name='password' className='label'>Password</label>
                            <input type='password' name='password' placeholder='Enter Password' required onChange={handleChange} value={password}></input></p >

                        <p><label name='password' className='label'>Confirm Password</label>
                            <input type='password' name='password' placeholder='Confirm Password' required onChange={handleChange} value={conPassword}></input></p>


                    </div >


                </div >

                <h3>Select Gender</h3>
                <section className='gender'>
                    <p> <input type="radio" name="gender" required onChange={handleChange} value={gender} />
                        <label name="male">Male</label></p>

                    <p> <input type="radio" name="gender" required onChange={handleChange} value={gender} />
                        <label name="female">Female</label></p>

                    <p> <input type="radio" name="gender" required onChange={handleChange} value={gender} />
                        <label name="others">Others</label></p>
                </section>
                <button className='btn'>Sign Up</button>


                <div className='confirm'>
                    <p>Already have an account?</p>
                    <Link to='/Login' className='active'><p>Login</p></Link>
                </div>
            </div >
            <NavLink to='/'><button className='btn'>Back To Home</button></NavLink>
        </form >
    )
}
export default SignUp