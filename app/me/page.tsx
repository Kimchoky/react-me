import Link from "next/link";
import { FunctionComponent } from "react";

interface mainProps {
    
}
 
const main: FunctionComponent<mainProps> = () => {
    return (
        <div>
            <h1>Main</h1>

            <Link href="/portfolio/iphone">iPhone</Link>                
        </div>
    );
}
 
export default main;