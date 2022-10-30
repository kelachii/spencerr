import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'


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
    const [gender, setGender] = useState("")

    const navigate = useNavigate();

    const [toggle, setToggle] = useState(false)
    const toggleMenu = (e) => {
        setToggle(!toggle);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { userName, firstName, middleName, lastName, mobile, dob, city, email, password, conPassword };
        const url = "http://localhost:3000/users";

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            console.log("new user added")
        })

        setUser({ userName: userName, email: email, firstName: firstName, middleName: middleName, lastName: lastName, mobile: mobile, dob: dob, city: city, password: password, conPassword: conPassword, gender: gender })
        navigate("/Login")
    }

    // const verify =()=>{

    // }

    return (
        <form className='signup' onSubmit={handleSubmit}>

            <div className='signup-banner'>
                <h1>Sign Up</h1>
                <div className='signup_banner'>

                    <div className='signup-inner'>
                        <p><label name='name' className='label'>User-Name</label>
                            <input type='text' name='name' placeholder='Enter User-Name' required onChange={(e) => setUserName(e.target.value)} value={userName}></input></p>

                        <p><label name='name' className='label'>Email</label>
                            <input type='email' name='name' placeholder='Enter Email' required onChange={(e) => setEmail(e.target.value)} value={email}></input></p>

                        <p><label name='name' className='label'>Firstname</label>
                            <input type='text' name='name' placeholder='Enter First-name' required onChange={(e) => setFirstName(e.target.value)} value={firstName}></input></p>

                        <p><label name='name' className='label'>Middlename</label>
                            <input type='text' name='name' placeholder='Enter Middle-name optional' onChange={(e) => setMiddleName(e.target.value)} value={middleName}></input></p>

                        <p><label name='name' className='label'>Lastname</label>
                            <input type='text' name='name' placeholder='Enter Last-name' required onChange={(e) => setLastName(e.target.value)} value={lastName}></input></p>

                        <p><label name='number' className='label'>Mobile</label>
                            <input type='tel' name='number' placeholder='Enter Mobile Number' required onChange={(e) => setMobile(e.target.value)} value={mobile}></input></p >

                        <p><label name='DOB' className='label'>DOB</label>
                            <input type='date' name='DOB' placeholder='Enter DOB' required onChange={(e) => setDOB(e.target.value)} value={dob}></input></p >

                        <p><label name='city' className='label'>City</label>
                            <input type='text' name='city' placeholder='Enter Your City' required onChange={(e) => setCity(e.target.value)} value={city}></input></p >

                        <p><label name='password' className='label'>Password</label>
                            <input type='password' name='password' placeholder='Enter Password' required onChange={(e) => setPassword(e.target.value)} value={password}></input></p >

                        <p><label name='password' className='label'>Confirm Password</label>
                            <input type='password' name='password' placeholder='Confirm Password' required onChange={(e) => setConPassword(e.target.value)} value={conPassword}></input></p>


                    </div>


                </div>

                <h3>Select Gender</h3>
                <section className='gender'>
                    <p> <input type="radio" name="gender" required onChange={(e) => setGender(e.target.value)} value={gender} />
                        <label name="male">Male</label></p>

                    <p> <input type="radio" name="gender" required onChange={(e) => setGender(e.target.value)} value={gender} />
                        <label name="female">Female</label></p>

                    <p> <input type="radio" name="gender" required oonChange={(e) => setGender(e.target.value)} value={gender} />
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