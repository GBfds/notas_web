import Document, {Html, Main, Head, NextScript} from "next/document";

export default class MyDocument extends Document{
    render(): JSX.Element {
        return(
            <Html>
                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet"/>
                </Head>
                <main>
                    <Main/>
                    <NextScript/>
                </main>
            </Html>
        )
    }
}