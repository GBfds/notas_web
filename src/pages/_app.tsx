import {SessionProvider} from "next-auth/react"
import {AppProps} from "next/app";


import {Header} from "../components/Header";
import { AlertDevelopment } from "../components/AlertDevelopment";

import "../styles/global.scss";

function MyApp({ Component, pageProps} : AppProps, session) {
  return(
    <SessionProvider session={session}>
    <AlertDevelopment/>
    <Header/>
    <Component {...pageProps} />
    </SessionProvider>
  ) 
}

export default MyApp
