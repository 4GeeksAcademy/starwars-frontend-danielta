import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { Context } from "../store/appContext"
import { useContext } from "react"
import { useNavigate } from "react-router"






const Login = () => {

    let navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

    const verify = () => {
        actions.getUser(email, password)
        if (store.userID) navigate('/')
        else alert("user not logged in")
    }



    return (
        <div id="portal">
            <input id="username" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} onKeyUp={(e) => {
                if (e.key === "Enter") {
                    verify()
            }}}/>
            <input id="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} value={password}onKeyUp={(e) => {
                if (e.key === "Enter") {
                    verify()
            }}}/>
            <span id="submit" className="btn btn-primary" onClick={() => {verify()}}>Login</span>
            <span id="create" className="btn btn-warning" onClick={() => {navigate("/create")}}>Create User</span>
        </div>
    )
}

export default Login