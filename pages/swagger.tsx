/* eslint-disable react/display-name */
import { FunctionComponent, useState } from "react";
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

const Template: FunctionComponent<AppProps> = ({ scheme }) => {
    return (
        <div className="swagger-ui-placeholder">
            <section>
                <h1>{scheme.basePath}</h1>
                <p>{scheme.info.description}</p>
                <span>{scheme.info.title}</span><span>{scheme.info.version}</span>
            </section>
        </div>
    );
};

const App: FunctionComponent<AppProps> = ({ scheme }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const onLoaded = () => {
        setIsLoaded(true);
    };
    return (
        <>
            <TopMenu />
            <div id="swagger-ui">
                {!isLoaded && <Template scheme={scheme} />}
                <SwaggerUI 
                    spec={scheme}
                    onComplete={onLoaded}
                    plugins={[ AugmentingLayoutPlugin, OperationsLayoutPlugin ]}
                />
            </div>
        </>
    );
}

export default App;
