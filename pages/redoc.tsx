/* eslint-disable react/display-name */
import { FunctionComponent } from "react";
import { RedocStandalone } from 'redoc';
import { TopMenu } from "../components/TopMenu";

export async function getStaticProps() {
    try {
        const resp = await fetch('https://petstore.swagger.io/v2/swagger.json');
        const scheme = await resp.json();
        //console.log(scheme);
        return {
            props: {
                scheme,
            }
        };
    } catch (err) {
        console.log(err);
    }
    
}

interface AppProps {
    scheme: object;
}

const App: FunctionComponent<AppProps> = ({ scheme }) => {
    return (
        <>
            <TopMenu />
            <RedocStandalone 
                spec={scheme}
            />
        </>
    );
}

export default App;