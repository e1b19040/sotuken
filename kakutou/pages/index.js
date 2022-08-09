import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {DataContext} from '../DataContext'
import {useContext} from 'react'


export default function Home() {
  const context = useContext(DataContext);
  const socket = context.socket;
  const sousin = ()=> {socket.emit("test")};
  return(
    <>
    <h1>helloworld</h1>
    <button onClick={()=>window.open("playgame")}>別ウィンドウ</button>
    <button onClick={()=>{sousin()}}>送信イベント</button>
    </>
  )
}
