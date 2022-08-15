import React from 'react'
import { input, gender } from '../Data'
import { inputSignup } from '../Data'
import { Link, NavLink } from 'react-router-dom'

export const Input = () => {
    return (
        <div className='login'>
            <div className='login_banner'>
                <h3>Login to your account</h3>
                <p>Please login to access your account</p>
                {
                    input.map((user) => {
                        return (
                            <div key={user} className='login_inner'>
                                <label name={user.name} className='label' >{user.label}</label>
                                <p><input type={user.type} placeholder={user.placeholder} required={user.required}>
                                </input></p>
                            </div>

                        )
                    }
                    )
                }

                <button className='btn'>Login</button>

                <div className='confirm'>
                    <p>Don't have an account?</p>
                    <Link to='/Signup' className='active'>Sign Up</Link>
                </div>
            </div>
            <NavLink to='/'><button className='btn'>Back To Home</button></NavLink>
        </div>
    )
}

export const Label = () => {
    return (
        <div className='signup'>

            <div className='signup-banner'>
                <h1>Sign Up</h1>
                <div className='signup_banner'>
                    {
                        inputSignup.map((signup) => {
                            return (
                                <div key={signup} className='signup-inner'>
                                    <p><label name={signup.name} className='label'>{signup.label}</label></p>
                                    <input type={signup.type} name={signup.name} placeholder={signup.placeholder} required={signup.required}></input>

                                </div>
                            )
                        })
                    }
                </div>

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
            </div>
            <NavLink to='/'><button className='btn'>Back To Home</button></NavLink>
        </div>
    )
}