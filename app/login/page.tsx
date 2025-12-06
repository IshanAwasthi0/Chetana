'use client';


import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "../lib/supabase-client";

const page = () => {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { error: signInError } = await supabase.auth.signInWithPassword({email, password})
            if (signInError) {
            console.error(signInError);
        }
        router.push('/')
        router.refresh()
    }
    return (
        <div className="flex justify-center items-start min-h-screen pt-27">
            <div className="text-center text-black">
                <h1 className="text-[48px] mb-10">
                    Login 
                </h1>
                <form 
                onSubmit={handleSubmit}
                className="flex-row gap-6 items-center justify-center border-2 border-black rounded px-12 py-12 bg-[#FFF7D1] w-[410px] h-[310px]">
                    <input 
                        type="email" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                        setEmail(() => (e.target.value))
                        }}
                        className="w-full mb-6 px-6 py-3 border-2 border-black rounded bg-[#FFECC8]"
                    />
                    <input 
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                        setPassword(() => (e.target.value))
                        }}
                        className="w-full mb-6 px-6 py-3 border-2 border-black rounded bg-[#FFECC8]"
                    />
                    <button className="px-6 py-3 bg-[#FFE3A6] border-2 border-black rounded">
                        Sign Up
                    </button>
                    <p className="mt-4 text-[1em] text-[#5C5950]">
                        Dont have an account? <span className="underline">Sign up</span>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default page