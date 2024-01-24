# Login register Form in React

## Start a new Project in React, you need NodsJS and NPM
Node.js is a Javascript runtime environment that processes data very quickly and is easy to scale. NPM is a Package Manager which is available for public use. NPM allows us to easily use code written by others without having to write it ourselves during development.

### Create a new Project using NPX
NPX stands for Node Package Execute. NPX comes with NPM, when NPM is installed above the 5.2.0 version, it gets installed automatically. NPX is an NPM package runner and its role is to execute the package from the registry without even installing that package.
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
The code defines a short React function component called Register that uses the text "Register" in a React fragment. This component is exported and can be used in other parts of the code.
```
export const Register = () => {
    return (
        <>Register</>
    )
}
```

### Inside Login.jsx create the Component itself
The code defines a short React function component called Login that uses the text "Login" in a React fragment. This component is exported and can be used in other parts of the code.
```
export const Login = () => {
    return (
        <>Login</>
    )
}
```

### Import both components to App.jsx and delete all Text in the Div Container. We test the code by inserting a 'login' in line 9. We can check this in the browser. 
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
Creates a login form with fields for e-mail and password as well as a login button. The password is hidden due to the "password" input type.
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
'useState' is a React hook that enables function components to manage their own local state. By declaring a state variable and an associated update function, data can be saved and dynamically updated. In React, 'const' is used to declare function components.
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

### Once these values get updated they're stored in the state we need to somehow capture them when user submits the form.
'onSubmit={handleSubmit}' is an attribute in React that specifies that the 'handleSubmit' function should be called when the associated form is submitted. The 'handleSubmit' function is called when the form is submitted. As a rule, 'event.preventDefault()' is used in the 'handleSubmit' function to prevent the default behavior of the form.
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

### Go to App.js and create a logic that would control which form is getting displayed.
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
        {/* if currentForm equals "login", the login component is rendered; otherwise, the register component is rendered. */ }
      }
    </div>
  );
}

export default App;
```

### Go to Register.jsx and create the Register form
The input expression 'value={pass} onChange={(e) => setPass(e.target.value)}' in React creates an input field that is controlled by the pass state. The value property sets the current value of the input field, and onChange defines a function that is called when the user changes the content. This function updates the pass state with the new value of the input field. Together, this enables a bidirectional data binding between the React state and the input field.
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
If the condition is true and the login component is rendered, it receives the prop 'onFormSwitch' with the value 'toggleForm'. This is useful if you want to be able to switch the form in the login component when certain actions are performed (such as clicking on a link or pressing a button). 'toggleForm' would then be a function in your parent component area that changes the state of 'currentForm' and allows you to switch between forms.
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
The expression div className="auth-form-container" creates a div element in React and assigns it the CSS class "auth-form-container". This enables the application of specific style rules for the container in CSS.
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
  {/* Centers the text within the element horizontally. This affects the text within the element and not necessarily the alignment of the element itself. */}

  display: flex;
  {/* Specifies that the element is a flex container. Flexbox is a layout model in CSS that allows containers and their children to be positioned and aligned flexibly. */}
  
  min-height: 100vh;
  {/* Sets the minimum height of the element to 100% of the viewport height (vh). The element will occupy at least the full height of the visible area of the browser window. */}
  
  align-items: center;
  {/* Centers the children of the Flex container along the vertical axis. Here, the elements are aligned vertically in the middle of the container. */}
  
  justify-content: center;
  {/* Centers the children of the Flex container along the horizontal axis. Here, the elements are aligned horizontally in the middle of the container. */}
  
  color: white;
  
  background-image: linear-gradient(79deg, #7439db, #c66fbc 48%, #f7944d);
  {/* The gradient starts at 79 degrees angle with the color #7439db, then goes to #c66fbc at 48% of the gradient and finally ends at #f7944d.This creates a colored background that transitions from one color to another. */}
}

.auth-form-container, .login-form, .register-form {
  display: flex;
  flex-direction: column;
}

label {
  text-align: left;

  padding: 0.25rem 0;
  {/* defines the inner spacing (padding) of an element. The upper and lower inner spacing is 0.25 Rem, while the left and right inner spacing is 0. This is often used to create vertical spacing between elements. */}
}

input {
  margin: 0.5rem 0;
}

button {
  border: none;
  background-color: white;
  padding: 20px;
  
  border-radius: 10px;
  {/* is used to define rounded corners for an element.
10px specifies the radius of the rounded corners in pixels. In this case, the corners of the element are rounded with a radius of 10 pixels. */
}
  cursor: pointer;
  {/* Cursor is used to change the mouse pointer style when it is moved over the element. Pointer sets the mouse pointer style to a pointer, which usually indicates that the element is clickable. The mouse pointer changes to a hand when hovering over the element. */}
  
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
