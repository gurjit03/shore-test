import { MonitorIcon, FileIcon, ProfileIcon, PadNoteIcon, PresentationIcon, SettingsIcon, ShieldIcon} from '../../icons';


const sideMenuListItems = [
    {
        name: 'Point of sales',
        icon:  MonitorIcon,
        href: '/monitor'
    }, 
    {
        name: 'Invoices & returns',
        icon: FileIcon,
        href: '/monitor'
    },
    {
        name: 'Contacts',
        icon: ProfileIcon,
        href: '/contacts'
    },
    {
        name: 'Inventory',
        icon: PadNoteIcon,
        href: '/inventory'
    },
    {
        name: 'Reports',
        icon: PresentationIcon,
        href: '/reports'
    },
    {
        name: 'Settings',
        icon: SettingsIcon,
        href: '/settings'
    },
    {
        name: 'Imprint',
        icon: ShieldIcon,
        href: '/imprint'
    }
]

export default sideMenuListItems