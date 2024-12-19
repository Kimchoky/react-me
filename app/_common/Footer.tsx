'use client'
interface FooterProps {
     
}

export default function Footer({ }: FooterProps) {
    return (
        <>
            <h6>Copyright {new Date().getFullYear()}, kimchoky.</h6>
        </>
    );
}