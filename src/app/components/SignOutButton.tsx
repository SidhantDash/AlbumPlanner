"use client";

import { logout } from "@/lib/actions/auth";

export default function SignOutButton() {
    return (
        <>
            <button
            className="bg-white text-black"
            onClick={() => logout()}>
                Log out
            </button>
        </> 
    )
}