'use client'

import React, {useState, useContext} from "react";
import {useRouter} from 'next/navigation'
// import {useSession, signIn, signOut} from 'next-auth/react';
import styles from './login.module.css'
import { User } from "../../context/user";

export default function SignIn(){
    const [user, setUser] = useContext(User);

    const router = useRouter()
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    // const session = useSession()

    const isInvalid = password===''||emailAddress==='';

    const handleSignIn = (event) =>{
      console.log(emailAddress, password)
      event.preventDefault();
      fetch(`/api/user?email=${emailAddress}&password=${password}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(data=>{
        if(data.status==400){
          setError(data.message)
          setEmailAddress("")
          setPassword("")
        } else {
          console.log(data)
          // session.data = data
          // session.status = "authenticated"
          setUser(data)
          router.push("/property/add")
        }

      })
    }

    console.log(user)

    if(emailAddress && error){
      setError("")
    }
 
    return (
        <div>
          <div className={styles["signin--container"]}>
              <h1 className={styles["signin--title"]}>Log In</h1>
              {error && <div className={styles["submit--error"]}>{error}</div>}
              <form id="signin" className={styles["signin--base"]} onSubmit={handleSignIn}>
                <input 
                  type="email" 
                  name="email" 
                  className={styles["signin--input"]}
                  placeholder="Email Address"
                  value={emailAddress}
                  onChange={({target})=>setEmailAddress(target.value)} 
                />
                <input 
                  className={styles["signin--input"]}
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={({target})=>setPassword(target.value)} 
                />
                <button disabled={isInvalid} type="submit" className={styles["signin--submit"]}>
                  Log In
                </button>
                <button onClick={()=>signIn()} type="button" className={styles["signin--submit"]}>
                  Log In with Google
                </button>
              </form>
              <p className={styles["signin--text"]}>
                Don't have an account? <a className={styles["signin--link"]} href="/signin">Sign up now.</a>
              </p>
              <p className={styles["signin--textsmall"]}>
                This page is protected by Google reCAPTCH to ensure you're not a bot. Learn more.
              </p>
          </div>
        </div>
    )
}