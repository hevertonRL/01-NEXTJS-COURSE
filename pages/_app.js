import GlobalStyle from "../src/components/theme/GlobalStyle";

function MyApp({Component, pageProps}) {
    return (
        <>
            teste de Component middleware!
            <GlobalStyle />
            <Component {...pageProps}/>
        </>
    )
}

export default MyApp;