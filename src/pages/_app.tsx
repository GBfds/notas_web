import "../styles/global.scss";

import {Header} from "../components/Header"
import { AlertDevelopment } from "../components/AlertDevelopment";

function MyApp({ Component, pageProps }) {
  return(
    <>
    <AlertDevelopment/>
    <Header/>
    <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
