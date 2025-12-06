'use client';

import { FormEvent, useState } from "react"
import { addPost } from "../actions/PostActions";
import Sidebar from "../components/Sidebar";

const page = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [contact, setContact] = useState('')
    const [type, setType] = useState('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addPost({newPost: {title, description, location, contact, type}})
        setTitle('')
        setDescription('')
        setLocation('')
        setContact('')
        setType('')
    }
    return (
        <>
            <Sidebar />
            <div className="flex flex-col items-center pt-15 gap-8 absolute top-0 left-[50%] right-[50%]">
                <span className="flex w-140 h-15 text-center items-center justify-center text-6xl text-black mb-5">Create</span>
                <form onSubmit={handleSubmit} className="mb-16 relative flex flex-col items-center gap-8 w-180 h-210 pt-15 border-3 border-black rounded bg-[#FFF7D1] p-15">
                    <input type="text" 
                    value={title}
                    onChange={(e) => {
                    setTitle(() => (e.target.value))
                    }}
                    placeholder="Enter title" className="text-xl bg-[#FFECC8] w-160 h-15 border-2 border-black text-[#726F63] rounded pl-5 pr-5 focus:outline-0 focus:ring-0"/>
                    <textarea 
                    value={description}
                    onChange={(e) => {
                    setDescription(() => (e.target.value))
                    }}
                    placeholder="Description..." className="text-[#726F63] bg-[#FFECC8] rounded text-lg p-6 w-160 resize-y  overflow-y-auto min-h-90 max-h-120 scroll-y-0 border-3">
                    </textarea>
                    <input type="text"
                    value={location}
                    onChange={(e) => {
                    setLocation(() => (e.target.value))
                    }}
                    placeholder="Location" className="text-xl bg-[#FFECC8] w-140 h-15 border-2 border-black text-[#726F63] rounded pl-5 pr-5 focus:outline-0 focus:ring-0"/>
                    <input type="text"
                    value={contact}
                    onChange={(e) => {
                    setContact(() => (e.target.value))
                    }}
                    placeholder="Contact" className="text-xl bg-[#FFECC8] w-140 h-15 border-2 border-black text-[#726F63] rounded pl-5 pr-5 focus:outline-0 focus:ring-0"/>
                    <select
                    value={type}
                    onChange={(e) => {
                    setType(() => (e.target.value))
                    }}
                    className="appearance-none text-xl bg-[#FFECC8] w-140 h-15 border-2 border-black text-[#726F63] rounded px-6 focus:outline-none focus:ring-0">
                        <option value="" disabled hidden>Type:</option>
                        <option value="awareness">Awareness</option>
                        <option value="request">Request</option>
                        <option value="offer">Offer</option>
                        <option value="events">Events</option>
                    </select>                          
                    <button 
                    type="submit"
                    className="hover:cursor-pointer right-20 text-xl text-black bg-[#FFE3A6] w-100 h-15 border-2 border-black rounded pl-5 pr-5 focus:outline-0 focus:ring-0">Post</button>
                </form>
            </div>
        </>
    )
}

export default page


