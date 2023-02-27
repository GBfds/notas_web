import {Provider as NextAuthProvider} from "next-auth/client"
import {AppProps} from "next/app";
import {MessageAlert} from "../components/MessageAlert"


import {Header} from "../components/Header";

import "../styles/global.scss";

function MyApp({ Component, pageProps} : AppProps) {
  return(
    <NextAuthProvider session={pageProps.session}>
    <Header/>
    <MessageAlert/>
    <Component {...pageProps} />
    </NextAuthProvider>
  ) 
}

export default MyApp
