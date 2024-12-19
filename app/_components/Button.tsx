import { ComponentPropsWithoutRef, useContext, } from "react";
import { ThemeContext } from "../_hooks/ThemeProvider";


type ButtonCustomProps = {
    size?: 'sm' | 'md' | 'lg',
    color?: string,
    bgColor?: string,
}
type ButtonProps = {
    children?: string,
    svg?: string | { src: string },
} & ButtonCustomProps & ComponentPropsWithoutRef<'button'>;


const getStyle = ({ size = 'md', color, bgColor }: ButtonCustomProps) => {

    const padding = { sm: .6, md: 1, lg: 1.6, }

    return Object.assign({
        padding: (padding[size] / 2 + 'rem') + ' ' + (padding[size] + 'rem'),
        color: color ?? 'var(--background-color)',
        backgroundColor: bgColor ?? 'var(--foreground-color)',
    })

}

export default function Button({ children, svg, color, bgColor, size = 'md', ...props }: ButtonProps) {

    let style = getStyle({ size, color, bgColor });
    if (svg) {
        const { theme } = useContext(ThemeContext);
        const invert = theme === 'light' ? 0 : 1;

        Object.assign(style, {
            WebkitFilter: `invert(${invert})`, /* safari 6.0 - 9.0 */
            filter: `invert(${invert})`,
        })
    }

    return (
        <button className={`rounded-xl m-1 hover:bg-slate-500 `}
            style={style}
            {...props}
        >
            {svg && (typeof svg === 'string' ? <span><img src={svg} /></span> : <span><img src={svg.src} /></span>)}
            <span>{children}</span>
        </button>
    )
}