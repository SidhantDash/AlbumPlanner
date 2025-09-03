"use client";

import { login } from "@/lib/actions/auth";
import { loginGoogle } from "@/lib/actions/auth";

export default function SignInButton() {
    return (
        <>
            <button
            className="bg-white text-black"
            onClick={() => login()}>
                Sign In with Github
            </button>
            <button
            className="bg-white text-black"
            onClick={() => loginGoogle()}>
                Sign In with Google
            </button>
        </> 
    )
}