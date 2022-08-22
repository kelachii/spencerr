import React, { useState } from 'react'
import { gender } from '../../Data'
import { inputSignup } from '../../Data'
import { Link, NavLink } from 'react-router-dom'


const SignUp = (setUser) => {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [lastName, setLastName] = useState("")
    const [mobile, setMobile] = useState("")
    const [dob, setDOB] = useState("")
    const [city, setCity] = useState("")
    const [password, setPassword] = useState("")
    const [conPassword, setConPassword] = useState("")

    const handleChange = (e) => {
        [{ setUserName }, { setEmail }, { setFirstName }, { setMiddleName }, { setLastName }, { setMobile }, { setDOB }, { setCity }, { setPassword }, { setPassword }, { setConPassword }](e.target.value)
        console.log(e)
    }
    return (
        <div className='signup'>

            <div className='signup-banner'>
                <h1>Sign Up</h1>
                <div className='signup_banner'>

                    <div className='signup-inner'>
                        <p><label name='name' className='label'>User-Name</label>
                            <input type='text' name='name' placeholder='Enter User-Name' required></input></p>

                        <p><label name='name' className='label'>Email</label>
                            <input type='email' name='name' placeholder='Enter Email' required></input></p>

                        <p><label name='name' className='label'>Firstname</label>
                            <input type='text' name='name' placeholder='Enter First-name' required></input></p>

                        <p><label name='name' className='label'>Middlename</label>
                            <input type='text' name='name' placeholder='Enter Middle-name optional'></input></p>

                        <p><label name='name' className='label'>Lastname</label>
                            <input type='text' name='name' placeholder='Enter Last-name' required></input></p>

                        <p><label name='number' className='label'>Mobile</label>
                            <input type='tel' name='number' placeholder='Enter Mobile Number' required></input></p >

                        <p><label name='DOB' className='label'>DOB</label>
                            <input type='date' name='DOB' placeholder='Enter DOB' required></input></p >

                        <p><label name='city' className='label'>City</label>
                            <input type='text' name='city' placeholder='Enter Your City' required></input></p >

                        <p><label name='password' className='label'>Password</label>
                            <input type='password' name='password' placeholder='Enter Password' required></input></p >

                        <p><label name='password' className='label'>Confirm Password</label>
                            <input type='password' name='password' placeholder='Confirm Password' required></input></p>


                    </div >


                </div >

                <h3>Select Gender</h3>
                <section className='gender'>
                    {
                        gender.map((Gender) => {
                            return (
                                <div>
                                    <input type={Gender.type} name={Gender.name} required></input>
                                    <label name={Gender.name}>{Gender.label}</label>
                                </div>
                            )
                        })
                    }
                </section>
                <button className='btn'>Sign Up</button>


                <div className='confirm'>
                    <p>Already have an account?</p>
                    <Link to='/Login' className='active'><p>Login</p></Link>
                </div>
            </div >
            <NavLink to='/'><button className='btn'>Back To Home</button></NavLink>
        </div >
    )
}
export default SignUp