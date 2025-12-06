import React from 'react'
import { Icon } from '@iconify/react';

const Sidebar = () => {
    return (
        <>
        <div className='bg-[#FFECC8] z-50 w-84 h-screen sticky top-0 left-0'>
            <div  className='text-[#5C5950] pl-8 space-y-13 pt-30 '>
                <button className='flex gap-5 text-[24px] items-center'> <Icon icon="mdi:compass" width="36" height="36" /> Explore</button>
                <button className='flex gap-5 text-[24px] items-center'><Icon icon="ic:sharp-create" width="36" height="36" /> Create </button>
                <button className='flex gap-5 text-[24px] items-center'><Icon icon="ic:sharp-emoji-events" width="36" height="36" />Events</button>
                <button className='flex gap-5 text-[24px] items-center'><Icon icon="fluent:people-community-20-filled" width="36" height="36" /> Community help</button>
                <button className='flex gap-5 text-[24px] items-center'> <Icon icon="ix:user-profile-filled" width="36" height="36" />Profile</button>
                <button className='flex gap-5 text-[24px] items-center'><Icon icon="majesticons:logout-line" width="36" height="36" />Log out</button>
            </div>
        </div>
        </>
    )
}

export default Sidebar