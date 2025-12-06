import React from 'react'
import { Icon } from '@iconify/react';

const Sidebar = () => {
    return (
        <>
        <div className='bg-[#FFECC8] w-84 h-screen '>
            <div  className='text-[#5C5950] sticky pl-8 space-y-13 pt-30'>
                <p className='flex gap-5 text-[24px] items-center'> <Icon icon="mdi:compass" width="36" height="36" /> Explore</p>
                <p className='flex gap-5 text-[24px] items-center'><Icon icon="fluent:people-community-20-filled" width="36" height="36" /> Community help</p>
                <p className='flex gap-5 text-[24px] items-center'> <Icon icon="gg:profile" width="36" height="36" />Profile</p>
                <p className='flex gap-5 text-[24px] items-center'><Icon icon="ic:sharp-emoji-events" width="36" height="36" />Events</p>
                <p className='flex gap-5 text-[24px] items-center'><Icon icon="majesticons:logout" width="36" height="36" />Log out</p>
            </div>
        </div>
        </>
    )
}

export default Sidebar