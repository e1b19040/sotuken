import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  /*useEffect(()=>{
    socketTie();
  },[])*/
  return(
  <>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
