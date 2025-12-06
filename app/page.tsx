'use client';

import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase-client";
import { useSessionStore } from "./store/SessionStore";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  useEffect(() => {
  const initializeSession = async () => {
    const { data: { session } } = await supabase.auth.getSession()
    useSessionStore.getState().setSession(session)
  }
  initializeSession()
}, [])
  const session = useSessionStore.getState().session
  if (!session) {
    router.push('/login')
  }
  if (session){
    return (
    <>
      <Sidebar/>
      <div className="flex flex-col items-center w-screen h-screen ">
        <Searchbar/>
      </div>   
    </>
  );
}}
