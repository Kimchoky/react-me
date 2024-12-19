type MenuType = {
    id: string,
    name: string,
    href?: string,
    children?: Array<MenuType>
}

export const menuList: Array<MenuType> = [
    {
        id: 'about',
        name: 'About',
        href: '/about',
    },
    {
        id: 'portfolio',
        name: 'Portfolio',
        href: '/portfolio',
        children: [
            {
                id: 'portfolio/iPhone',
                name: 'iPhone',
                href: 'iPhone'
            }
        ]
    },
    {
        id: 'service',
        name: 'Service',
        children: [
            {
                id: 'wip0',
                name: 'Work in progress'
            }
        ]
    }
]