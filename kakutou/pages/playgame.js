import {DataContext} from '../DataContext'
import {useContext, useEffect, useState} from 'react'



export default function Playgame() {
    const [msg,setMsg]=useState(null)
    const context = useContext(DataContext)
    const socket = context.socket
    const SocketOn = ()=> {socket.on('test',(msg)=>{console.log("test.ok");setMsg(msg)})}

    useEffect(()=> {SocketOn()
    return()=>{socket.off("test")}})
    

return(
    <>
    <h2>hello</h2>
    {msg}
    </>
)
}