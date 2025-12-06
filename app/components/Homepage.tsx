'use client';

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase-client";
import { useSessionStore } from "../store/SessionStore";
import Sidebar from "./Sidebar";
import { useRouter } from "next/navigation";
import Post from './Post'
import { Icon } from '@iconify/react';


interface PostType {
    id: string;
    title: string;
    description: string;
    location: string;
    contact: string;
    type: string;
}

export default function Homepage({posts}: {posts: PostType[]}) {
    const router = useRouter()
    useEffect(() => {
    const initializeSession = async () => {
        const { data: { session } } = await supabase.auth.getSession()
        useSessionStore.getState().setSession(session)
    }
    initializeSession()
    }, [])

    const session = useSessionStore.getState().session
    console.log(session)
    if (!session) {
        router.push('/login')
    }
    if (session){
        return (
        <>
        <Sidebar />
        <div className="flex flex-wrap w-screen absolute h-screen top-0 mt-50 gap-14 justify-center">
            {posts?.map(p => (
                <Post key={p.id} {...p}/>
            ))}
        </div>
        </>
    );
}}
