import React from 'react';
import { MonitorIcon, FileIcon, ProfileIcon, PadNoteIcon, PresentationIcon, SettingsIcon, ShieldIcon} from '../../icons';


const sideMenuListItems = [
    {
        name: 'Point of sales',
        icon:  MonitorIcon
    }, 
    {
        name: 'Invoices & returns',
        icon: FileIcon
    },
    {
        name: 'Contacts',
        icon: ProfileIcon
    },
    {
        name: 'Inventory',
        icon: PadNoteIcon
    },
    {
        name: 'Reports',
        icon: PresentationIcon
    },
    {
        name: 'Settings',
        icon: SettingsIcon
    },
    {
        name: 'Imprint',
        icon: ShieldIcon
    }
]

export default sideMenuListItems