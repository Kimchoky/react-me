type IBooleanContext = [Boolean, React.Dispatch<React.SetStateAction<Boolean>>];

type MenuType = {
    id: string,
    name: string,
    href?: string,
    children?: Array<MenuType>
}

type ImportedSvgFileType = string | { src: string }