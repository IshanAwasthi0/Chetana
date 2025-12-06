'use server';

import { revalidatePath } from "next/cache";
import { supabase } from "../lib/supabase-client";


export const addPost = async ({newPost} : {newPost: {title: string, description: string}}) => {
    const {error} = await supabase.from('posts').insert(newPost).single()
    if (error) {
        console.error(error.message)
    }
    revalidatePath('/')
}

export const fetchPosts = async () => {
    const {data: posts, error} = await supabase
    .from('posts')
    .select('*')
    .order('created_at', {ascending: false})
    if(error) {
        console.error(error.message)
    }
    return posts
}

export const signUser = async ( signIn: boolean, email: string, password: string ) => {
    if ( signIn ){
            const { error: signInError } = await supabase.auth.signInWithPassword({email, password})

            if (signInError) {
                console.error(signInError);
            }
        } else {
            const { error: signUpError } = await supabase.auth.signUp({email, password})

            if ( signUpError ) {
                console.error(signUpError)
            }
        }
}