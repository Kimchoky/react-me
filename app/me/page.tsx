import { FunctionComponent } from "react";

interface mainProps {
    
}
 
const main: FunctionComponent<mainProps> = () => {
    return (
        <div>
            <header>
                <h1>Header</h1>
            </header>

            <main>
                <h1>Main</h1>
            </main>
            
            <footer>
                <h1>Footer</h1>
            </footer>
        </div>
    );
}
 
export default main;