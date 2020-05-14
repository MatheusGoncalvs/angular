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
        icon: 'glyphicon-flag',
        route: null,
        submenu: [
            {
                text: 'Select',
                icon: 'glyphicon-expand',
                route: null,
                submenu: [
                    {
                        text: 'USA',
                        icon: 'glyphicon-flag',
                        route: 'country-detail/USA',
                        submenu: null
                    },
                    {
                        text: 'India',
                        icon: 'glyphicon-flag',
                        route: 'country-detail/India',
                        submenu: null
                    },
                    {
                        text: 'Brazil',
                        icon: 'glyphicon-flag',
                        route: 'country-detail/Brazil',
                        submenu: null
                    }
                ]
            },
            {
                text: 'Top 3',
                icon: 'glyphicon-flag',
                route: 'country-list/3',
                submenu: null
            },
            {
                text: 'Top 10',
                icon: 'glyphicon-flag',
                route: 'country-list/10',
                submenu: null
            },
            {
                text: 'All',
                icon: 'glyphicon-flag',
                route: 'country-list/0',
                submenu: null
            }

        ]
    },
    {
        text: 'Maintenance',
        icon: 'glyphicon-wrench',
        route: null,
        submenu: [
            {
                text: 'Country List',
                icon: 'glyphicon-th-list',
                route: 'country-maint',
                submenu: null
            },
            {
                text: 'Settings',
                icon: 'glyphicon-cog',
                route: 'settings',
                submenu: null
            }
        ]
    }
]