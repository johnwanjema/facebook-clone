import { useSession } from 'next-auth/client'
import { ChevronDownIcon, ShoppingBagIcon, UserGroupIcon } from '@heroicons/react/outline';
import { CalendarIcon, ClockIcon, DesktopComputerIcon, UsersIcon } from '@heroicons/react/solid'
import SidebarRow from './SidebarRow';

function Sidebar() {
    const [session] = useSession();
    return (
        <div className='p-2 mt-5 max-w-[600px] xl:m-w-[300px]'>
             {/* <SidebarRow src={user?.photoURL} title={user?.displayName}/> */}
            <SidebarRow Icon={UsersIcon} title="Friends" />
            <SidebarRow Icon={UserGroupIcon} title="Groups" />
            <SidebarRow Icon={ShoppingBagIcon} title="Market Place" />
            <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
            <SidebarRow Icon={CalendarIcon} title="Events" />
            <SidebarRow Icon={ClockIcon} title="Memories" />
            <SidebarRow Icon={ChevronDownIcon} title="See More.." />
        </div>
    )
}

export default Sidebar
