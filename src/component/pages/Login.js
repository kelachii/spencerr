import React from "react"
import { Link, NavLink } from "react-router-dom"
import { input } from "../../Data"

const Login = () => {

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
export default Login