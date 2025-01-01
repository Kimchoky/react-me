type ThemeStr = 'dark'|'light';

type IBooleanContext = [Boolean, React.Dispatch<React.SetStateAction<Boolean>>];

type MenuType = {
    id: string,
    name: string,
    href?: string,
    children?: Array<MenuType>
}

type ImportedSvgFileType = string | { src: string }

interface BlogPostProps {
    id: number,
    title: string,
    content: string,
    created_at: string,
} 

type LayoutProps = Readonly<{ children: React.ReactNode }>