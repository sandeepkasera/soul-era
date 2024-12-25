"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import {toast} from "react-hot-toast";


export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            router.push("/login")
        } catch (error:any) {
            console.log("Sign Up failed", error.message);
            
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
        
    }
    useEffect(() => {
        if (user.email.length > 0 && user.password.length>0 &&  user.username.length>0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
            
    }, [user]);
    return (
        <div className="className flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="className text-center">{loading? "Processing" : "Signup"}</h1><hr/>
            <label htmlFor="username">Username</label>
            <input 
                id="username"
                type="text"
                className="text-black"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="username"
                />

            <label htmlFor="email">Email</label>
            <input 
                id="email"
                type="email"
                className="text-black"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="email"
                />
            <label htmlFor="password">Password</label>
            <input 
                id="password"
                type="password"
                className="text-black"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="password"
                />
            <button onClick={onSignup} className="p-2 border">{buttonDisabled? "No Signup": "Signup Here"}</button>
            <Link href="/login" >Login</Link>
        </div>
    )
}