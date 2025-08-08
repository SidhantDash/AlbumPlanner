"use client";

import { login } from "@/lib/actions/auth";

export default function SignInButton() {
    return (
        <>
            <button
            className="bg-white text-black"
            onClick={() => login()}>
                Sign In with Github
            </button>
        </> 
    )
}