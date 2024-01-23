# Login register Form in React

## Start a new Project in React, you need NodsJS and NPM

### Create a new Project using NPX
```bash
npx create-react-app login-register-form
```

### Change to folder login-register-form, start VS-Code and npm
```bash
cd login-register-form
code .
npm start
```

### Goto src Folder in VS-Code and create new files with the Names "Login.jsx" and "Register.jsx"

### Inside Register.jsx create the Component itself
```
export const Register = () => {
    return (
        <>Register</>
    )
}
```

### Inside Login.jsx create the Component itself
```
export const Login = () => {
    return (
        <>Login</>
    )
}
```

### Import both components to App.jsx and delete all Text between the two Div's. We test the code by inserting a <login /> in line 9. We can check this in the browser. 
```
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register"

function App() {
  return (
    <div className="App">
  
    </div>
  );
}

export default App;
```

### In Login.jsx start creating the Form and add a Button to submit the Form. First delete the Placeholder <>Login</>.
```
export const Login = () => {
    return (
        <form>
            <label for="email">email</label>
            <input type="email" placeholder="yourmail@gmail.com" id="email" name="email" />
            <label for="password">password</label>
            <input type="password" placeholder="********" id="password" name="password" /> 
            {/* Password will not be displayed because of the type set */}
            <button>Log In</button>
        </form>
    )
}
```

### To Capture the Values of what user puts in our email and password inputs we need to use new state hook from react
```
import React, { useState } from "react"

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    return (
        <form>
            <label for="email">email</label>
            <input value={email} type="email" placeholder="yourmail@gmail.com" id="email" name="email" />
            <label for="password">password</label>
            <input value={pass} type="password" placeholder="********" id="password" name="password" /> 
            {/* Password will not be displayed because of the type set */}
            <button>Log In</button>
        </form>
    )
}
```

### Once these values get updated they're stored in the state we need to somehow capture them when user submits the form
```
import React, { useState } from "react"

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        {/* if we don't declare prevent default the page is going to get reloaded an we're lose the State */ }
        console.log(email);

    }

    return (
        <form onSubmit={handleSubmit}>
            <label for="email">email</label>
            <input value={email} type="email" placeholder="yourmail@gmail.com" id="email" name="email" />
            <label for="password">password</label>
            <input value={pass} type="password" placeholder="********" id="password" name="password" /> 
            {/* Password will not be displayed because of the type set */}
            <button type="submit">Log In</button>
        </form>
    )
}
```

### Add a small Button for unregistred Users
```
import React, { useState } from "react"

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        {/* if we don't declare prevent default the page is going to get reloaded an we're lose the State */ }
        console.log(email);

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
			{/* Since for is a reserved word in JavaScript, React elements use htmlFor instead. */}
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="yourmail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password" /> 
            {/* Password will not be displayed because of the type set */}
            <button type="submit">Log In</button>
        </form>
        <button>Need a Account? Register here</button>
        </>
    )
}
```

### Go to App.js and create a logic that would control which form is getting displayed
```
import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login /> : <Register />
      }
    </div>
  );
}

export default App;
```

### Go to Register.jsx and create the Register form
```
import React, { useState } from "react"

export const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        {/* if we don't declare prevent default the page is going to get reloaded an we're lose the State */ }
        console.log(email);
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
			{/* Since for is a reserved word in JavaScript, React elements use htmlFor instead. */}
            <input value={name} name="name" id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="yourmail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password" /> 
            {/* Password will not be displayed because of the type set */}
            <button type="submit">Log In</button>
        </form>
        <button>Already have a Account? Login here</button>
        </>
    )
}
```

### Go to App.js and add functionality to the button that switch the Form
```
import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
```

### Go to Login.jsx and add functionality to the button that switch the Form
```
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
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            {/* Since for is a reserved word in JavaScript, React elements use htmlFor instead. */}
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="yourmail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password" /> 
            {/* Password will not be displayed because of the type set */}
            <button type="submit">Log In</button>
        </form>
        <button onClick={() => props.onFormSwitch('register')}>Need a Account? Register here</button>
        </>
    )
}
```

### Go to Register.jsx and add functionality to the button that switch the Form
```
import React, { useState } from "react"

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        {/* if we don't declare prevent default the page is going to get reloaded an we're lose the State */ }
        console.log(email);
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            {/* Since for is a reserved word in JavaScript, React elements use htmlFor instead. */}
            <input value={name} name="name" id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="yourmail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password" /> 
            {/* Password will not be displayed because of the type set */}
            <button type="submit">Log In</button>
        </form>
        <button onClick={() => props.onFormSwitch('login')}>Already have a Account? Login here</button>
        </>
    )
}
```

