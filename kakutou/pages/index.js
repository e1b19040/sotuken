import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import io from 'socket.io-client'
import { useEffect } from 'react'
let socket;


export default function Home() {
  useEffect(()=>{
    socketTie();
  },[])
  const socketTie = async()=>{
    await fetch('/api/socketio').finally(()=>{
      socket = io()

    socket.on('connect',()=>{
      console.log('connect');  
      socket.emit('hello');    
    });

    socket.on('hello',data => {
      console.log('hello' + data);
    })
    })
    
  }
  return(
    <>
    <h1>helloworld</h1>
    </>
  )
}
