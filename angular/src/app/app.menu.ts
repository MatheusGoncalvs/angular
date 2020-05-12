import { MenuItem } from '../generalframework/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'fas fa-user-graduate',
        route: '/dashboard',
        submenu: null
    },
    {
        text: 'Countries',
        icon: 'far fa-file-alt',
        route: '/countries',
        submenu: null
    },
    {
        text: 'Settings',
        icon: 'far fa-user-circle',
        route: '/settings',
        submenu: null
    }
]