function HeaderIcon({Icon}) {
    return (
        <div className='flex items-centre cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100
        rounded-xl active:border-b-2 active:border-blue-500 
        '>
            <Icon className='h-6 text-center text-gray-500 hover:text-blue-500  sm:h-7 mx-auto'/>
        </div>
    )
}

export default HeaderIcon
