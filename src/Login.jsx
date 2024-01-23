import React, { useState } from "react"

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        {/* if we don't declare prevent default the page is going to get reloaded an we're lose the State */ }
        console.log(email);

    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            {/* Since for is a reserved word in JavaScript, React elements use htmlFor instead. */}
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="yourmail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password" /> 
            {/* Password will not be displayed because of the type set */}
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Need a Account? Register here</button>
        </div>
    )
}