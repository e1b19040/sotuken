import {DataContext} from '../DataContext'
import {useContext, useEffect} from 'react'



export default function Playgame() {
    const context = useContext(DataContext)
    const socket = context.socket
    const SocketOn = ()=> {socket.on('test',()=>console.log("test.ok"))}

    useEffect(()=> {SocketOn()
    return()=>{socket.off("test")}})
    

return(
    <>
    <h2>hello</h2>
    </>
)
}