# Change the Style of your Login mask

### Go to Login.jsx and create a Container with a class name
```
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
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            {/* Since for is a reserved word in JavaScript, React elements use htmlFor instead. */}
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="yourmail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password" /> 
            {/* Password will not be displayed because of the type set */}
            <button type="submit">Log In</button>
        </form>
        <button onClick={() => props.onFormSwitch('register')}>Need a Account? Register here</button>
        </div>
    )
}
```

### Do the same in Register.jsx
```
import React, { useState } from "react"

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        {/* if we don't declare prevent default the page is going to get reloaded an we're lose the State */ }
        console.log(email);
    }
    return (
        <div className="auth-form-container">
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            {/* Since for is a reserved word in JavaScript, React elements use htmlFor instead. */}
            <input value={name} name="name" id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="yourmail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password" /> 
            {/* Password will not be displayed because of the type set */}
            <button type="submit">Log In</button>
        </form>
        <button onClick={() => props.onFormSwitch('login')}>Already have a Account? Login here</button>
        </div>
    )
}
```

### Go to App.css and add the styling Content, be sure that you delete all unneeded Lines
```
.App {
  text-align: center;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: linear-gradient(79deg, #7439db, #c66fbc 48%, #f7944d);
}

.auth-form-container, .login-form, .register-form {
  display: flex;
  flex-direction: column;
}

label {
  text-align: left;
  padding: 0.25rem 0;
}

input {
  margin: 0.5rem 0;
}

button {
  border: none;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  color: #7439db;
}
```

### Apply the Flex Direction to the form as well, go to Login.jsx
```
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
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            {/* Since for is a reserved word in JavaScript, React elements use htmlFor instead. */}
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="yourmail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password" /> 
            {/* Password will not be displayed because of the type set */}
            <button type="submit">Log In</button>
        </form>
        <button onClick={() => props.onFormSwitch('register')}>Need a Account? Register here</button>
        </div>
    )
}
```

### Do the same in Register.jsx
```
import React, { useState } from "react"

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        {/* if we don't declare prevent default the page is going to get reloaded an we're lose the State */ }
        console.log(email);
    }
    return (
        <div className="auth-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            {/* Since for is a reserved word in JavaScript, React elements use htmlFor instead. */}
            <input value={name} name="name" id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="yourmail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password" /> 
            {/* Password will not be displayed because of the type set */}
            <button type="submit">Log In</button>
        </form>
        <button onClick={() => props.onFormSwitch('login')}>Already have a Account? Login here</button>
        </div>
    )
}
```

### Change the Login and Don't have a Account Buttons
```
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
```

### Do the same in Register.jsx
```
import React, { useState } from "react"

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        {/* if we don't declare prevent default the page is going to get reloaded an we're lose the State */ }
        console.log(email);
    }
    return (
        <div className="auth-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            {/* Since for is a reserved word in JavaScript, React elements use htmlFor instead. */}
            <input value={name} name="name" id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="yourmail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password" /> 
            {/* Password will not be displayed because of the type set */}
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have a Account? Login here</button>
        </div>
    )
}
```

### Go to App.css and edit the Style of the Class link-btn, we also add some design styles here
```
.App {
  text-align: center;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: linear-gradient(79deg, #7439db, #c66fbc 48%, #f7944d);
}

.auth-form-container, .login-form, .register-form {
  display: flex;
  flex-direction: column;
}

@media scrren and (min-width: 600px) {
  .auth-form-container {
    padding: 5rem;
    border: 1px solid white;
    border-radius: 10px;
    margin: 0.5rem;
  }
}


label {
  text-align: left;
  padding: 0.25rem 0;
}

input {
  margin: 0.5rem 0;
  padding: 1rem;
  border: none;
  border-radius: 10px;
}

button {
  border: none;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  color: #7439db;
}

.link-btn {
  background: none;
  color: white;
  text-decoration: underline;
}
```

# Add Names to the Form

### go to Register.jsx and add the Title
```
import React, { useState } from "react"

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        {/* if we don't declare prevent default the page is going to get reloaded an we're lose the State */ }
        console.log(email);
    }
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            {/* Since for is a reserved word in JavaScript, React elements use htmlFor instead. */}
            <input value={name} name="name" id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="yourmail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password" /> 
            {/* Password will not be displayed because of the type set */}
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have a Account? Login here</button>
        </div>
    )
}
```

### go to Login.jsx and do the same, but change the Title to Login
```
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
```
