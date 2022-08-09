import '../styles/globals.css'
import io from 'socket.io-client'
import { useEffect } from 'react'
import {DataContext} from '../DataContext'
let socket;


function MyApp({ Component, pageProps }) {
  /*useEffect(()=>{
    socketTie();
  },[])*/
  const socketTie = async()=>{
    await fetch('/api/socketio')
      socket = io("/game")

    socket.on('connect',()=>{
      console.log('connect');  
      socket.emit('hello');    
    });

    socket.on('hello',data => {
      console.log('hello' + data);
    }) 
  }
  return(
  <>
  <DataContext.Provider 
  value={{socket:socket}}>  <Component {...pageProps} />
  </DataContext.Provider>
  <button onClick={()=>{socketTie()}}>socketTie</button>
  </>
  )
}

export default MyApp
