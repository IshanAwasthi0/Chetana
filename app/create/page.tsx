

const page = () => {
    return (
        <>
            <div className="flex flex-col items-center pt-15 gap-8">
                <span className="flex w-140 h-15 text-center items-center justify-center text-6xl text-black mb-5">Create</span>


                <form action="" className="mb-16 relative flex flex-col items-center gap-8 w-[60%] h-210 pt-15 border-3 border-black rounded bg-[#FFF7D1] p-15">
                    <input type="text" placeholder="Enter title" className="text-xl bg-[#FFECC8] w-[95%] h-15 border-2 border-black text-[#726F63] rounded pl-5 pr-5 focus:outline-0 focus:ring-0"/>
                    <textarea placeholder="Description..." className="text-[#726F63] bg-[#FFECC8] rounded text-lg p-6 w-[95%] resize-y  overflow-y-auto min-h-90 max-h-120 scroll-y-0 border-3">

                    </textarea>
                        
                    <input type="text" placeholder="Location:" className="text-xl bg-[#FFECC8] w-[55%] h-15 border-2 border-black text-[#726F63] rounded pl-5 pr-5 focus:outline-0 focus:ring-0"/>
                    <select defaultValue={""} className="appearance-none text-xl bg-[#FFECC8] w-[55%] h-15 border-2 border-black text-[#726F63] rounded px-6 focus:outline-none focus:ring-0">
                        <option value="" disabled hidden>Type:</option>
                        <option value="awareness">Awareness</option>
                        <option value="request">Request</option>
                        <option value="offer">Offer</option>
                        <option value="events">Events</option>
                    </select>                          

                    <button className="hover:cursor-pointer right-20 text-xl text-black bg-[#FFE3A6] w-[38%] h-15 border-2 border-black rounded pl-5 pr-5 focus:outline-0 focus:ring-0">Post</button>

                </form>
            </div>

        </>
    )
}

export default page


