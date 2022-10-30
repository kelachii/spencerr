import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Login = () => {

    const [userInfo, setUserInfo] = useState([]);
    const [user, setUser] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [error, setError] = useState("");
    const url = "http://localhost:3000/users";

    const navigate = useNavigate();

    const fetchUser = async () => {
        const response = await fetch(url);
        const userInfo = await response.json();
        console.log(userInfo);
        setUserInfo(userInfo);
    }
    useEffect(() => {
        fetchUser()
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();

        const getUserInfo = userInfo.find((info) => {
            return info.email === userEmail && info.password === userPassword


        });


        if (getUserInfo) {
            setUser({ email: userEmail, password: userPassword })
            navigate("/")
        } else {
            console.log("error")
        }
    }

    return (
        <form className='login' onSubmit={handleSubmit}>

            <div className='login_banner'>
                <h3>Login to your account</h3>
                <p>Please login to access your account</p>


                <div className='login_inner'>
                    <label name="email" className='label' >Email</label>
                    <p><input type="email" placeholder="example@gmail.com" required value={userEmail} onChange={(e) => setUserEmail(e.target.value)}>
                    </input></p>
                    <label name="password" className='label' >Password</label>
                    <p><input type="password" placeholder="*********" required value={userPassword} onChange={(e) => setUserPassword(e.target.value)}>
                    </input></p>
                </div>



                <button className='btn'>Login</button>

                <div className='confirm'>
                    <p>Don't have an account?</p>
                    <Link to='/Signup' className='active'>Sign Up</Link>
                </div>
            </div>
            <NavLink to='/'><button className='btn'>Back To Home</button></NavLink>
        </form>
    )
}
export default Login