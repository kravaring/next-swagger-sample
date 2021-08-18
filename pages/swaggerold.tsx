/* eslint-disable react/display-name */
import { FunctionComponent } from "react";
import { OpenAPIV2 } from 'openapi-types';
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { AugmentingLayoutPlugin, OperationsLayoutPlugin } from "../customization/layout";
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
    scheme: OpenAPIV2.Document;
}

const App: FunctionComponent<AppProps> = ({ scheme }) => {
    return (
        <>
            <TopMenu />
            <div id="swagger-ui">
                <SwaggerUI 
                    spec={scheme}
                />
            </div>
        </>
    );
}

export default App;
