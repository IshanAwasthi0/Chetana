'use client';

import { Icon } from '@iconify/react';
import { useState } from 'react';
import { supabase } from '../lib/supabase-client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Sidebar = () => {
    const router = useRouter()
    const logout = async () => {
        await supabase.auth.signOut()
        router.push('/login')
    }
    const [display, setDisplay] = useState('hidden')
    return (
        <>
        <button onClick={() => {
            if (display === "hidden") {
                setDisplay('sticky')
            } else {
                setDisplay('hidden')
            }
        }}>
            <Icon icon="meteor-icons:sidebar" width="40" height="40" className="text-[#5C5950] absolute top-6 z-100 left-6"/>
        </button>
        <div className={`bg-[#FFECC8] z-50 w-84 rounded-2xl shadow-2xl h-120 ${display} top-20 left-0`}>
            <div  className='text-[#5C5950] pl-8 space-y-13 pt-12 flex flex-col gap-1 mt-16'>
                <button> 
                    <Link href={'/'}>
                        <span className='flex gap-5 text-[24px] items-center'>
                            <Icon icon="mdi:compass" width="36" height="36" /> Explore
                        </span>
                    </Link>
                </button>
                <button>
                    <Link href={'/create'}>
                        <span className='flex gap-5 text-[24px] items-center'><Icon icon="ic:sharp-create" width="36" height="36" /> Create </span>
                    </Link>
                </button>
                    <button className='flex gap-5 text-[24px] items-center'
                onClick={logout}><Icon icon="majesticons:logout-line" width="36" height="36" />Log out</button>
            </div>
        </div>
        </>
    )
}

export default Sidebar