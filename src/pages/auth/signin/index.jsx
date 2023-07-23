'use client'

import React, {useState} from "react";
import {useRouter} from 'next/navigation'
import {useSession, signIn, signOut} from 'next-auth/react';
import styles from './login.module.css'

export default function SignIn(){

    // const router = useRouter()
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const isInvalid = password===''||emailAddress==='';

    const handleSignIn = async(event) =>{
      console.log(emailAddress, password)
      const user = await signIn('credentials',{
        email:emailAddress,
        password,
        redirect:true,
        callbackUrl:'/'
      })
    }

    if(emailAddress && error){
      setError("")
    }
 
    return (
        <div className={styles['signin--wrapper']}>
          <div className={styles["signin--container"]}>
              <h1 className={styles["signin--title"]}>Log In</h1>
              {error && <div className={styles["submit--error"]}>{error}</div>}
              <div id="signin" className={styles["signin--base"]} >
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
                <button disabled={isInvalid} type="submit" className={styles["signin--submit"]} onClick={handleSignIn}>
                  Log In
                </button>
                <button onClick={()=>signIn()} type="button" className={styles["signin--submit"]}>
                  Log In with Google
                </button>
              </div>
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