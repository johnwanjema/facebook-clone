import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from "@heroicons/react/solid";
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import HeaderIcon from "./HeaderIcon";

function Header() {
    return (
        <div className='sticky flex top-0 z-50 bg-white items-center p-2 lg:px-5 shadow-md'>
            <div className='flex items-center'>
                <Image src="https://links.papareact.com/5me" width={40} height={40}
                    layout="fixed" />
                <div className='flex ml-2 items-centre items-center rounded-full bg-gray-100 p-2'>
                    <SearchIcon className='h-6 text-gray-600' />
                    <input
                        className=' flex ml-2 items-centre bg-transparent outline-none placeholder-gray-500 flex-shrink'
                        type='text' placeholder="Search facebook " />
                </div>
            </div>
            <div className='flex justify-centre flex-grow'>
                <div className='flex space-x-6  sm:space-x-2'>
                    <HeaderIcon Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            <div className='flex'>
                <BellIcon className='text-xl h-10' />
                <ChevronDownIcon className=' h-10' />
            </div>
        </div>
    )
}

export default Header
