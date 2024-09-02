import { useState } from "react";
import styles from "./Login.module.css"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [responseMessage, setResponseMessage] = useState("")

    // function to handle login
    async function handleLogin(e) {
        e.preventDefault();

        const loginData = {
            email : email,
            password : password
        }
        // api url to send the login data
        const apiUrl = "http://localhost:2020/login";

        // configure request options
        const requestOptions = {
            method : "POST",
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(loginData)
        }
        try {
            const response = await fetch(apiUrl, requestOptions);
            const data = await response.json()
            // console.log(data)
            setResponseMessage(data)
            if(data.status === "success") {
                setTimeout(() => {
                    setResponseMessage("")
                }, 2000);
            }
            // reset the login
            setEmail("")
            setPassword("")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className={styles.login_container}>
        <p className={styles.message}>{responseMessage.message}</p>
        <h1>Login</h1>
        <form onSubmit={handleLogin}> 
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
            <input type="submit" value="Login" />
        </form>
    </div>
  )
}

export default Login
