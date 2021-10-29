function SidebarRow({ src, Icon, title }) {
    return (
        <div className='flex items-center p-4 space-x-5 hover:bg-gray-200 rounded-xl cursor-pointer'>
            {
                src && (
                    <Image src={src} width={30} height={30} className="rounded-full" layout="fixed" />
                )
            }

            {
                Icon && (   
                    <Icon className="h-8 w-8 rounded-full text-blue-500" />
                )
            }
            <p className="hidden sm:inline-flex font-medium">{title}</p>

        </div>
    )
}

export default SidebarRow
