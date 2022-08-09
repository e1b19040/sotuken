import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import {DataContext} from '../DataContext'
import {useContext} from 'react'


export default function Home() {
  const context = useContext(DataContext);
  const socket = context.socket;
  const sousin = ()=> {socket.emit("test")};
  return(
    <>
    <h1>helloworld</h1>
    <Link href = 'playgame'><a>playgame</a></Link>
    <input onKeyPress={e=>{
        const massage = e.target.value
        if(e.key !=='Enter'||!massage){
            return;
        }
        e.target.value='';
        socket.emit("test",massage)
    }} ></input>    
    </>
  )
}
